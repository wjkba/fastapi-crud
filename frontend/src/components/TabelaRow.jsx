import { useState } from "react";
import axios from "axios";

export default function TabelaRow({ id, name, surname }) {
  const [editName, setEditName] = useState(name);
  const [editSurname, setEditSurname] = useState(surname);
  const [isEditing, setIsEditing] = useState(false);
  const [displayConfirm, setDisplayConfirm] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCloseEdit = () => {
    setIsEditing(false);
    handlePutRequest();
  };
  const handleDelete = () => {
    if (!displayConfirm) {
      setDisplayConfirm(true);
    } else {
      handleDeleteRequest();
    }
  };

  const handlePutRequest = async () => {
    const data = { name: editName, surname: editSurname };
    try {
      const response = await axios.put(
        `http://localhost:8000/authors/${id}`,
        data
      );
      console.log(response);
      if (response.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteRequest = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/authors/${id}`
      );
      console.log(response);
      if (response.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    setEditName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setEditSurname(e.target.value);
  };

  return (
    <>
      {!isEditing ? (
        <div>{editName}</div>
      ) : (
        <input
          className="bg-yellow-100 outline-none"
          value={editName}
          onChange={(e) => handleNameChange(e)}
        />
      )}
      {!isEditing ? (
        <div>{editSurname}</div>
      ) : (
        <input
          className="bg-yellow-100 outline-none"
          value={editSurname}
          onChange={(e) => handleSurnameChange(e)}
        />
      )}
      <div className="flex">
        {!isEditing ? (
          <button onClick={handleEdit} className="bg-yellow-200 p-1 w-full">
            Edit
          </button>
        ) : (
          <button onClick={handleCloseEdit} className="bg-green-200 p-1 w-full">
            OK
          </button>
        )}
        <button
          onClick={handleDelete}
          className={`${displayConfirm && "bg-red-400"} bg-red-200 p-1 w-full`}
        >
          {!displayConfirm ? "Delete" : "Confirm"}
        </button>
      </div>
    </>
  );
}
