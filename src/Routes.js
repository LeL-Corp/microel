import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import viewsRoutes from 'views/routes';

const Routes = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to the top when the pathname changes

    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))}
      <Route path="*" element={<Navigate replace to="/not-found" />} />
    </ReactRoutes>
  );
};

export default Routes;
