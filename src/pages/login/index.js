import LoginComponent from "../../components/login/LoginComponent";
import { useDispatch } from "react-redux";

const loginPage = () => {
  const dispatch = useDispatch();

  return (
    <section id="login_page">
      <LoginComponent />
    </section>
  );
};

export default loginPage;
