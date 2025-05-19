import { useState } from "react";

interface RegistrationFormProps {
  SendData2: (data: string) => void;
}

function RegistrationForm({ SendData2 }: RegistrationFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submittedData, setSubmittedData] = useState("");

  const handleRegister = () => {
    const data = {
      fullName,
      email,
      username,
      password,
      confirmPassword,
    };
    const jsonData = JSON.stringify(data, null, 2);
    setSubmittedData(jsonData);
    SendData2(jsonData);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setSubmittedData("");
    SendData2("");
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <br />
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>

        <br />

        <div className="form-buttons">
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Register</button>
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

export default RegistrationForm;
