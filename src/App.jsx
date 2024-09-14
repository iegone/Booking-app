import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default App;
