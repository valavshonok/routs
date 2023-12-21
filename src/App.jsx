import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRout from './utils/routs/ProtectedRout';
import Protected from './pages/Protected';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRout />}>
          <Route path='protected' element={<Protected />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
