import "antd/dist/antd.min.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const ListPage = lazy(() => import("./pages/list"));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={"list"} element={<ListPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
