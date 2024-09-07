"use server";

import { revalidatePath } from "next/cache";
import prisma from "../db/db";

async function finishOrder(orderId: string) {
  await prisma.order.update({ where: { id: orderId }, data: { isDone: true } });
  revalidatePath("/admin/orders");
}

export default finishOrder;
