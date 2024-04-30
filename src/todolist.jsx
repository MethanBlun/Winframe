import React from "react";

export default function Todolist() {
  return (
    <div  className=" flex items-start justify-center bg-slate-400 h-full w-full">
      <form className="   p-9  " onSubmit={null}>
        <div>
          <label htmlFor="item">New Item</label>
          <input
          //   value={newItem}
          //   onChange={e => setNewItem(e.target.value)}
          //   type="text"
          //   id="item"
          />
        </div>

        <button className="  ">Add</button>
      </form>
    </div>
  );
}
