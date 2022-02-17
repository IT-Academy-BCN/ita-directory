import BarcelonaBanner from "../../../assets/logos/barcelona-banner.jpg";
import {BannerImage} from "./Banner.styles";

const Banner = () => {
	return (
		<section className="absolute top-0">
			<BannerImage src={BarcelonaBanner} alt="body-banner" className="object-cover" />
		</section>
	);
};

export default Banner;
