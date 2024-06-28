import { useState } from "react";
import axios from "axios";

export default function CreateForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleAddAuthor = () => {
    handlePostRequest();
  };
  const handlePostRequest = async () => {
    const data = { name: name, surname: surname };
    try {
      const response = await axios.post("http://localhost:8000/authors", data);
      if (response.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-xl mb-4 sm:text-2xl">Add Author</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-2 bg-white"
      >
        <div className="flex flex-col">
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => handleNameChange(e)}
            type="text"
            className="p-1 bg-gray-100 border-black border-1 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label>Surname: </label>
          <input
            value={surname}
            onChange={(e) => handleSurnameChange(e)}
            type="text"
            className="p-1 bg-gray-100 border-black border-1 outline-none"
          />
        </div>
        <div>
          <button
            onClick={handleAddAuthor}
            type="button"
            className="w-full font-semibold px-5 py-0.5 bg-[#49cc90] hover:bg-[#42b883] text-white drop-shadow rounded"
          >
            POST
          </button>
        </div>
      </form>
    </div>
  );
}
