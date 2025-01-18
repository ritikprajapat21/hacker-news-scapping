import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./db/schema.ts",
  dbCredentials: {
    host: process.env.HOST!,
    user: process.env.DBUSER!,
    password: process.env.PASSWORD!,
    database: process.env.DATABASE!,
    port: parseInt(process.env.PORT!),
  },
});
