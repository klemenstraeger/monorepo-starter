import { PrismaClient } from "database";

const client = new PrismaClient();

export default defineEventHandler(async (event) => {
  console.log("Test");
  return client.user.findMany();
});
