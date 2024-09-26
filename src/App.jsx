import './App.css';
import Context from './components/Context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataReceiver from "./components/DataReceiver";
import DataSender from "./components/DataSender";
import NavigatePage from "./components/NavigatePage";

function App() {
  return (
    <Context>
       <Router>
            <Routes>
                <Route path="/" element={<div><DataSender /> <DataReceiver /></div>} />
                <Route path="/navigatePage" element={   <NavigatePage/>} />
            </Routes>
      </Router>

    </Context>

  );
}

export default App;
