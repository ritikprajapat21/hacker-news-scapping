import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import { join } from "path";
import { getData } from "./utils";
import { news } from "./db/schema";
import { db } from "./db";
import { gte, eq } from "drizzle-orm";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const newsCount = async () => {
  const time = new Date(Date.now() - 5 * 60 * 1000);

  const result = await db.$count(news, gte(news.time, time));
  console.log("Count", result);
  return result;
};

const scrapeNews = async (socket: Socket) => {
  const data = await getData();
  data.forEach(async (d) => {
    try {
      const result = await db
        .select({ id: news.id })
        .from(news)
        .where(eq(news.id, d.id));

      if (result[0].id) {
        return;
      }
    } catch (error) {
      console.log(d.id);
      socket.emit("updates", { data: d });
      await db.insert(news).values(d);
    }
  });
};

const port = 3000;

app.get("/", async (_req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

io.on("connection", async (socket) => {
  console.log("User connected");

  const count = await newsCount();
  console.log("Emitting count", count);

  socket.emit("initial", { count });

  setInterval(
    () => {
      console.log("Scrapping new data");
      scrapeNews(socket);
    },
    5 * 60 * 1000,
  );

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
