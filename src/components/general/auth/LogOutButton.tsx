"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogOutButton = () => {
  const onClick = () => {
    signOut();
  };

  return <button onClick={onClick}>LogOutButton</button>;
};

export default LogOutButton;
