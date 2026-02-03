import { useAuth } from "../context/AuthContext"

const Profile = () => {
  const { user, logout } = useAuth()

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  )
}

export default Profile
