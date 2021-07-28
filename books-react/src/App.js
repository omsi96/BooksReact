import "./App.css";
import HomePage from "./pages/HomePage";
import MainRoute from "./pages/MainRoute";
import Cookies from "js-cookie";

function App() {
  Cookies.set("FLAG", "cookie{124}");
  console.log({ cookies: document.cookie });
  return (
    <div>
      {/* <HomePage /> */}
      <MainRoute />
    </div>
  );
}

export default App;
