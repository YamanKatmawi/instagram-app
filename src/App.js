import React from "react";
//import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Data from "./data.json";
import Post from "./components/post/Post";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Post data={Data} />
      <Profile />
    </div>
  );
}

export default App;
