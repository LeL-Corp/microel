import React from 'react';

import {
  IndexView,
  Roadmap as RoadmapView,
  Settori as SettoriView,
  About as AboutView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  CookiesPolicy as CookiesPolicyView,
  PrivacyPolicy as PrivacyPolicyView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/about',
    renderer: (params = {}) => <AboutView {...params} />,
  },
  {
    path: '/areas',
    renderer: (params = {}) => <SettoriView {...params} />,
  },

  {
    path: '/roadmap',
    renderer: (params = {}) => <RoadmapView {...params} />,
  },

  {
    path: '/contacts',
    renderer: (params = {}) => <ContactPageSidebarMapView {...params} />,
  },
  {
    path: '/privacy-policy',
    renderer: (params = {}) => <PrivacyPolicyView {...params} />,
  },
  {
    path: '/cookies-policy',
    renderer: (params = {}) => <CookiesPolicyView {...params} />,
  },

  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
