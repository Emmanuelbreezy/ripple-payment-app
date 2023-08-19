import { Route, Routes } from "react-router-dom";
import Home from "./page/Dashbaord/Home";
import Landingpage from "./page/Landingpage";
import { Suspense } from "react";

function App() {
  
  return (
    <Suspense fallback={<></>}>
        <Routes>
          <Route
              path="/dashboard"
              element={<Home />}
            />
          <Route
              path="/"
              element={<Landingpage />}
            />
        </Routes>
    </Suspense>
  );
}

export default App;
