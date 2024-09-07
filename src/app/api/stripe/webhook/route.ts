import prisma from "@/lib/db/db";
import { tree } from "next/dist/build/templates/app-page";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature") as string;
  const event = stripe.webhooks.constructEvent(
    body,
    signature!,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  if (event.type === "checkout.session.completed") {
    let stripeId = event.data.object.id;
    console.log(stripeId);
    await prisma.order.updateMany({
      where: { stripeId },
      data: { isPayed: true },
    });
  }

  console.log("Hello from webhook!");

  return NextResponse.json({ result: event, ok: true });
}
