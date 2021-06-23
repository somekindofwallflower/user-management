import React, {useState} from 'react'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Inputs are not valid',
                message: 'Enter some valid input for username and age (they can not be empty)'
            })
            return;
        }

        if (+enteredAge <= 0) {
            setError({
                title: 'Age is not valid',
                message: 'Age should contain a value that is greater than 0'
            })
            return;
        }

        props.newUserData(
            {
                name: enteredUsername,
                age: enteredAge,
                id: Math.random().toString()
            }
        )

        setEnteredUsername('')
        setEnteredAge('')
    }

    const enteredUsernameHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const enteredAgeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const onErrorModalConfirm = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} handleConfirm={onErrorModalConfirm}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={enteredUsernameHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={enteredAgeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
