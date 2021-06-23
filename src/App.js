import React, {useState} from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
    const [users, setUsers] = useState([])
    const newUserDataHandler = (data) => {
       setUsers(prevUsers => [...prevUsers, data])
    }
    return (
        <div>
            <AddUser newUserData={newUserDataHandler}/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
