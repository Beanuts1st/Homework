import LogIn from "../../components/isLogIn";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="login-Page">
      <span className="blob">
        <svg
          height="700"
          width="800"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FF0066"
            d="M36,-50.9C42.3,-45,39.9,-28.6,42.8,-15C45.8,-1.4,54.1,9.4,56.5,23.5C59,37.6,55.7,54.9,45.4,59.7C35,64.5,17.5,56.9,-1.1,58.3C-19.6,59.8,-39.2,70.3,-54,66.9C-68.8,63.6,-78.8,46.2,-76.6,30.3C-74.4,14.3,-59.9,-0.2,-53.8,-17C-47.7,-33.9,-50.1,-53,-42.5,-58.4C-34.9,-63.9,-17.5,-55.6,-1.3,-53.9C14.9,-52.1,29.8,-56.8,36,-50.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
      <div className="login-wrapper">
        <h1>Halaman Pertama</h1>
        <h2> Silahkan Login Terlebih dahulu</h2>
        <LogIn />
      </div>
    </div>
  );
};
export default LoginPage;
