import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from "./index";

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("migrated successfully");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
