import { createContext } from "react";

const LockContext = createContext({});

function LockProvider({ children }) {
  const toggleLockGif = (gif, index) => {
    if (localStorage.getItem(index)) {
      localStorage.removeItem(index);
    } else {
      localStorage.setItem(index, JSON.stringify(gif));
    }
  };

  return (
    <LockContext.Provider value={{ toggleLockGif }}>
      {children}
    </LockContext.Provider>
  );
}

export { LockProvider, LockContext };
