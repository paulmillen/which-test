import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoadingSpinner } from "./components/global-components";

const Events = React.lazy(() => import("./components/views/Example/Example"));

function App() {
  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </Suspense>
  );
}

export default App;
