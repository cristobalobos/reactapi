import React from "react";
import "./App.css";
import News from "./News/News";

function App() {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      }
    };
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My feeds</h1>
      </header>
      <News />
    </div>
  );
}

export default App;
