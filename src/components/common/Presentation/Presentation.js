const Presentation = ({title, apellido, profesion, hobbies}) => {
/*    console.log(props)*/
    return (
        <>
            <h4>Titulo: {title}</h4>
            <h4>Mi apellido: {apellido}</h4>
            <h4>Mi profesion: {profesion}</h4>
            <h4>Mis Hobbies: {hobbies}</h4>
        </>
    );
}

export default Presentation;