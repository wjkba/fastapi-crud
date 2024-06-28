import "./App.css";
import CreateForm from "./components/CreateForm";
import Tabela from "./components/Tabela";

function App() {
  return (
    <div className="h-screen  bg-gray-200 text-sm sm:text-base sm:grid sm:place-items-center">
      <div className="w-full px-8  sm:max-w-[450px] bg-white p-2 rounded drop-shadow-md h-screen sm:h-auto">
        <div className="mt-4 mb-8 ">
          <CreateForm />
        </div>
        <div className="mb-4">
          <Tabela />
        </div>
      </div>
    </div>
  );
}

export default App;
