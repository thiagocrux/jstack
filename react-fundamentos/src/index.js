import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

/*  NOTE: This section of the course is not working for the versions installed,
 *  the refered documentation was https://react.dev/reference/react-dom/client/createRoot.
 */
const root = createRoot(document.getElementById("root"));
root.render(<App />);