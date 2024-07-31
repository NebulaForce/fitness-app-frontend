import { Route, Routes } from 'react-router-dom'
import { ASSIGN_COACH, HOME, LOG_MEASUREMENT, MAIN, MEASUREMENT, PROGRESS, REGISTER_COACH, REGISTER_USER, SET_GOALS } from '../constants/routes'
import { AssignCoach, Home, LogMeasurement, Main, Measurement, Progress, RegisterCoach, RegisterUser, SetGoals } from '../components/pages'
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
      <Route
        path={ASSIGN_COACH}
        element={
          <PrivateRoute>
            <AssignCoach />
          </PrivateRoute>
        }
      />
      <Route
        path={LOG_MEASUREMENT}
        element={
          <PrivateRoute>
            <LogMeasurement />
          </PrivateRoute>
        }
      />
      <Route
        path={REGISTER_COACH}
        element={
          <PrivateRoute>
            <RegisterCoach />
          </PrivateRoute>
        }
      />
      <Route
        path={SET_GOALS}
        element={
          <PrivateRoute>
            <SetGoals />
          </PrivateRoute>
        }
      />
      <Route
        path={PROGRESS}
        element={
          <PrivateRoute>
            <Progress />
          </PrivateRoute>
        }
      />
      <Route
        path={MEASUREMENT}
        element={
          <PrivateRoute>
            <Measurement />
          </PrivateRoute>
        }
      />
    </Routes >
  );
};

export default CustomRoutes;