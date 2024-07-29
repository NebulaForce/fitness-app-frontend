import { Route, Routes } from 'react-router-dom'
import { HOME, MAIN, REGISTER_USER } from '../constants/routes'
import { Home, Main, RegisterUser } from '../components/pages'
import PrivateRoute from './PrivateRoute'

const CustomRoutes = () => {

  return (
    <Routes>
      <Route path={MAIN} element={<Main />} />
      <Route path={REGISTER_USER} element={<RegisterUser />} />
      <Route
        path={HOME}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes >
  );
};

export default CustomRoutes;