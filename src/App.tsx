import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationFrom';
function App() {
  const [childdata, setChilddata] = useState("");
  // const [childdata2, setChilddata2] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await response.json();
  //     console.log(data);
  //   }
  //   fetchData();
  // }, [])

  return (
    <div className="app-container">
      <p>Login form data : <br />{childdata}</p>
      {/* <p>registration form data : <br />{childdata2}</p> */}
      <LoginForm SendData={setChilddata} />
      {/* <RegistrationForm SendData2={setChilddata2} /> */}

      <div>

      </div>
    </div>
  );
}

export default App;
