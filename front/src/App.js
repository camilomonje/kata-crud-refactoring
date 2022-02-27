import React from "react";
import GroupForm from "./components/GroupForm";
import { StoreProvider } from "./components/Store.js";
import GroupsList from "./components/GroupList";

function App() {
  return (
    <StoreProvider>
      <h2>Dashboard</h2>
      <GroupForm />
      <hr />
      <GroupsList />
    </StoreProvider>
  );
}
export default App;
