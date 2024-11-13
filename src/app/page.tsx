import React from "react";
import type { NextPage } from "next";
import Todolist from "./components/Todolist"; // Adjust the path if needed

const Home: NextPage = () => {
  return (
    <div>
      <Todolist />
    </div>
  );
};

export default Home;
