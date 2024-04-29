import React from 'react';


const App = () => {
  return (
    <div className="relative h-screen">
      {/* Première partie */}
      <div className="absolute top-0 left-0 h-full w-1/4 bg-red-300">dashbord</div>

      {/* Deuxième partie */}
      <div className="absolute top-0 right-0 h-1/3 w-3/4 bg-blue-300">c</div>

      {/* Troisième partie */}
      <div className="absolute top-1/4 left-1/3 w-2/3 h-2/4 bg-cyan-300">task manager</div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-500">
        <div className="container mx-auto py-4">
          <p className="text-center text-white">Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
