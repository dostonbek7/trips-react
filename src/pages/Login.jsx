import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='middle'>
      <div className="forms">
      <h2>Login</h2>
      <form>
        <label>
          <span>Email:</span>
          <input type="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>
        <button>Login</button>
      </form>
      <p>
        If you don't have account, please <a href="signup">Signup</a>
      </p>
    </div>
    </div>
  )
}

export default Login
