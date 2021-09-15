import { useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
    // console.log(addContact);
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const onSubmit = (e) => {
        e.preventDefault()
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }
        addContact([...contacts, form])
      
        setForm(initialFormValues)
  };

  return (
    <form onClick={onSubmit}>
      <div>
        <input
          name="fullname"
                  placeholder="Fullname"
                  value={form.fullname}
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          name="phone_number"
                  placeholder="Phone Number"
                  value={form.phone_number}
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <button >Add</button>
      </div>
    </form>
  );
}

export default Form;
