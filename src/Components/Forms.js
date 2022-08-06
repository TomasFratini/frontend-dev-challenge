import { UseForm } from "./UseForm"
import card from "../IMG/card.jpg"

const initalForm = {
  email: "",
  mensaje: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regexMensaje = /^.{1,255}$/;

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto"
  }

  if (!form.mensaje.trim()) {
    errors.mensaje ="El campo 'Mensaje' es requerido"
  }else if (!regexMensaje.test(form.mensaje.trim())) {
    errors.mensaje = "El campo 'Mensaje' no debe exceder los 255 caracteres"
  }

  return errors
};

let styles = {
  color: "#dc3545",
}


const Forms = () => {

    const {form, 
        errors, 
        handleChange, 
        handleBlur, 
        handleSubmit,
    } = UseForm(initalForm, validationsForm)

  return (
    <div className="content-forms">
        <div className="border border-base-300">
            <div className="flex justify-center px-4 py-16 border-t border-base-300 bg-base-200">
                <div className="w-96">
                    <h1 className="text-3xl text-black tipografia pb-10">Ponte en contacto con nosotros!</h1>
                    <form onSubmit={handleSubmit}>
                    <label className="label">
                        <span className="label-text tipografia text-xl">Su correo electronico *</span>
                    </label>
                    <label className="input-group input-group-vertical ">
                        <input 
                        value={form.email}
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        type="email" 
                        name="email" 
                        placeholder="info@site.com"
                        className="input input-bordered input-forms" 
                        required/>
                        {errors.email && <p className="tipografia" style={styles}>{errors.email}</p>}
                    </label>
                    <label className="label ">
                        <span className="label-text text-xl tipografia ">Mensaje *</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <textarea
                        value={form.mensaje}
                        onBlur={handleBlur} 
                        onChange={handleChange}
                        type="text"
                        name="mensaje"
                        placeholder=""
                        className="input input-bordered h-24"
                        required/>
                        {errors.mensaje && <p className="tipografia" style={styles}>{errors.mensaje}</p>}
                    </label>
                    <div className="flex justify-center pt-5">
                        <button type="submit" className="btn bg-base-200 text-black normal-case">Enviar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="card-form card-compact border-base-300 bg-base-100 shadow-xl">
            <figure><img className="content" src={card} alt="card" /></figure>
            <div className="card-body">
                <h2 className="card-title">Colapso mental: cuando siento el peso del mundo sobre mí</h2>
                <p className="card-text">A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…</p>
                <button class="btn ">Ver nota completa</button>
            </div>
        </div> 
    </div>
  )
}
export default Forms