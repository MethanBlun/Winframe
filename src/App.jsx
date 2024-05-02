import React, { useEffect } from "react";
import Quote from "./quoteGenerator";
import Todolist from "./todolist";

const App = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute  top-0 left-0 h-full w-1/5 bg-red-300 rounded-sm">
        dashbord
      </div>
      <div className="absolute top-0 right-0 h-1/4 w-4/5">
        <Quote />
      </div>
      <div className="absolute bottom-0 right-0 h-4/5 w-4/5 bg-slate-400">
        <Todolist />
      </div>
      task area
      <footer className="fixed bottom-0 left-0 w-full bg-slate-700">
        <div className="container mx-auto py-4">
          <p className="text-center text-white">Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
