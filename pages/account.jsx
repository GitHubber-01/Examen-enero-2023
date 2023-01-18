import Log from "../models/Log";
import {getSession, signOut} from "next-auth/react";

export default function Home({log, session}) {
    return (
        <div>
            <h1>¡Hola, {session.user.email}!</h1>
            <p>Nombre: {session.user.name}</p>
            <p>Imagen: <img src={session.user.image} height="50px" weight="50px"/></p>
            <p>Conexión: {log.timestamp}</p>
            <p>Caducidad: {session.expires}</p>
            <p>Token: {log.token}</p>
            <button  className="btn btn-primary" onClick={() => signOut()}>Cerrar sesión </button>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const res = await Log.find({});

    const logs = res.map(doc => {
        const log = doc.toObject();
        log._id = `${log._id}`;
        log.timestamp = log.timestamp.toISOString();
        log.caducidad = log.caducidad.toISOString();
        return log;
    });

    return !session ? {redirect: {destination: "/login", permanent: false}} :
         {props: {log: logs[logs.length - 1], session}};
}