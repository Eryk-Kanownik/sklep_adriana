import deleteOrder from "@/lib/actions/delete-order";
import React from "react";

interface IDeleteOrderForm {
  orderId: string;
}

const DeleteOrderForm: React.FC<IDeleteOrderForm> = ({ orderId }) => {
  let deleteOrderById = deleteOrder.bind(null, orderId);
  return (
    <form action={deleteOrderById}>
      <button className="border-2  px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200 self-end">
        Usuń
      </button>
    </form>
  );
};

export default DeleteOrderForm;
