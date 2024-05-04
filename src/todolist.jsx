// import React, { useState } from "react";
// import { Button } from "@nextui-org/react";
// import { Input } from "@nextui-org/react";

// export default function Todolist() {
//   const [task, setTask] = useState("");

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

export default function Todolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    const value = event.target.value;
    setTask(value);
  }

  function handleButtonClick() {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask("");
    } else {
      alert("veiller mettre quelque chose dans le champs de saisi");
    }
  }
  function handleDelete(index) {
    console.log(index);
    setTasks((prevTasks) => {
      return prevTasks.filter((_t, tIndex) => tIndex !== index);
    });
  }
  function handleDone() {
    alert(`congratulation tu as achever 1 tache sur ${tasks.length}`);
  }

  return (
    <div className="h-full flex flex-col  bg-slate-200">
      <div className="flex items-start justify-center bg-slate-400 h-/4 w-full">
        <form
          className="p-7 m-5 w-full border-3 border-slate-900 rounded-2xl"
          onSubmit={(event) => {
            event.preventDefault();
            handleButtonClick();
          }}
        >
          <div className="flex gap-3 h-2 items-center justify-between">
            <div className="flex-grow">
              <Input
                className="w-full"
                value={task}
                onChange={handleInputChange}
                type="text"
              ></Input>
            </div>
            <Button type="submit" className="h-10 bg-slate-200">
              {" "}
              Add{" "}
            </Button>
          </div>
        </form>
      </div>
      <ul className=" flex flex-col-reverse p-2 w-full h/4/5">
        {tasks.map((task, index) => (
          <div className="flex gap-1" key={index}>
            <li
              className=" border-1 p-2  m-2 rounded-lg  w-4/5 text-center border-black"
              key={index}
            >
              {task}
            </li>
            {
              <button
                onClick={handleDone}
                className=" border p-2  m-2 border-black bg-green-400 rounded-lg"
              >
                done
              </button>
            }
            {
              <button
                onClick={() => handleDelete(index)}
                //it may happend an infinity loop if i dont pass index indisde of arrow function
                className=" border p-1  m-2 border-black bg-red-600 rounded-lg"
              >
                Delete
              </button>
            }
          </div>
        ))}
      </ul>
    </div>
  );
}
//comment supprimer une tache specifique parmis des taches
//est ce que je gere bien les id?
