import BarcelonaBanner from "../../../assets/logos/barcelona-banner.jpg";
import {BannerImage} from "./Banner.styles";

const Banner = () => {
	return (
		<section className="absolute top-0 flex flex-col align-center">
			<BannerImage src={BarcelonaBanner} alt="body-banner" className="object-cover" />
			<p className="text-2xl text-pinkRed mt-8 mx-auto">
				Un directorio abierto desarrollado por los alumnos de Barcelona Activa
			</p>
		</section>
	);
};

export default Banner;
