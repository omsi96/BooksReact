import "./App.css";
import HomePage from "./pages/HomePage";
import MainRoute from "./pages/MainRoute";

function App() {
  const book = {
    title: "Animal Farm ",
    author: "George Orwell",
    image:
      "https://i.pinimg.com/originals/b3/d1/76/b3d176e6609ce020b2a586ecace8af48.jpg",
    rating: 4,
  };
  const books = new Array(15).fill(book);
  return (
    <div>
      {/* <HomePage /> */}
      <MainRoute />
    </div>
  );
}

export default App;
