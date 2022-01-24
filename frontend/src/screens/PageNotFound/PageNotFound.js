import {Link} from "react-router-dom";

//components
import Body from "components/layout/Body/Body";

const PageNotFound = () => {
	return (
		<Body>
			<p>Ops, parece que la página que estas buscando no existe.</p>
			<Link to="/">Vuelve a la página de inicio</Link>.
			<p>Si se trata de un error, ponte en contacto.</p>
		</Body>
	);
};

export default PageNotFound;
