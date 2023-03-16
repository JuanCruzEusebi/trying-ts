import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "http://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu es moderador a veces",
  },
  {
    nick: "Sergio",
    subMonths: 7,
    avatar: "http://i.pravatar.cc/150?u=sergio",
  },
];

interface Sub {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Sub Counter</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
