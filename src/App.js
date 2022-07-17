import React, { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

export const GlobalContext = createContext();

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch('http://127.0.0.1:3001/api/');
      const json = await data.json();
      setUsers(json.data.users);
    }
    api();
  }, [users]);


  return (
    <div className="App">
      <Header/>
        <div className="components">
          <GlobalContext.Provider value={{ users, setUsers }}>
            <AddUser/>
            <Users/>
          </GlobalContext.Provider>
        </div>
    </div>
  );
}

export default App;
