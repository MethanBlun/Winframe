import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function Todolist() {
  const [task, setTask] = useState("");

  function handleInputChange(event) {
    const value = event.target.value;

    setTask(value);
  }

  function handleButtonClick() {
    console.log(task);
  }
  return (
    <div className="h-full flex flex-col bg-orange-600">
      <div className="flex items-start justify-center bg-slate-400 h-/4 w-full">
        <form
          className="p-7 m-5 w-full border-3 border-slate-900 rounded-2xl"
          onSubmit={null}
        >
          <div className="flex gap-3 h-2 items-center justify-between">
            <div className="flex-grow">
              <Input
                className="w-full"
                onChange={handleInputChange}
                type="text"
              ></Input>
            </div>
            <Button onClick={handleButtonClick} className="h-10 bg-slate-200">
              {" "}
              Add{" "}
            </Button>
          </div>
        </form>
      </div>
      <ul className=" bg-slate-100 w-full h/4/5">

      </ul>
    </div>
  );
}
