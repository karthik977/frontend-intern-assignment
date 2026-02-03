import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
    navigate("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <button>Login</button>
    </form>
  )
}

export default Login
