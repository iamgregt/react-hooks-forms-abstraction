import React, { useState } from "react";

function Form() {
const [formData, setFormData] = useState({
  firstName: "John",
  lastName: "Henry",
  admin: false
})

  function handleChange(event){
    const name = event.target.name
    let value = event.target.value

    if(event.target.type === "checkbox"){
      value = event.target.checked
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <form>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
