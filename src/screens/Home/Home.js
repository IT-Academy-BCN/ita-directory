import React, {useState, useEffect} from "react";

const Home = () => {
	// Contador
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://miapi.com/datos-grafica").then((resp) => {
			setData(resp);
			setLoading(false);
		});
	}, []);

	return <>{loading ? <div>CARGANDO</div> : <div data={data}>Mis datos a mostrar</div>}</>;
};

export default Home;
