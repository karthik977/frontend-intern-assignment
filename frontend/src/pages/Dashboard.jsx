import { useEffect, useState } from "react"
import api from "../services/api"

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks")
        setTasks(res.data)
      } catch (err) {
        setError("Failed to load tasks")
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  if (loading) return <p className="p-6">Loading tasks...</p>
  if (error) return <p className="p-6 text-red-500">{error}</p>

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Tasks</h2>

      {tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map(task => (
        <div key={task._id} className="border p-2 mb-2 rounded">
          {task.title}
        </div>
      ))}
    </div>
  )
}

export default Dashboard
