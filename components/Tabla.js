const Tabla = ({parkings}) => {
    return (
        <div>
            <h1 className="text-center">Aparcamientos mostrados</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>DIRECCIÓN</th>
                        <th>LATITUD</th>
                        <th>LONGITUD</th>
                        <th>CAPACIDAD</th>
                        <th>LIBRES</th>
                        <th>CORREO ELECTRÓNICO</th>
                    </tr>
                </thead>  
                <tbody>
                {
                    parkings.map(({_id, poiID, nombre, direccion, 
                        latitud, longitud, capacidad, libres, correo}) => (
                        <tr key={_id}>
                            <td>{poiID}</td>
                            <td>{nombre}</td>
                            <td>{direccion}</td>
                            <td>{latitud}</td>
                            <td>{longitud}</td>
                            <td>{capacidad}</td>
                            <td>{libres}</td>
                            <td>{correo}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;