// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Todo from './pages/Todo.jsx'
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (

    <Router>
      <div className='w-full  h-full' >
        <Navbar />
      </div >
      <div className="App">
        <div className="">
          {/* <h1>Todo App</h1> */}
          <Routes>
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </div>

    </ Router >
  );
};

export default App;
