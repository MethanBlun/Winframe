import React from "react";
import Quote from "./quoteGenerator";
import Todolist from "./todolist";
import Dashbord from "./dashbord";

const App = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute sm:hidden top-0 left-0 h-full w-1/5 bg-slate-300 rounded-sm">
      <Dashbord/>
      </div>
      <div className="absolute sm:w-full pb-2 right-0 h-1/4 w-4/5">
        <Quote />
      </div>
      <div className="absolute sm:w-full bottom-0 right-0 md:( h-4/5 w-4/5) bg-slate-500">
        <Todolist />
      </div>

      <footer className="fixed sm:hidden bottom-0 left-0 w-full bg-slate-700">
        <div className="container mx-auto py-4">
          <p className="text-center text-white">Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
