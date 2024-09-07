import finishOrder from "@/lib/actions/finish-order";
import React from "react";

interface IFinishOrderForm {
  orderId: string;
}

const FinishOrderForm: React.FC<IFinishOrderForm> = ({ orderId }) => {
  let finishOrderById = finishOrder.bind(null, orderId);
  return (
    <form action={finishOrderById}>
      <button className="border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200 self-end">
        Wykonane
      </button>
    </form>
  );
};

export default FinishOrderForm;
