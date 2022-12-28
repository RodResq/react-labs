import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholdModificada = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholdModificada} />
        </div>
    )
}

export default CampoTexto