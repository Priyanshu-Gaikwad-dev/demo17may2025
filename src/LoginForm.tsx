import {useState} from "react";

function LoginForm({SendData}: {SendData: (data: string) => void}) {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const handleLogin = () => {
    const loginInfo = {
      username: usernameLogin,
      password: password,
    };
    const jsonData = JSON.stringify(loginInfo);
    setData(jsonData);
    SendData(jsonData);
  };

  const handleReset = () => {
    setUsernameLogin("");
    setPassword("");
    setData("");
    SendData("");
  };

  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <div>
        <p>usernameLogin:&nbsp;&nbsp;{usernameLogin}</p>
        <p>
          password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {password}
        </p>
      </div>
      <label>Username:</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter your username"
        value={usernameLogin}
        onChange={(e) => setUsernameLogin(e.target.value)}
      />
      <br />
      <br />
      <label>Password:</label>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      &nbsp;
      <button onClick={handleLogin}>Login</button>
      {data && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{data}</pre>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
