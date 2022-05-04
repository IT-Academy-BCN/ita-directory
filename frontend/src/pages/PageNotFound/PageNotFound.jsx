import {Link} from "react-router-dom";

//components
import Body from "../../components/layout/Body/Body";
import Button from "../../components/units/Button/Button";

const PageNotFound = () => {
	return (
		<Body title="404" justifyTitle="center">
			<div className="h-full m-auto">
				<p>Ops, parece que la página que estas buscando no existe.</p>
				<p>Vuelve a la página de inicio. Si se trata de un error, ponte en contacto.</p>
				<Link to="/">
					<Button text="Visit HomePage"></Button>
				</Link>
			</div>
		</Body>
	);
};

export default PageNotFound;
