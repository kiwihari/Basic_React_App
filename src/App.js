import React, { useState } from 'react';
import User_Table from './table/usertable'
import AddUserForm from './forms/addUserForms';
import EditUserForm from './forms/editUserForm';

const App = () => {

  const usersData = [
		{ id: 1, name: 'Ishara', email: 'ishara.kumbalathara@gmail.com' },
	]

  const [ users, setUsers ] = useState(usersData)
  const [ editing, setEditing] = useState(false)

  const initialFormState = { id: '', name: '', email: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
  }
  
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true);
  
    setCurrentUser({ id: user.id, name: user.name, email: user.email })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="card container">
      <h1> User Dashboard </h1>
      <div className="flex-row">
        {editing ? (
          <div className="flex-large">
            <h2>Edit user</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
        <div className="flex-large">
          <h2> Add User </h2>
          <AddUserForm addUser={addUser}/>
        </div>
        )}
        <div className="flex-large">
          <h2> View User </h2>
          <User_Table users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>  
    </div>
  );
}

export default App
