import { Route, Routes } from 'react-router-dom'
import { HOME, MAIN } from '../constants/routes'
import { Main } from '../components/pages'
import PrivateRoute from './PrivateRoute'

const CustomRoutes = () => (
  <Routes>
    <Route path={MAIN} element={<Main/>} />
    <Route
      path={HOME}
      element={
        <PrivateRoute>
          test
        </PrivateRoute>
      }
    />
  </Routes>
);

export default CustomRoutes;