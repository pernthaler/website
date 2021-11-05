import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import _404 from "./pages/_404";

export default class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="*" element={<_404/>}/>
      </Routes>
    );
  }
}