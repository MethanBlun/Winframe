import React from "react";
import Quote from "./quoteGenerator";
import Todolist from "./todolist";
import Dashbord from "./dashbord";

const App = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute  top-0 left-0 h-full w-1/5 sm:hidden bg-slate-300 rounded-sm">
        <Dashbord />
      </div>
      <div className="absolute md:w-4/5 pb-6 right-0 h-1/4 sm:w-full">
        <Quote />
      </div>
      <div className="absolute md:w-4/5 bottom-0 right-0 sm:w-full h-4/5 ">
        <Todolist />
      </div>

      <footer className="fixed  bottom-0 left-0 w-full bg-slate-700">
        <div className="container mx-auto py-4">
          <p className="text-center text-white">Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
