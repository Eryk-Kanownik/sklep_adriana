"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AdminLoginForm = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let session = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });
    if (session?.ok) {
      router.push("/admin");
    } else {
    }
  };

  return (
    <form className="w-96 p-2 flex flex-col gap-2" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <label className="mb-1">Nazwa użytkownika</label>
        <input
          type="text"
          placeholder="Nazwa użytkownika..."
          name="username"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1">Hasło</label>
        <input
          type="text"
          placeholder="Hasło..."
          name="password"
          onChange={onChange}
        />
      </div>
      <button className="mt-4 border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200 disabled:border-gray-700 disabled:text-gray-700">
        Zaloguj
      </button>
    </form>
  );
};

export default AdminLoginForm;
