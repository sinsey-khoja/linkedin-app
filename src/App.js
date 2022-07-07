import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";

function App() {
  const handleSetVisible = () => {
    console.log("click");
  };
  return (
    <div className="App">
      <Header visible={true} setVisible={handleSetVisible} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
