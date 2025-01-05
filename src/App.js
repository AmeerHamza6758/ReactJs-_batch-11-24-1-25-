import "./App.css";
// import StudentForm from "./components/Categories";
import Categories from "./components/Categories";
import CheckEventTest from "./components/CheckEventTest";
import PracticeEvents from "./components/events/PracticeEvents";
import StudentForm from "./components/formValidation/StudentForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TestCompo from "./components/TestCompo";
let myName = "Nida Waseem";
function App() {
  return (
    <div className="">
      {/* <Navbar myName={myName}/> */}
      {/* <Home myName={myName}/> */}
      {/* <StudentForm /> */}
      {/* <CheckEventTest />
      <PracticeEvents /> */}
      <StudentForm />

      <TestCompo />
    </div>
  );
}

export default App;
