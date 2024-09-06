import prisma from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params: { sessionId } }: { params: { sessionId: string } }
) {
  await prisma.order.updateMany({
    where: { stripeId: sessionId! },
    data: { isPayed: true },
  });

  return NextResponse.json({ message: "sessionId" });
}
