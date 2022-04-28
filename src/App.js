import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import userRoutes from "./components/user-routes";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 991) {
      setIsSidebarOpen(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paths = userRoutes?.map((x) => x?.to) || [];
  const pathname = window.location.pathname;

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className={`dashboard${isSidebarOpen ? "" : " hide_sidebar"}`}>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          <div className="dashboard_content">
            <Navbar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            <Switch>
              {userRoutes?.map((route, i) => (
                <Route
                  key={i}
                  exact
                  path={route?.to}
                  component={route?.component}
                />
              ))}
              <Route
                path="*"
                render={() => (
                  <Redirect
                    to={paths.includes(pathname) ? pathname : "/reports"}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
