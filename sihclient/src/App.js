import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './pages/landing';
function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path = '/' element={<Landing/>}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
