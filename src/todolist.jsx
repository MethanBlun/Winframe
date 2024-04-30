import React from "react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
export default function Todolist() {
  return (
    <div className=" flex  items-start justify-center bg-slate-400 h-full w-full">
      <form className="p-7 m-5 w-full flex flex-row border-3 border-slate-900 rounded-xl h-3 gap-3" onSubmit={null}>
        <div>
          <label className=" text-slate-100" htmlFor="item"></label>

            <Input className="w-full "  type="text"></Input>
        </div>

        <Button  className="h-10 bg-slate-200  "> Add </Button>
      </form>
    </div>
  );
}
