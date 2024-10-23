import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/nav-bar";
const Alumini = () => {
  const [users, setUsers] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const navigateToAlumini = () => {
    navigate(`/alumini/${id}`);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      setUsers(response.data);
    } catch (error) {
      console.log(`Internal server error => ${error.message}`);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className=" ">
      <NavBar />

      <p className="text-3xl">Alumnis</p>

      {!id ? (
        <table className="w-full border-collapse shadow-md">
          <thead className="bg-neutral-500">
            <tr>
              <td className="p-2">Id</td>
              <td className="p-2">Name</td>
              <td className="p-2">Username</td>
              <td className="p-2">Email</td>
              <td className="p-2">Phone</td>
              <td className="p-2">View</td>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} className="border-b-neutral-500">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.phone}</td>
                <td>
                  <button
                    className="bg-gradient-to-r from-orange-500 to-orange-800 text-white p-[2rem] py-[0.5rem]"
                    onClick={() => navigateToAlumini(user.id)}
                  >
                    view
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>User number {id}</p>
      )}
    </div>
  );
};

export default Alumini;
