import Toolbar from '@mui/material/Toolbar';
import { Routes, Route, Navigate } from "react-router-dom";
import Box from '@mui/material/Box';
import routes from './routes'
import { isLoggedIn } from '../utils/auth';
import { httpInterceptor } from '../utils/httpInterceptor';


const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      if (route.private) {
        return <Route
          key={route.key}
          exact
          path={route.route}
          element={
            <RequireAuth>
              {route.component}
            </RequireAuth>
          }
        />
      }
      return <Route
        key={route.key}
        exact
        path={route.route}
        element={
          <NoAuth>
            {route.component}
          </NoAuth>
        }
      />
    }

    return null;
  });

function RequireAuth({ children }) {
  let loggedIn = isLoggedIn();

  return loggedIn === true ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

function NoAuth({ children }) {
  let loggedIn = isLoggedIn();

  return loggedIn !== true ? (
    children
  ) : (
    <Navigate to="/home" />
  );
}

export default function ViewPort() {
  httpInterceptor();

  let loggedIn = isLoggedIn();
  let defaultRoute = loggedIn ? '/home' : '/login';
  let myRoutes = [...routes.privateRoutes, ...routes.publicRoutes];// loggedIn ? routes.privateRoutes : routes.publicRoutes;
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Routes>
        {getRoutes(myRoutes)}
        <Route path="*" element={<Navigate to={defaultRoute} />} />
      </Routes>
    </Box>
  );
}