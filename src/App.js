import { Routes, Route } from 'react-router-dom';
import Registration from './Index/registration/regis';
import Main from './Index/registration/main';
import FormSignUp from './Index/registration/signUp';
import Home from './Index/homePage/home';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Main />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/home" element={<Home />} />
      {/* Другие маршруты */}
    </Routes>
  );
}

export default App;