import React from "react";
import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-3 "
    >
      <h1 className="font-bold text-gray-200 text-lg">Dashboard</h1>
      <div>
        <TextInput placeholder="Search...." icon={SearchIcon} />
      </div>
    </div>
  );
}
