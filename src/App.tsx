import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Suspense, useEffect } from "react";
import { Loading } from "./components/Loading";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
