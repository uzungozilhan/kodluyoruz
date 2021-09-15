import {useState, useEffect} from 'react'
import List from './List/list'
import Form from './Form/form'

function Contacts() {

    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div>
            
            <List />
            <Form addContact={setContacts} contacts={ contacts }/>
        </div>
    )
}

export default Contacts
