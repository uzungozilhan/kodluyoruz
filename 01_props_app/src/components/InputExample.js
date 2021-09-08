import {useState} from 'react'

export default function InputExample() {
    const [form, setForm] = useState({ name: "", surname: "" })
    
    const onChangeInput = (e) => setForm({...form, [e.target.name]: e.target.value})
    
    return (
        <div>
            {/* <input value={ name } onChange={(e) => setName(e.target.value)} /> */}
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />
            {form.name} {form.surname}
            
            
        </div>
    )
}
