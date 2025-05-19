import { useState } from "react";

interface LoginFormProps {
  SendData: (data: string) => void;
}

function LoginForm({ SendData }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState("");

  const handleLogin = () => {
    const loginData = {
      username,
      password,
    };
    const jsonData = JSON.stringify(loginData, null, 2);
    setSubmittedData(jsonData);
    SendData(jsonData);
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setSubmittedData("");
    SendData("");
    
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <div className="form-buttons">
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Login</button>
        </div>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data</h3>
          <pre>{submittedData}</pre>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
