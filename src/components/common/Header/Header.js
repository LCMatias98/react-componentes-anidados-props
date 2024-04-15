
const Header = (props) => {
    console.log(props)
    return (
        <>
            <h3>Header</h3>
            <p>Prueba de Componentes, envuelto en un Fragment. Siempre retorna un unico nodo padre.
                Esto es JSX a JS
            </p>
            <h1>{props.title}</h1>
        </>
    );
}

export default Header;