import FoodCatagories from "./Components/CatagoriesFood/FoodCatagories";
import Delivery from "./Components/Delivery/Delivery";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomeCarousel from "./Components/Home_Carousel/HomeCarousel";
import TopMeal from "./Components/TopMenuMeal/TopMeal";
import TopPick from "./Components/TopPick/TopPick";


function App() {
  return (
  <div>
      <Header />
      <HomeCarousel />
      <Delivery />
      <TopPick />
      <TopMeal />
      <FoodCatagories />
      <Footer />
  </div>
  )
  
}

export default App;
