import { Link } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <section className="login-section">
      <h2>로그인</h2>
      <LoginForm />
      <Link to="/login/register">회원가입하기</Link>
    </section>
  );
};

export default LoginPage;