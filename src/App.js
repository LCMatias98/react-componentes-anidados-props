import logo from "./logo.svg";
import "./App.css";
import Header from "./components/common/Header/Header";
import Main from "./components/common/Main/Main";
import Presentation from "./components/common/Presentation/Presentation";

function App() {
  return (
    <>
      <Header title="Header 🔥🙌😎🔥" name="Lucas" edad="25" />
      <Main />
      <Presentation
        title="Pruebita"
        apellido={"Correa"}
        profesion={"Analista de Sistemas"}
        hobbies={["Programar","Series","Anime","Putear a Boca"]}
      />
    </>
  );
}

export default App;
