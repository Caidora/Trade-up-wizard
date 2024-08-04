import NavBar from "../components/NavBar";
import ActionBox from "../components/ActionBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [borderWidth, setBorderWidth] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let navigate = useNavigate();

  async function AttemptLogin() {
    const userPayload = {
      username: username,
      password: password,
    };

    const url = "https://localhost:7236/api/Data/Login";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPayload),
    });
    if (!response.ok) {
      setBorderWidth(true);
      setErrorMessage("Incorrect Username or Password");
      throw new Error(`Response status: ${response.status}`);
    }
    const Serverusername = await response.text();
    console.log(Serverusername);
    localStorage.setItem("User", Serverusername);
    navigate("/", { replace: true });
    return <></>;
  }

  return (
    <>
      <NavBar></NavBar>
      <ActionBox
        title="Login"
        priButton="Login"
        secButton="Login"
        submitFunction={AttemptLogin}
        setUser={setUser}
        setPassword={setPassword}
        borderWidth={borderWidth}
        errorMessage={errorMessage}
      ></ActionBox>
    </>
  );
};

export default LoginPage;
