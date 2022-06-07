import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

import Albums from "./containers/Albums/Albums";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="albums" element={<Albums />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
