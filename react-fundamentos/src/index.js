import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import GlobalStyle from './styles/global';

/* NOTE: The render function showed in the course was not working so another
 * aproach was needed. The solution was found in
 * https://react.dev/reference/react-dom/client/createRoot.
 */
const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
