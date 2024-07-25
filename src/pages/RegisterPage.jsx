import { Link } from "react-router-dom";
import RegisterForm from "../components/login/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="login-section">
      <h2>회원가입</h2>
      <RegisterForm />
      <Link to="/login">로그인하기</Link>
    </section>
  );
};

export default RegisterPage;
