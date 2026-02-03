import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold">Task Manager</h1>

      {user && (
        <div className="space-x-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={logout} className="text-red-400">
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
