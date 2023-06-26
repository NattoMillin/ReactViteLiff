import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Suspense } from "react";
import { Loading } from "./components/Loading";
function App() {

  console.log("looter start")
  
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
