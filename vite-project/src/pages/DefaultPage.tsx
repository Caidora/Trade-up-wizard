import NavBar from "../components/NavBar";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import NavItem from "../components/NavItem";

const MyBox = styled(Box)({
  display: "block",
});

const BodyBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const ImageBox = styled(Box)({
  display: "block",
  marginBottom: "1.5rem",
});

const ColumnBox = styled(Box)({
  display: "block",
  marginBottom: "1.5rem",
  padding: "1rem",
});

const DefaultPage = () => {
  const welcomeMessage =
    "This app is your ultimate companion for creating and managing trade-ups in the popular games CS2 and CSGO. With Trade Up Wizard, you can easily create an account, log in, and start crafting your own trade-ups. Whether you're a seasoned player looking to optimize your inventory or a newcomer wanting to understand the trade-up process, our app provides all the tools you need. Track your progress, explore various trade-up options, and enhance your gaming experience with Trade Up Wizard. Happy trading!";

  const userName = localStorage.getItem("User");

  if (userName == null) {
    return (
      <MyBox>
        <NavBar></NavBar>
        <Typography marginTop="30px" marginBottom="20px" variant="h1">
          Welcome to trade up wizard!
        </Typography>

        <Typography marginTop="30px" marginBottom="20px">
          {welcomeMessage}
        </Typography>

        <ImageBox>
          <img
            width="500rem"
            height="auto"
            src="https://cdn.sanity.io/images/dmtcrhxp/production/3a23a846884f1cf4fa8c5ab5b3ca913f23603c7d-1920x1080.jpg"
          ></img>{" "}
          <img
            width="500rem"
            height="auto"
            src="https://cs.money/ru/blog/wp-content/uploads/2023/02/1.jpg"
          ></img>
        </ImageBox>
        <PrimaryButton bColour="secondary.main" link="/login">
          Login
        </PrimaryButton>
        <SecondaryButton bColour="secondary.main" link="/signup">
          Signup
        </SecondaryButton>
      </MyBox>
    );
  } else {
    return (
      <MyBox>
        <NavBar></NavBar>
        <Typography marginTop="30px" marginBottom="20px" variant="h1">
          Welcome {userName}!
        </Typography>
        <BodyBox>
          <ColumnBox>
            <Typography marginTop="30px" marginBottom="20px" variant="h5">
              Explore other users Contracts!
            </Typography>
            <Typography marginTop="30px" marginBottom="20px">
              {welcomeMessage}
            </Typography>
            <img
              width="500rem"
              height="auto"
              src="https://cdn.sanity.io/images/dmtcrhxp/production/3a23a846884f1cf4fa8c5ab5b3ca913f23603c7d-1920x1080.jpg"
            ></img>
            <br></br>
            <NavItem link="/explore">Explore</NavItem>
          </ColumnBox>
          <ColumnBox>
            <Typography marginTop="30px" marginBottom="20px" variant="h5">
              Create your own Contracts!
            </Typography>
            <Typography marginTop="30px" marginBottom="20px">
              {welcomeMessage}
            </Typography>
            <img
              width="500rem"
              height="auto"
              src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg"
            ></img>
            <br></br>
            <NavItem link="/create">Create</NavItem>
          </ColumnBox>
        </BodyBox>
      </MyBox>
    );
  }
};

export default DefaultPage;
