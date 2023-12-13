
import './App.css';
import { Routes, Route } from "react-router-dom";
import User from './components/User/User';
import Contacts from './components/Contact/Contacts';
import UpdateContact from './components/Contact/UpdateContact';
import Navbar from './components/Page/Navbar';
import InsertContact from './components/Contact/InsertContact';
function App() {
  return (
    <>
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<Contacts/>} />
        <Route path='/update/:id' element={<UpdateContact/>}/>
        <Route path='/create' element={<InsertContact/>}/>
      </Routes>
      </>
   
  );
}

export default App;
