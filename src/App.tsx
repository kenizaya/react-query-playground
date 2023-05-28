import { useQuery } from 'react-query'
import './App.css'

const fetchUser = async (username: string) => {
  return await fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  )
}

function GithubUser({ username }: { username: string }) {
  const userQuery = useQuery([username], () => fetchUser(username))

  const data = userQuery.data

  if (userQuery.isLoading) return <div>Loading...</div>

  if (userQuery.isError) return <div>Error: {userQuery.error?.message}</div>
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

function App() {
  return (
    <div className='App'>
      <GithubUser username='kenizaya' />
    </div>
  )
}

export default App
