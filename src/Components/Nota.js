import comillas from "../IMG/comillas.png"

const Nota = () => {
  return (
    <div className="nota-dimension nota">
        <div>
            <img alt="nota" className="" src={comillas}/>
        </div>
        <p className="nota-text"> Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.</p>
        <h2> ~ Maria Montessori ~</h2>

    </div>
  )
}
export default Nota