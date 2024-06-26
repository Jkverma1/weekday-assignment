import React from "react";
import { Routes, Route } from "react-router-dom";
import routesConfig from "./routesConfig";

const SystemRoutes = () => {
  return (
    <Routes>
      {routesConfig.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default SystemRoutes;
