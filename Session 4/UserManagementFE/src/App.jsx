import './App.css'
import AddUserForm from './components/AddUserForm'
import UserList from './components/UserList'

function App() {
  return (
    <div className='App'>
      <h1>User Portal</h1>
      <AddUserForm/>
      <UserList/>
    </div>
  )
}

export default App
