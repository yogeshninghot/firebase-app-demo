
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
       <nav className='navbar'>
          <Link to="/" className="btn-outline">Home</Link>
             <div>
              <Link to="/add-student" className="btn-outline">Add Students</Link>
            </div>
        </nav> 
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add-student" element={<AddStudent/>}/>
      <Route path="*" element={<NotFound/>}/>

     </Routes>
     </div>
  );
}

export default App;
