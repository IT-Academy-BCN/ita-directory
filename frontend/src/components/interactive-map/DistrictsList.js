import React, {useState, useEffect} from "react";
import {useContext} from "react";
import {MapContext} from "./store/context";
import {allDistricts} from "./data/all-districts";
import styled from "styled-components";
import {MAP_ACTIONS} from "./store/reducer";
import InteractiveMap from "./InteractiveMap";
import {Container, GridItem, GridItemA, GridItemB, GridItemC} from "./mapOfDistrictsStyles";


const StyledList = styled.div`
	cursor: pointer;
	.district {
		font-size: 12px;
		font-weight: bold;
		margin-bottom: 6px;
	}

	.neighborhood {
		font-size: 10px;
		text-indent: 0rem;
	}

	.lit-neighborhood,
	.lit-district,
	.district:hover {
		background-color: #db2c7f;
		color: #fff;
	}
`;

const DistrictsList = () => {
	const {state, dispatch} = useContext(MapContext);
	const [leftColumnDistricts, setLeftColumnDistricts] = useState([]);
	const [rightColumnDistricts, setRightColumnDistricts] = useState([]);
	const [centerLColumnDistricts, setCenterLColumnDistricts] = useState([]);
	const [centerRColumnDistricts, setCenterRColumnDistricts] = useState([]);
	
	useEffect(() => {
		if (allDistricts) {
			const left = allDistricts.filter(
				(el) =>
					el.district === "Ciutat-Vella" ||
					el.district === "L-Eixample" ||
					el.district === "Sants-Montjuic" ||
					el.district === "Les-Corts" ||
					el.district === "Sarria-Sant-Gervasi"
			);
			const centerL = allDistricts.filter(
				(el) => 
					el.district === "Gracia" 
			);	
			const centerR = allDistricts.filter(
				(el) => 
					el.district === "Horta-Guinardo" 
			);	
			const right = allDistricts.filter(
				(el) =>
					el.district === "Nou-Barris" ||
					el.district === "Sant-Andreu" ||
					el.district === "Sant-Marti"
			);
			setLeftColumnDistricts(left);
			setCenterLColumnDistricts(centerL);
			setCenterRColumnDistricts(centerR);
			setRightColumnDistricts(right);
		}
	}, []);

	const renderList = (district, neighborhoods) => (
		<StyledList key={district}>
			<ul>
				<li
					className={state.districtID === district ? "district lit-district" : "district"}
					onMouseOver={() =>
						dispatch({
							type: MAP_ACTIONS.LIT_DISTRICT,
							payload: district,
						})
					}
				>
					{district === "L-Eixample"
						? district.replace("-", "´")
						: district.replace("-", " ")}
				</li>
				<ul className="flex flex-col mb-3">
					{neighborhoods
						.filter((neighborhoods) => Number.isFinite(neighborhoods.nr))
						.map(({nr, id, name}) => (
							<li
								key={id}
								className={
									id === state.neighborhoodID
										? "hidden md:block neighborhood lit-neighborhood"
										: "hidden md:block neighborhood"
								}
								onMouseOver={() =>
									dispatch({type: MAP_ACTIONS.LIT_NEIGHBORHOOD, payload: id})
								}
							>
								{`${nr}. ${name}`}
							</li>
						))}
				</ul>
			</ul>
		</StyledList>
	);

	return (
		<Container>
			
			<GridItemA >
				{leftColumnDistricts.map(({district, neighborhoods}) =>
					renderList(district, neighborhoods)
				)}
			</GridItemA>

		 	<GridItem >
				{centerLColumnDistricts.map(({district, neighborhoods}) =>
					renderList(district, neighborhoods)
				)}
			</GridItem> 

		 	<GridItem >
				{centerRColumnDistricts.map(({district, neighborhoods}) =>
					renderList(district, neighborhoods)
				)}
			</GridItem> 
			
			<GridItemC>
				<InteractiveMap /> 
			</GridItemC>
			
			<GridItemB>
				{rightColumnDistricts.map(({district, neighborhoods}) =>
					renderList(district, neighborhoods)
				)}
			</GridItemB>

		</Container>
	);
};

export default DistrictsList;
