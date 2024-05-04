// import React, { useState } from "react";
// import { Button } from "@nextui-org/react";
// import { Input } from "@nextui-org/react";

// export default function Todolist() {
//   const [task, setTask] = useState("");

//   function handleInputChange(event) {
//     const value = event.target.value;
//     setTask(value);
//   }

//   function handleButtonClick() {
//     console.log(task);
//   }
//   return (
//     <div className="h-full flex flex-col">
//       <div className="flex items-start justify-center bg-slate-400 h-/4 w-full">
//         <form
//           className="p-7 m-5 w-full border-3 border-slate-900 rounded-2xl"
//           onSubmit={(event) => {
//             event.preventDefault(); // forbed the refresh of page after submit
//             handleButtonClick();
//           }}
//         >
//           <div className="flex gap-3 h-2 items-center justify-between">
//             <div className="flex-grow">
//               <Input
//                 className="w-full"
//                 onChange={handleInputChange}
//                 type="text"
//               ></Input>
//             </div>
//             <Button onClick={handleButtonClick} className="h-10 bg-slate-200">
//               {" "}
//               Add{" "}
//             </Button>
//           </div>
//         </form>
//       </div>
//       <ul className=" bg-slate-100 w-full h/4/5">
//         <li>hit the road jack</li>
//       </ul>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Button, button } from "@nextui-org/react";
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
  function handleDelete(id) {
    // setTasks((prevTasks) => {
    //   return prevTasks.filter((task) => task.index !== index);
    // });
    console.log(`my index is ${id}` )
    // function deleteTodo(id) {
    //   setTodos((currentTodos) => {
    //     return currentTodos.filter((todo) => todo.id !== id);
    //   });
    // }
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
        {tasks.map((task,id=crypto.randomUUID) => (
          <div className="flex gap-1" key={id}>
            <li
              className=" border-1 p-2  m-2 rounded-lg  w-4/5 text-center border-black"
              key={id}
            >
              {task}
            </li>
            {
              <button className=" border p-2  m-2 border-black bg-green-600 rounded-lg">
                done
              </button>
            }
            {
              <button
                onClick={handleDelete}
                className=" border p-1  m-2 border-black bg-red-800 rounded-lg"
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
