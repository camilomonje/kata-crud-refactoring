import React from "react";
import GroupForm from "./components/GroupForm";
import { StoreProvider } from "./components/Store.js";
import GroupsList from "./components/GroupList";

function App() {
  return (
    <StoreProvider>
      <div className="p-3 mb-2 bg-light text-dark">
        <h2 className="row justify-content-md-center">Dashboard</h2>
        <hr />
        <GroupForm />
        <hr />
        <GroupsList />
      </div>
    </StoreProvider>
  );
}
export default App;
