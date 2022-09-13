import "antd/dist/antd.css";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ListPage = lazy(() => import("./pages/list"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"list"} element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
