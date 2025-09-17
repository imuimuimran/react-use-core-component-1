import { Suspense } from 'react'
import './App.css'
import Users from './Users'
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}
  

function App() {
 
  const friendsPromise = fetchFriends();
  return (
    <>
      
      <h2>Welcome to react users & fetch concept</h2>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback= {<h3>Showing Friends Soon...</h3>}>
        <Friends friendsPromise= {friendsPromise}></Friends>
      </Suspense>
      
    </>
  )
}

export default App
