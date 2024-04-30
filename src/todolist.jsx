import React from "react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
export default function Todolist() {
  return (
    <div className=" flex items-start justify-center bg-slate-400 h-full w-full">
      <form className="p-9 flex flex-row gap-3" onSubmit={null}>
        <div>
          <label className=" p-2 text-slate-100" htmlFor="item"></label>

            <Input type="text"></Input>
        </div>

        <Button  className="h-7  bg-teal-800"> Add </Button>
      </form>
    </div>
  );
}
