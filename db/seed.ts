import { sql } from "drizzle-orm";
import { news } from "./schema";
import { db } from "./index";
import { getData } from "../utils";

export async function up() {
  await db.execute(sql`DROP TABLE IF EXISTS news`);
  process.exit(0);
}
//up();

const main = async () => {
  try {
    console.log("Seeding data");
    await db.delete(news);

    const data = await getData();

    await db.insert(news).values(data);
    console.log("Data inserted successfully");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

main();
