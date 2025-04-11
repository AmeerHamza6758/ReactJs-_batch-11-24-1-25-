import { Route, Routes } from 'react-router';
import './App.css';
import CompA from './components/CompA';
import ConditionalRendering from './components/conditionalRendering/conditionalRendering';
import HookComp1 from './components/hooks/HookComp1';
import HookComp2 from './components/hooks/HookComp2';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sales from './components/Sales';
import KhadiProducts from "./components/KhadiProducts";
import StudentForm from './components/StudentForm';
import Products from './components/Products';
import UserForm from './user/userForm';
import UserList from './user/userTable';
function App() {
  let myName = 'Ameer Hamza'

  return (
    <div className="App">
      <Navbar />
      <CompA/>
      {/* <Products /> */}
      {/* <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/products" element={<Products />} />
      </Routes> */}
      {/* <StudentForm /> */}
    </div>
  );
}

export default App;
