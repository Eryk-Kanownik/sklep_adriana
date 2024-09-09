import { diploma } from "@/fonts/font-init";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogOutButton from "@/components/general/auth/LogOutButton";
import prisma from "@/lib/db/db";
import SalesChart from "@/components/charts/MonthSalesChart";
import DaysInMonth from "@/components/general/DaysInMonth";

async function getSalesByDay() {
  const currentDate = new Date();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const totalSales = await prisma.order.aggregate({
    _sum: {
      price: true,
    },
    where: {
      createdAt: {
        gte: firstDayOfMonth,
        lte: lastDayOfMonth,
      },
    },
  });

  return totalSales;
}

const page = async () => {
  const session = await getServerSession();
  if (session === null) {
    redirect("/");
  }
  const sales = await getSalesByDay();
  return (
    <div className="px-4 flex flex-col lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-2 font-semibold text-red-700`}>
        Panel administratora
      </h1>
      <div className="flex flex-col">
        <h2>Sprzedaż</h2>
        <div className=" my-4 grid">
          <div className="border-[1px]  p-8 rounded-md">
            <p className="text-sm">Zarobki w tym miesiącu</p>
            <h1 className="font-bold text-4xl text-green-700">
              {(sales._sum.price! / 100).toFixed(2)}zł
            </h1>
            <div>
              <DaysInMonth />
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-2">
          <Link
            href="/admin/create-product"
            className="mt-4 border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700 duration-200">
            Utwórz produkt
          </Link>
          <Link
            href="/admin/orders"
            className="mt-4 border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700 duration-200">
            Przeglądaj zamówienia
          </Link>
        </div>

        <LogOutButton />
      </div>
    </div>
  );
};

export default page;
