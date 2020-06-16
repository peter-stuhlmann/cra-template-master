import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContextProvider from './components/Context';
import Router from './components/Router';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback={'Loading...'}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  );
}
