import axios from "axios";
import TabelaRow from "./TabelaRow";
import { useEffect, useState } from "react";

export default function Tabela() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/authors");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-white ">
      <h1 className="text-xl mb-4 sm:text-2xl">Authors</h1>
      <div className="grid grid-cols-3">
        {/* <div className="bg-blue-200">Imie</div>
        <div className="bg-blue-200">Naziwsko</div>
        <div className="bg-blue-200">Akcje</div> */}
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-3 min-h-[2rem] ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
        >
          <TabelaRow id={item.id} name={item.name} surname={item.surname} />
        </div>
      ))}
    </div>
  );
}

