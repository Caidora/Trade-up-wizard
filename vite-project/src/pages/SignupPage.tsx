import NavBar from "../components/NavBar";
import ActionBox from "../components/ActionBox";
import { useState } from "react";

const SignupPage = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function createAccount() {
    const userPayload = {
      username: username,
      password: password,
    };

    const url = "https://localhost:7236/api/Data";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPayload),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);

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
      ></ActionBox>
    </>
  );
};

export default SignupPage;
