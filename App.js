
import './App.css';
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import PostsList from './Components/PostsList';
import ShowPost from './Components/ShowPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostsList />} />
          <Route path='/:id' element={<ShowPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
