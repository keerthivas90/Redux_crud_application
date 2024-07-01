import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import CreateApp from './Create';
import Edit from './Edit';
 
 
function App() {
  return (
    <div className="App">
      
        <h1> Redux Crud APP  </h1> 
         <BrowserRouter>
            <Routes>
              <Route path='/Redux_crud_application' element={<Home />} /> 
              <Route path='/Redux_crud_application/Create' element={<CreateApp />} /> 
              <Route path='/Redux_crud_application/Edit/:id' element={<Edit />} /> 
            </Routes>         
         </BrowserRouter>
      
    </div>
  );
}

export default App;
