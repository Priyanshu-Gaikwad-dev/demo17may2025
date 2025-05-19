import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm"; 
import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [loginData, setLoginData] = useState<string>("");
  const [registerData, setRegisterData] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [time, setTime] = useState<string>("");
  const [showRegistration, setShowRegistration] = useState<boolean>(false); // ← Added missing state

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <div className="app-container">
      {/* Clock */}
      <h2 className="clock">{time}</h2>

      {/* Form‑Toggle Card */}
      <div className="card">
        <h1>{showRegistration ? "Registration" : "Login"} Data</h1>
        <h2>
          {showRegistration
            ? registerData || "No registration data yet."
            : loginData || "No login data yet."}
        </h2>
      
      </div>

      {/* Form Component */}
      <div className="card">
        {showRegistration ? (
          <RegistrationForm SendData2={setRegisterData} />
        ) : (
          <LoginForm SendData={setLoginData} />
        )}
          <p>
          {showRegistration
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <button
            className="toggle-btn"
            onClick={() => setShowRegistration(!showRegistration)}
          >
            {showRegistration ? "Go to Login" : "Go to Register"}
          </button>
        </p>
      </div>

      {/* Users List */}
      <div className="card">
        <h1>Users List</h1>
        {users.length > 0 ? (
          users.map((u) => (
            <div key={u.id} className="user-card">
              <h2>{u.name}</h2>
              <p>{u.email}</p>
              <p>{u.phone}</p>
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
}

export default App;
