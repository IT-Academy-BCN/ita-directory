import BarcelonaBanner from "../../../assets/logos/barcelona-banner.jpg";
import {BannerImage} from "./Banner.styles";

const Banner = () => {
	return (
		<section className="flex flex-col align-center static">
			<BannerImage src={BarcelonaBanner} alt="body-banner" className="object-cover w-full" />
			<p className="text-2xl text-pinkRed mt-96 mx-auto">
				Un directorio abierto desarrollado por los alumnos de Barcelona Activa
			</p>
		</section>
	);
};

export default Banner;
