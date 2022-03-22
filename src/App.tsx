import React, { useState } from "react";
import { Tool, ToolSelect } from "./ToolSelect";
import { UserCard } from "./UserCard";
import { useUsers, User } from "./use-users";

function App() {
  const users: User[] = useUsers();
  const [tool, setTool] = useState<Tool>("Keyboard");

  return (
    <>
      <div>
        <ToolSelect selectedTool={tool} onToolSelected={(t) => setTool(t)}></ToolSelect>
      </div>

      <div>{/* Put the user cards here! */}</div>
    </>
  );
}

export default App;
