import React, {useState, useEffect} from "react";
import {useContext} from "react";
import {MapContext} from "./store/context";
import {allDistricts} from "./data/all-districts";
import "./interactiveMap.css";

const DistrictsList = () => {
	const {state, dispatch} = useContext(MapContext);
	const [leftColumnDistricts, setLeftColumnDistricts] = useState([]);
	const [rightColumnDistricts, setRightColumnDistricts] = useState([]);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const handleWindowSizeChange = () => {
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	useEffect(() => {
		if (allDistricts) {
			const left = allDistricts.filter(
				(el) =>
					el.district === "Ciutat_Vella" ||
					el.district === "L_Eixample" ||
					el.district === "Sants_Montjuic" ||
					el.district === "Les_Corts" ||
					el.district === "Sarria_Sant_Gervasi" ||
					el.district === "Gràcia"
			);

			const right = allDistricts.filter(
				(el) =>
					el.district === "Horta_Guinardó" ||
					el.district === "Nou_Barris" ||
					el.district === "Sant_Andreu" ||
					el.district === "Sant_Martí"
			);
			setLeftColumnDistricts(left);
			setRightColumnDistricts(right);
		}
	}, []);

	const handleMobileDistrictMouseOver = (district) => {
		const action = {
			type: "lit-map-district",
			payload: district,
		};
		dispatch(action);
	};

	const handleDistrictMouseOver = (areas) => {
		const action = {
			type: "lit-district",
			payload: areas,
		};
		dispatch(action);
	};

	const handleAreaMouseOver = (mapId) => {
		const action = {
			type: "lit-area",
			payload: mapId,
		};
		dispatch(action);
	};

	const renderList = (district, areas) => (
		<ul key={district}>
			<li
				className="text-sm cursor-pointer"
				onMouseOver={() => handleDistrictMouseOver(areas)}
			>
				{district}
			</li>
			<ul className="flex flex-col">
				{areas
					.filter((areas) => Number.isFinite(areas.nr))
					.map(({nr, id, name}) => (
						<li
							key={id}
							className={
								id === state[id] && state.title !== "district"
									? "is-lit text-xs"
									: "text-xs"
							}
							onMouseOver={() => handleAreaMouseOver(id)}
						>
							{`${nr}. ${name}`}
						</li>
					))}
			</ul>
		</ul>
	);

	const renderMobileList = (district) => (
		<li
			key={district}
			className={
				state.districtId === district
					? "is-lit text-xs cursor-pointer"
					: "text-xs cursor-pointer"
			}
			onMouseOver={() => handleMobileDistrictMouseOver(district)}
			onMouseLeave={() => handleMobileDistrictMouseOver("")}
		>
			{district}
		</li>
	);

	const isMobileOrTablet = screenWidth <= 820;

	if (isMobileOrTablet) {
		return (
			<div className="flex flex-col">
				<ul className="ml-4">
					{allDistricts.map(({district}) => renderMobileList(district))}
				</ul>
			</div>
		);
	}
	return (
		<div className="flex flex-row ml-2">
			<div className="flex flex-col">
				{leftColumnDistricts.map(({district, areas}) => renderList(district, areas))}
			</div>
			<div className="flex flex-col">
				{rightColumnDistricts.map(({district, areas}) => renderList(district, areas))}
			</div>
		</div>
	);
};

export default DistrictsList;
