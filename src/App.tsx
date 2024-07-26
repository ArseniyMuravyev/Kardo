import { Button } from "./ui-kit/button/Button";
import { NavBar } from "./ui-kit/navBar/NavBar";
import { TabBar } from "./ui-kit/tabBar/TabBar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Button color="primary" variant="filled" size="large">
          Задать вопрос
        </Button>
      </div>
      <TabBar />
    </>
  );
}

export default App;
