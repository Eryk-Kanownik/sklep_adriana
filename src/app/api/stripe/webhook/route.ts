import prisma from "@/lib/db/db";
import { tree } from "next/dist/build/templates/app-page";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const secret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");
  const event = stripe.webhooks.constructEvent(body, signature!, secret);

  if (event.type === "checkout.session.completed") {
    let stripeId = event.data.object.id;
    await prisma.order.updateMany({
      where: { stripeId },
      data: { isPayed: true },
    });
  }

  return NextResponse.json({ result: event, ok: true });
}
