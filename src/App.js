import "./App.css";
import CustomNavbar from "./Components/navbar.jsx";
import Login from "./Components/login.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavbar />
      </header>
      <Login />
    </div>
  );
}

export default App;
