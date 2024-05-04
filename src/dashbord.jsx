import React from "react";
import { Button } from "@nextui-org/react";

export default function Dashbord() {
  return (
    <>
      <div className="flex flex-col gap-14 p-3">
        <Button className=" bg-emerald-300">Achievement</Button>
        <Button className=" bg-orange-300">Goals</Button>
        <Button className=" bg-cyan-700">Statistics</Button>
      </div>
    </>
  );
}
