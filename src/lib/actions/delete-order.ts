"use server";
import { revalidatePath } from "next/cache";
import prisma from "../db/db";

async function deleteOrder(orderId: string) {
  await prisma.order.deleteMany({ where: { id: orderId } });
  revalidatePath("/admin/orders");
}

export default deleteOrder;
