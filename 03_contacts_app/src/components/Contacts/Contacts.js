import {useState, useEffect} from 'react'
import List from './List/list'
import Form from './Form/form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "İlhan",
            phone_number:"123123"
        },
        {
            fullname: "Osman Emre",
            phone_number:"321456"
        },
        {
            fullname: "Arda",
            phone_number:"985236"
        }
    ]);
    
    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div>
            
            <List contacts={ contacts }/>
            <Form addContact={setContacts} contacts={ contacts }/>
        </div>
    )
}

export default Contacts
