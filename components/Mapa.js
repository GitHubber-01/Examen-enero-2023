import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapItem = ({
	google,
    center,
	containerStyle,
	markers,
	zoom
}) => {
	return (
		<div className="relative flex flex-col w-full h-full">
			<Map
				google = {google}
				zoom = {zoom}
				initialCenter = {center}
				containerStyle = {containerStyle}
			>
                {
                    markers.map(({ lat, lng }) => (
                        <Marker 
							key={3 * lat + 5 * lng} 
							position = {{ lat, lng }}
						/>
                    ))
				}
			</Map>
		</div>
	)
}

// La clave de la API debería ir en el fichero ".env.local".
export default GoogleApiWrapper({
	apiKey: "AIzaSyC0oul5JSrvvdVQU9JYhlJuT3qsVG7eUj0",
	language: 'ES'
})(MapItem)