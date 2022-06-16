import './App.scss';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from "./components/Navbar/Navbar"
import Activity from "./components/Activity/Activity"

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
    <Sidebar />
    <Main />
    <Activity />
    </div>
    </>
  );
}

export default App;
