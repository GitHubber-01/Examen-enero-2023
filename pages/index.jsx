import Parking from "../models/Parking";
import MapItem from "../components/Mapa";
import Tabla from "../components/Tabla";
import {getSession} from "next-auth/react";
import conectarDB from "../lib/dbConnect";
import Link from "next/link";


export default function Main({parkings}) {
    const containerStyle = {
		width: '1000px',
		height: '300px'
	};

    function getMarkers() {
        var markers = [];
        for (let i = 0; i < parkings.length; i++) {
            const p = parkings[i];
            markers.push({lat: p.latitud, lng: p.longitud});
        }
        return markers;
    };

    return (
        <div>
            <Link className="btn btn-primary" href="/account">Ver cuenta</Link>
            <Tabla parkings={parkings}/>
            <MapItem
                zoom={11}
                center={{lat: 36.7226292, lng: -4.4242604}}
                containerStyle={containerStyle}
                markers={getMarkers()}
            />
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const {query} = context;
    await conectarDB();
    const res = query.direccion === "" || query.direccion === null
        ? await Parking.find({}) : await Parking.find({direccion: new RegExp(query.direccion, "i")});
    const parkings = res.map(doc => {
        const p = doc.toObject();
        p._id = `${p._id}`;
        return p;
    });
    return !session ? {redirect: {destination: "/login", permanent: false}} : {props: {parkings}};
}