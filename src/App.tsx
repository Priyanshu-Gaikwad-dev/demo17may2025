import {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationFrom";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [childdata, setChilddata] = useState("");
  const [childdata2, setChilddata2] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1>Login form data : </h1>
      <h2>{childdata}</h2>
      <h1>Registration form data : </h1>
      <h2>{childdata2}</h2>
      <LoginForm SendData={setChilddata} />
      <br />
      <RegistrationForm SendData2={setChilddata2} />
      <div>
        <h1>Users List</h1>
        {users.map((user: User) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
