
const Calculator = () => {
    const temperature = '';
    return (
        <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o enderco da imagem"/>
        </form>
    </section>
    )
}

export default Calculator