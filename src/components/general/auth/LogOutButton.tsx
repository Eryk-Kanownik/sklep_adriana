"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogOutButton = () => {
  const onClick = () => {
    signOut();
  };

  return (
    <button
      onClick={onClick}
      className="mt-4 border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700 duration-200">
      Wyloguj
    </button>
  );
};

export default LogOutButton;
