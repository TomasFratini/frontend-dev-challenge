import { useState } from "react"

export const UseForm = (initalForm, validateForm) => {

  const [form, setForm] = useState(initalForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]:value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando formulario")
      setForm(initalForm)
    } else {
        return
    }
  };


  return {
    form, 
    errors,
    handleChange, 
    handleBlur, 
    handleSubmit,
  }
}