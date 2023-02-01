import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoadingSpinner } from "./components/global-components";

const NumberGridView = React.lazy(
  () => import("./components/views/NumberGrid/NumberGridView")
);

function App() {
  return (
    <Suspense fallback={<PageLoadingSpinner />}>
      <Routes>
        <Route path="/" element={<NumberGridView />} />
      </Routes>
    </Suspense>
  );
}

export default App;
