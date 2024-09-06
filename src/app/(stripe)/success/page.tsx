"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    async function updatePayment(sessionId: string) {
      await fetch(`/api/stripe/update-payment/${sessionId}`, { method: "PUT" });
    }
    if (searchParams.get("session_id") !== null) {
      updatePayment(searchParams.get("session_id") as string);
    }
  }, []);

  return (
    <div className="mt-20">
      <h1 className={` text-4xl mb-2 font-semibold text-red-700 text-center`}>
        Sukces!
      </h1>
      <p className={`  mb-2 font-semibold text-red-700 text-center`}>
        Płatność zakończona! Za 5 sekund zostaniesz przekierowany do strony
        głównej...
      </p>
    </div>
  );
};

export default page;
