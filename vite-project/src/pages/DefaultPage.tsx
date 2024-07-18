import NavBar from "../components/NavBar";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
const DefaultPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <PrimaryButton bColour="secondary.main" link="/login">
        Login
      </PrimaryButton>
      <SecondaryButton bColour="secondary.main" link="/signup">
        Signup
      </SecondaryButton>
    </div>
  );
};

export default DefaultPage;
