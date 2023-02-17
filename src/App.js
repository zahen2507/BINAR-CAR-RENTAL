import React from "react";
import SetupRouter from "./routers/SetUpRouter";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#C0C0C0" highlightColor="#808080">
      <SetupRouter />;
    </SkeletonTheme>
  )
}

export default App;
