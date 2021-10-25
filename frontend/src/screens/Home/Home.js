import {Link} from "react-router-dom";

// Layout Components
import Body from "components/layout/Body/Body";

// Styles
import {HomeContainer} from "./Home.styles";

const pages = [
	{title: "Ad", route: "/ad"},
	{title: "Admin users' List", route: "/lista-usuarios-admins"},
	{title: "Ads", route: "/ads"},
	{title: "Bill", route: "/my-bill/:id"},
	{title: "Dashboard", route: "/dashboard"},
	{title: "Home", route: "/"},
	{title: "Login", route: "/login"},
	{title: "My Bills", route: "/my-bills"},
	{title: "New Ad", route: "/new-ad"},
	{title: "Profile", route: "/profile"},
	{title: "Recover Password", route: "/recover-password/:hash"},
	{title: "Register", route: "/register"},
	{title: "User's Ads", route: "/user-ads"},
];

const Home = () => {
	return (
		<>
			<Body title="Home" justifyTitle="center">
				<HomeContainer>
					<ul>
						{pages.map((page) => (
							<li>
								<Link to={page.route}>{page.title}</Link>
							</li>
						))}
					</ul>
				</HomeContainer>
			</Body>
		</>
	);
};

export default Home;
