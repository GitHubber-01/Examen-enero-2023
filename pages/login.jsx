import {getSession, signIn} from "next-auth/react";

export default function Login() {
    return (
        <div>
            <h1>Inicia sesión aquí.</h1>
            <button className="btn btn-primary" onClick={() => signIn()}>Iniciar sesión</button>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return session ? {redirect: {destination: "/", permanent: false}} : {props: {}};
}