import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  // const user = await db.user.create({
  //   data: {
  //     username: "moon",
  //     phone: "121212",
  //   },
  // });
  const users = await db.user.findMany({
    where: {
      username: {
        contains: "on",
      },
    },
  });
  console.log(users);
}
test();
export default db;
