import React, {useState, useEffect} from "react";
import {useContext} from "react";
import {MapContext} from "./MapContext";
import {allDistricts} from "./data/all-districts";
import "./interactiveMap.css";

const DistrictsList = () => {
	const {state, dispatch} = useContext(MapContext);
	const [leftColumnDistricts, setLeftColumnDistricts] = useState([]);
	const [rightColumnDistricts, setRightColumnDistricts] = useState([]);

	useEffect(() => {
		if (allDistricts) {
			const left = allDistricts.filter(
				(el) =>
					el.district === "Ciutat Vella" ||
					el.district === "L'Eixample" ||
					el.district === "Sants-Montjuic" ||
					el.district === "Les Corts" ||
					el.district === "Sarrià-Sant Gervasi" ||
					el.district === "Gràcia"
			);
			const right = allDistricts.filter(
				(el) =>
					el.district === "Horta-Guinardó" ||
					el.district === "Nou Barris" ||
					el.district === "Sant Andreu" ||
					el.district === "Sant Martí"
			);
			setLeftColumnDistricts(left);
			setRightColumnDistricts(right);
		}
	}, []);

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
		<ul>
			<li
				key={district}
				className="text-xs cursor-pointer"
				onMouseOver={() => handleDistrictMouseOver(areas)}
			>
				{district}
			</li>
			<ul className="flex flex-col">
				{areas.map(({nr, id, name}) => (
					<li
						key={id}
						className={id === state[id] && state.title !== "district" ? "is-lit" : null}
						onMouseOver={() => handleAreaMouseOver(id)}
					>
						{`${nr}. ${name}`}
					</li>
				))}
			</ul>
		</ul>
	);

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
