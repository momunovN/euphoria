import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Index/registration/regis';
import Login from './Index/registration/form'; // Убедитесь, что путь к компоненту правильный
import Home from './Index/homePage/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        {/* Другие маршруты */}
      </Routes>
    </Router>
  );
}

export default App;