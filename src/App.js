import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';

export const DrawerContext = createContext()

function App() {

  const [isOpen, setIsOpen] = useState(false);



  return (
    <DrawerContext.Provider value={[isOpen, setIsOpen]}>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </DrawerContext.Provider>
  );
}

export default App;
