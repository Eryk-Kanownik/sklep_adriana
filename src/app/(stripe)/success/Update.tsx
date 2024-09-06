"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";

const Update = () => {
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
    <Suspense>
      <div>Hello</div>
    </Suspense>
  );
};

export default Update;
