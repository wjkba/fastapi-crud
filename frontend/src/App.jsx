import "./App.css";
import CreateForm from "./components/CreateForm";
import Tabela from "./components/Tabela";

function App() {
  return (
    <div className="h-screen bg-gray-200">
      <CreateForm/>
      <Tabela />
    </div>
  );
}

export default App;
