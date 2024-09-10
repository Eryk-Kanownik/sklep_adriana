import { diploma } from "@/fonts/font-init";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogOutButton from "@/components/general/auth/LogOutButton";
import prisma from "@/lib/db/db";

async function getSalesByDay() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const currentMonthStart = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const nextMonthStart = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1
  );

  const totalSales = await prisma.order.groupBy({
    by: ["createdAt"],
    _sum: {
      price: true,
    },
    where: {
      createdAt: {
        gte: currentMonthStart,
        lt: nextMonthStart,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const salesArray = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    totalSales: 0,
  }));

  // Fill in sales data
  totalSales.forEach((sale) => {
    const saleDate = new Date(sale.createdAt);
    const day = saleDate.getDate();
    salesArray[day - 1].totalSales = sale._sum.price || 0;
  });

  return salesArray;
}

const page = async () => {
  const session = await getServerSession();
  if (session === null) {
    redirect("/");
  }
  const sales = await getSalesByDay();
  const sum = sales
    .map((sale) => sale.totalSales)
    .reduce((total, sum) => total + sum);
  return (
    <div className="px-4 flex flex-col lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-2 font-semibold text-red-700`}>
        Panel administratora
      </h1>
      <div className="flex flex-col">
        <div className=" my-4 grid">
          <div className="border-[1px]  p-8 rounded-md">
            <p className="text-sm">Zarobki w tym miesiącu</p>
            <h1 className="font-bold text-4xl my-2 text-green-700">
              {(sum! / 100).toFixed(2)}
              zł
            </h1>
            <div>
              {
                //map days
                <ul className="grid grid-cols-7 gap-2">
                  {sales.map((data, index) => (
                    <li
                      className="relative border-[1px] rounded-md aspect-square p-2 flex justify-center items-center"
                      key={index}>
                      <p className="font-medium absolute top-2 left-2">
                        {data.day}
                      </p>
                      <h2
                        className={`text-lg font-bold ${
                          data.totalSales === 0 && "text-gray-500"
                        }  ${data.totalSales > 0 && "text-green-500"}`}>
                        {(data.totalSales / 100).toFixed(2)} zł
                      </h2>
                    </li>
                  ))}
                </ul>
              }
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
