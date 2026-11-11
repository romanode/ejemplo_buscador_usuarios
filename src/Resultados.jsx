
export default function Resultados({usuarios}){
    return (
        <div>
        <ul id="resultados">
            {usuarios.map( user => (
                <li key={user.id}>
                   <p> Nombre: <b>{user.firstName}</b>  {user.lastName}</p>
                   <p> Email: {user.email}</p>
                   <img src={user.image} alt={"imagen del usuario" + user.firstName} />
                </li>
            ))}
        </ul>
        </div>
    )
}