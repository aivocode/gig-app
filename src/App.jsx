import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";

const App = () => {
  return (
    <div class="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4">
      <div class="tile bg-teal-500 col-span-full">
        <Navbar />
        <h1 class="tile-marker">ONE</h1>
      </div>
      <div class="tile row-start-2 row-end-5 lg:col-span-4">
        {/* bg-amber-500 */}
        <Carousel />
        {/* <h1 class="tile-marker">TWO</h1> */}
      </div>
      <div class="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-4">
        <h1 class="tile-marker">THREE</h1>
      </div>
      <div class="tile bg-lime-600">
        <h1 class="tile-marker">FOUR</h1>
      </div>
      <div class="tile bg-green-600">
        <h1 class="tile-marker">FIVE</h1>
      </div>
      <div class="tile bg-emerald-500">
        <h1 class="tile-marker">SIX</h1>
      </div>
      <div class="tile bg-teal-500">
        <h1 class="tile-marker">SEVEN</h1>
      </div>
      <div class="tile bg-purple-500">
        <h1 class="tile-marker">EIGHT</h1>
      </div>
      <div class="tile bg-pink-500 row-start-5 col-span-full">
        <h1 class="tile-marker">NINE</h1>
      </div>
    </div>
  );
};

export default App;
