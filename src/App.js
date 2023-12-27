import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Offers from "./Components/Offers";

function App() {
  return (
    <div>
      <Header />
      <Banner
        h1="Nasza firma oferuje najwyższej jakości produkty."
        h2="Nie wierz nam na słowo - sprawdź"
      />
      <About title="Nasi specjaliści" items="2" />
      <Offers title="Czym zajmuje się nasza firma?" />
      <Footer footerText="Nazwa firmy - wszelkie prawa zastrzeżone, 2023" />
    </div>
  );
}

export default App;
