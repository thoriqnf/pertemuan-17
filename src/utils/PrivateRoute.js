import {
  Route,
  Redirect,
} from "react-router-dom";

function PrivateRoute({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;