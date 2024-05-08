import React from "react";
import { Button } from "@nextui-org/react";

export default function Dashbord() {
  return (
    <>
      <div className="flex flex-col mt-10 gap-14 p-3 ">
        <Button className="px-4 py-2  rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium">Achievement</Button>
        <Button className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium">Goals</Button>
        <Button className="px-4 py-2 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white font-medium">Statistics</Button>
      </div>
    </>
  );
}
