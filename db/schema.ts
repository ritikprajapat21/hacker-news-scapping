import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const news = mysqlTable("news", {
  id: int().primaryKey(),
  title: varchar({ length: 255 }),
  link: varchar({ length: 255 }),
  time: timestamp().defaultNow(),
});
