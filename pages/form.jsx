import { useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const Formulario = () => {
    const router = useRouter();

    const [form, setForm] = useState({
        direccion: ""
    });

    const [message, setMensaje] = useState([]);
    
    const handleChange = e => {
        const {value, name} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        getData(form);
    }

    const getData = async(form) => {
        try {
            router.push(`${process.env.URL_LOCAL}?direccion=${form.direccion}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1 className="my-3">Buscar por dirección</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form control w-100 my-1"
                    placeholder="Dirección del aparcamiento"
                    autoComplete="off"
                    name="direccion"
                    value={form.direccion}
                    onChange={handleChange}
                />
                <button className="btn btn-primary w-100 my-1" type="submit">Buscar</button>
                {
                    message.map(({message}) => (
                        <p key={message}>{message}</p>
                    ))
                }
            </form>
        </div>
    );
}

export default Formulario;

// Esto simplemente renderiza desde el servidor.
export async function getServerSideProps(context) {
    const session = await getSession(context);
    return !session ? {redirect: {destination: "/login", permanent: false}} : {props: {}};
}