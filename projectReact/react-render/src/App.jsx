import UserGreeting from "./UserGreeting.jsx"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="User" />
    </>
  )
}

export default App