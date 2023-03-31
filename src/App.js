import './App.css';
import Movie from './movie';
import axios from "axios";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { adddata } from './redux/createslice';

function App() {
  
  return (
    <div className="App">
      <Movie />
    </div>
  );
}

export default App;
