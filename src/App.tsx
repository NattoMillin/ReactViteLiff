// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import { Suspense } from "react";
// import { Loading } from "./components/Loading";
function App() {
  return <Home />;
}
export default App;
/*
<BrowserRouter>
<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Suspense>
</BrowserRouter>
*/
