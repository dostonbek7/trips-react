import { useRef } from "react";
import useLogin from "../hooks/useLogin";

function Login() {
  const { login, user, error } = useLogin();
  const password = useRef();
  const email = useRef();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);

    form.current.reset();
  };
  return (
    <div className="middle">
      <div className="forms">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} ref={form}>
          <label>
            <span>Email:</span>
            <input ref={email} type="email" />
          </label>
          <label>
            <span>Password:</span>
            <input ref={password} type="password" />
          </label>
          <button>Login</button>
        </form>
        <p>
          If you don't have account, please <a href="signup">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
