import NavBar from "../components/NavBar";
import ActionBox from "../components/ActionBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [borderWidth, setBorderWidth] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let navigate = useNavigate();

  async function createAccount() {
    const userPayload = {
      username: username,
      password: password,
    };

    const url =
      "https://contractwizardapi-asa8emcbh7aqayer.eastus-01.azurewebsites.net/api/Data";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPayload),
    });
    if (!response.ok) {
      setBorderWidth(true);
      setErrorMessage("This username is already in use");
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    navigate("/", { replace: true });
    return <></>;
  }

  return (
    <>
      <NavBar></NavBar>
      <ActionBox
        title="Signup"
        priButton="Signup"
        secButton="Login"
        submitFunction={createAccount}
        setUser={setUser}
        setPassword={setPassword}
        borderWidth={borderWidth}
        errorMessage={errorMessage}
      ></ActionBox>
    </>
  );
};

export default SignupPage;
