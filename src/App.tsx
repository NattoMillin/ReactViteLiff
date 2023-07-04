import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./ReactFormHookTemp/Home";
import Home from "./Compornents/Home";
import { Suspense } from "react";
import { Loading } from "./Compornents/Loading";

function App() {
  console.log("looter start");

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/ReactViteLiff/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
/*
 */
