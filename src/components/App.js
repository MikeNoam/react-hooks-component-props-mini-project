import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

function App() {
  return (
    <div>
      <Header name = {blogData.name}/>
      <About image = {blogData.image} about = {blogData.about}/>
      <ArticleList />
    </div>
    
  );
}

export default App;
