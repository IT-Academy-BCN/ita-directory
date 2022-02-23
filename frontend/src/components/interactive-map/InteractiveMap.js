import {useContext, useEffect, useState} from "react";
import "./interactiveMap.css";
import {MapContext} from "./MapContext";
import path_data from "./data/path-data";
import {mapDistricts} from "./data/map-districts";

const InteractiveMap = () => {
	const {state, dispatch} = useContext(MapContext);
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

	const handleMobileMouseOver = (id) => {
		const action = {
			type: "lit-map-district",
			payload: id,
		};
		dispatch(action);
	};

	const handleMouseOver = (id) => {
		const action = {
			type: "lit-area",
			payload: id,
		};
		dispatch(action);
	};

	const isMobileOrTablet = screenWidth <= 820;

	return (
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="427.543"
				height="405.636"
				viewBox="0 0 427.543 405.636"
			>
				<defs>
					<clipPath id="clip-path">
						<path id="path693" d="M0,154.905H80.429V0H0Z" />
					</clipPath>
				</defs>
				<g id="Group_309" data-name="Group 309" transform="translate(-20014.055 -3139.501)">
					<g id="layer1" transform="translate(20014.555 3140.001)">
						{isMobileOrTablet &&
							mapDistricts.map((el) => (
								<path
									key={el.id}
									id={el.id}
									d={el.d}
									transform={el.transform}
									fill="#fcf5e3"
									stroke="#000"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="1"
									className={state.districtId === el.id ? "is-lit" : null}
									onMouseOver={() => handleMobileMouseOver(el.id)}
									onMouseLeave={() => handleMobileMouseOver("")}
								/>
							))}
						{!isMobileOrTablet &&
							mapDistricts.map((el) => (
								<path
									key={el.id}
									id={el.id}
									d={el.d}
									transform={el.transform}
									fill="#fcf5e3"
									stroke="#000"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="1"
								/>
							))}

						<g id="g687" transform="translate(268.454 282.505) rotate(90)">
							<g id="g689" clipPath="url(#clip-path)">
								<path
									id="path695"
									d="M7.545,34.054l4.015-3.841-.035-4.949.9-2.769,1.107-3.322-.069-1.246V14.155l3.392.035h7.233l.035-3.668.069-3.6c7.317.151,14.66.236,21.976.208.023-2.365.114-4.73.138-7.095l.969.554L48.347.035,50.978,0h8.029l-.346,1.7-2.319.069-.588,3.08L56.273,8.1,59.11,16.4l2.076,5.918-.692.277.8,2.076,1.523,3.6.554,1.7,1.107,2.63,2.18,4.153,2.423,4.776,4.6,7.095.8.865,3.149-1.142.311.761-3.461,2.18,2.146,4.5,1.419,1.8,2.353,4.984-.173,4.049-1.142,2.8-.623,2.665,9.171,26.856.311.415,3.219,9.552.554,1,.519.8.173.658.554,1.281.519,1.28.761.969,14.293,20.142,2.769,3.876,2.492,3.392,4.637,6.506,2.734,3.911.484.692-.8.484-4.845-6.749-3.184,2.215-.381.208-.312-.069-.035-.277-2.076-3.149.381-.311,1,1.488.934-.692.381.519.484-.346-.381-.519,1.73-1.28-1.211-1.523-4.326-5.78-1.211-.069-.1.069-.311-.035-2.63-3.7-1.8-2.838,1.073-.623L95.726,119.4l-1.315.415-1.869-2.457-.623-1.211-.035-.069-.1-.45-.138-.519.208-1.281-.588-.8-1.384-4.084-1.246-.1-1.211.415-.519-.277-.45-.658-.1-.173h.035l.554-.208-8.687-25.16L74.511,71.846l3.5-6.126L76.83,60.287l-2.526-3.5-.658.485.208.242-.138.1-.311-.415.069-.069.1-.069L73.542,57l.035-.035-.1-.069.588-.45-3.253-4.291L69.147,53.4l2.319,3.115-.346.242L72.088,58l.069.035.831-.485.277.381-.519.346.554.727-.554.484-3.7-4.914-.727.554,3.738,4.88-.311.242-.692-.934-1.107.8-3.461-4.637-.8.588-.9-1.177,4.672-3.53-.8-1.073-1.627,1.281-.45-.588-1.142.969-1.834-2.353,2.7-2.111L62.5,42.5l-.277-.692-.554.311.969,2.215-.173.069-.831-1.973-1.869.761-.554,1.765,3.7,4.741-1.177.969H61.5l-1.765.415-.069-.242,1.592-.381-.623-.865-1.488.519-.1-.311,1.384-.415L59.8,48.52l-1.488.554-.1-.208,1.384-.588-.657-.8-1.384.692-.138-.208,1.315-.727-.623-.831-1.315.8-.173-.242,1.315-.8-.727-.865-.969.865-.208-.208,1-.934,1.246-3.772L58,41.114l-.381-.519-.761.069.554-.519L55.58,37.411l-1.315,2.457-.173-.1,1.35-2.561-.519-.8-1.246-.623-1.834,3.5-.242-.1,1.834-3.565-1.557-.831-1.938,3.7-.242-.1,1.938-3.7-1.315-.761-2.007,3.772-.277-.1,2.007-3.807-.9-.519-2.111,3.876-.208-.069L48.9,33.154l-.277-.173-.346.1-.415-.242L46.029,36.2l-.208-.1,1.8-3.322-1.142.311-1.557,2.8-.277-.138,1.419-2.526-1.142.242-.9,1.7-.311-.1L44.54,33.5l-.865.277-1.142,1.8-.173.381L52.846,41.7l2.111,8.341-.277.381-3.288.761-1.246-.8-1.938-7.545L44.817,41.01l-.623-.381-1.281-.692-.484.1,3.149,12.182.485,2.076.45,1.973.554,2.492.727-.208.173.554,11.351-2.8-.138-.588.692-.242,1.038.623.035.208.934,3.911-.588,1-.692.173-.173-.658L50.389,63.16l-1.938.519h-.208l-.208-.208-3.08.727-.173.035-.8-3.322-2.6,1.28-3.565,2.942-.865.692-4.568,3.807-.242.208-.623.658-1.592,1.834L28.725,73.4l-.8-.069-.727-.1H24.26L22.737,73.2c-3.344-.165-6.514-.078-9.863-.208C8.562,67.7,4.3,62.368,0,57.069l.208-2.423,9.413-7.475C9.265,43.233,7.49,38.119,7.545,34.054Z"
									transform="translate(0.485 0.519)"
									fill="none"
									stroke="#000"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeMiterlimit="10"
									strokeWidth="1"
								/>
							</g>
						</g>
					</g>

					{isMobileOrTablet &&
						path_data.map((item) => (
							<path
								key={item.id}
								id={item.id}
								d={item.d}
								transform={item.transform}
								fill="none"
								stroke="#fcf5e3"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="0"
								strokeWidth="0"
								fillRule="evenodd"
							/>
						))}

					{!isMobileOrTablet &&
						path_data.map((item) => (
							<path
								key={item.id}
								id={item.id}
								d={item.d}
								transform={item.transform}
								className={item.id === state[item.id] ? "is-lit" : null}
								onMouseOver={() => handleMouseOver(item.id)}
								onMouseLeave={() => handleMouseOver("")}
								fill="none"
								stroke="#000"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeMiterlimit="10"
								strokeWidth="0.1"
								fillRule="evenodd"
							/>
						))}

					{!isMobileOrTablet ? (
						<>
							<text
								id="2-gotic-nr"
								transform="translate(20235.615 3451.573)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									2
								</tspan>
							</text>
							<text
								id="3-barceloneta-nr"
								transform="translate(20254.227 3477.998)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									3
								</tspan>
							</text>
							<text
								id="4-santpere-nr"
								transform="translate(20256.525 3453.412)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									4
								</tspan>
							</text>
							<text
								id="5-fortpienc-nr"
								transform="translate(20276.746 3427.676)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									5
								</tspan>
							</text>
							<text
								id="6-sagradafamilia-nr"
								transform="translate(20285.018 3401.941)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									6
								</tspan>
							</text>
							<text
								id="7-eixampledreta"
								transform="translate(20247.104 3414.809)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									7
								</tspan>
							</text>
							<text
								id="8-antigaesquerradeleixample-nr"
								transform="translate(20217.691 3405.158)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									8
								</tspan>
							</text>
							<text
								id="9-novaesquerradeleixample-nr"
								transform="translate(20193.105 3407.226)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									9
								</tspan>
							</text>
							<text
								id="10-santantoni-nr"
								transform="translate(20195.174 3432.042)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									10
								</tspan>
							</text>
							<text
								id="11-poblesec-nr"
								transform="translate(20189.889 3452.033)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									11
								</tspan>
							</text>
							<text
								id="pm-parcmontjuic-nr"
								transform="translate(20157.49 3466.739)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									PM
								</tspan>
							</text>
							<text
								id="fp-zonafranca-nr"
								transform="translate(20057.996 3479.526)"
								fontSize="8"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									FP
								</tspan>
							</text>
							<text
								id="12-lamarinadelpratvermell-nr"
								transform="translate(20109.695 3460.764)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									12
								</tspan>
							</text>
							<text
								id="13-lamarinadelport"
								transform="translate(20123.482 3440.314)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									13
								</tspan>
							</text>
							<text
								id="14-lafontdelaguatlla-nr"
								transform="translate(20154.043 3427.676)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									14
								</tspan>
							</text>
							<text
								id="15-hostafrancs-nr"
								transform="translate(20165.533 3415.268)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									15
								</tspan>
							</text>
							<text
								id="16-labordeta-nr"
								transform="translate(20138.877 3415.958)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									16
								</tspan>
							</text>
							<text
								id="17-santsbadal-nr"
								transform="translate(20136.58 3389.992)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									17
								</tspan>
							</text>
							<text
								id="18-sants-nr"
								transform="translate(20154.963 3397.575)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									18
								</tspan>
							</text>
							<text
								id="19-lescorts-nr"
								transform="translate(20174.033 3373.678)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									19
								</tspan>
							</text>
							<text
								id="20-lamaternitat-nr"
								transform="translate(20133.594 3358.742)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									20
								</tspan>
							</text>
							<text
								id="21-pedralbes"
								transform="translate(20141.865 3324.275)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									21
								</tspan>
							</text>
							<text
								id="22-vallvidrera-nr"
								transform="translate(20180.008 3236.04)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									22
								</tspan>
							</text>
							<text
								id="23-sarria-nr"
								transform="translate(20179.549 3308.88)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									23
								</tspan>
							</text>
							<text
								id="24-trestorres"
								transform="translate(20194.715 3340.59)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									24
								</tspan>
							</text>
							<text
								id="25-santgervasibonanova-nr"
								transform="translate(20216.314 3317.152)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									25
								</tspan>
							</text>
							<text
								id="26-santgervasigalvany-nr"
								transform="translate(20210.34 3363.568)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									26
								</tspan>
							</text>
							<text
								id="27-elputget-nr"
								transform="translate(20233.547 3345.645)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									27
								</tspan>
							</text>
							<text
								id="28-vallcarca-nr"
								transform="translate(20249.172 3318.99)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									28
								</tspan>
							</text>
							<text
								id="29-elcoll-nr"
								transform="translate(20265.027 3328.182)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									29
								</tspan>
							</text>
							<text
								id="30-lasalut-nr"
								transform="translate(20261.58 3350.7)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									30
								</tspan>
							</text>
							<text
								id="31-gracia"
								transform="translate(20246.645 3375.057)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									31
								</tspan>
							</text>
							<text
								id="32-elcampdengrassot-nr"
								transform="translate(20265.717 3387.924)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									32
								</tspan>
							</text>
							<text
								id="33-baixguinardo-nr"
								transform="translate(20283.18 3375.287)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									33
								</tspan>
							</text>
							<text
								id="34-canbaro-nr"
								transform="translate(20284.328 3356.215)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									34
								</tspan>
							</text>
							<text
								id="35-elguinardo-nr"
								transform="translate(20308.455 3370.461)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									35
								</tspan>
							</text>
							<text
								id="36-lafontdenfargues"
								transform="translate(20307.076 3344.036)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									36
								</tspan>
							</text>
							<text
								id="37-elcarmel"
								transform="translate(20281.342 3335.764)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									37
								</tspan>
							</text>
							<text
								id="38-lateixonera"
								transform="translate(20268.703 3313.476)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									38
								</tspan>
							</text>
							<text
								id="39-santgenisdelsagudells-nr"
								transform="translate(20251.471 3281.996)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									39
								</tspan>
							</text>
							<text
								id="40-montbau-nr"
								transform="translate(20289.154 3271.656)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									40
								</tspan>
							</text>
							<text
								id="41-valldhebron-nr"
								transform="translate(20291.451 3303.136)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									41
								</tspan>
							</text>
							<text
								id="42-laclota-nr"
								transform="translate(20296.506 3313.476)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									42
								</tspan>
							</text>
							<text
								id="43-horta-nr"
								transform="translate(20322.012 3284.294)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									43
								</tspan>
							</text>
							<text
								id="44-vilapicina-nr"
								transform="translate(20328.676 3348.862)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									44
								</tspan>
							</text>
							<text
								id="45-porta-nr"
								transform="translate(20349.586 3341.739)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									45
								</tspan>
							</text>
							<text
								id="46-turodelapeira-nr"
								transform="translate(20331.434 3334.845)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									46
								</tspan>
							</text>
							<text
								id="47-canpeguera-nr"
								transform="translate(20330.514 3322.897)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									47
								</tspan>
							</text>
							<text
								id="48-laguineueta-nr"
								transform="translate(20345.449 3317.612)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									48
								</tspan>
							</text>
							<text
								id="49-canyelles-nr"
								transform="translate(20348.438 3295.323)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									49
								</tspan>
							</text>
							<text
								id="50-lesroquetes-nr"
								transform="translate(20370.725 3307.961)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									50
								</tspan>
							</text>
							<text
								id="51-verdun-nr"
								transform="translate(20362.453 3319.91)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									51
								</tspan>
							</text>
							<text
								id="52-prosperitat-nr"
								transform="translate(20373.482 3330.479)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									52
								</tspan>
							</text>
							<text
								id="53-trinitatnova-nr"
								transform="translate(20392.785 3318.99)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									53
								</tspan>
							</text>
							<text
								id="54-torrebaro-nr"
								transform="translate(20387.039 3293.945)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									54
								</tspan>
							</text>
							<text
								id="55-ciutatmeridiana-nr"
								transform="translate(20402.436 3280.158)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									55
								</tspan>
							</text>
							<text
								id="56-vallbona-nr"
								transform="translate(20421.736 3287.97)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									56
								</tspan>
							</text>
							<text
								id="57-trinitatvella-nr"
								transform="translate(20409.098 3331.398)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									57
								</tspan>
							</text>
							<text
								id="58-barodeviver-nr"
								transform="translate(20409.787 3350.47)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									58
								</tspan>
							</text>
							<text
								id="59-bonpastor-nr"
								transform="translate(20393.703 3375.057)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									59
								</tspan>
							</text>
							<text
								id="60-santandreu-nr"
								transform="translate(20372.334 3354.606)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									60
								</tspan>
							</text>
							<text
								id="61-sagrera-nr"
								transform="translate(20345.221 3385.397)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									61
								</tspan>
							</text>
							<text
								id="62-elcongresielsindians-nr"
								transform="translate(20332.123 3367.704)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									62
								</tspan>
							</text>
							<text
								id="63-navas-nr"
								transform="translate(20327.527 3390.222)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									63
								</tspan>
							</text>
							<text
								id="64-campdelarpadelclot-nr"
								transform="translate(20307.535 3398.035)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									64
								</tspan>
							</text>
							<text
								id="65-elclot-nr"
								transform="translate(20316.957 3415.268)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									65
								</tspan>
							</text>
							<text
								id="66-elparcilallacunadelpoblenou-nr"
								transform="translate(20291.451 3440.084)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									66
								</tspan>
							</text>
							<text
								id="67-vilaolimpica-nr"
								transform="translate(20283.869 3464.671)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									67
								</tspan>
							</text>
							<text
								id="68-poblenou-nr"
								transform="translate(20312.592 3455.709)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									68
								</tspan>
							</text>
							<text
								id="69-diagonalmar-nr"
								transform="translate(20345.449 3462.833)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									69
								</tspan>
							</text>
							<text
								id="70-besosimaresme-nr"
								transform="translate(20365.441 3442.612)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									70
								</tspan>
							</text>
							<text
								id="71-provençalsdelpoblenou-nr"
								transform="translate(20339.475 3433.421)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									71
								</tspan>
							</text>
							<text
								id="72-santmartideprovençals-nr"
								transform="translate(20342.463 3413.2)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									72
								</tspan>
							</text>
							<text
								id="73-lavernedailapau-nr"
								transform="translate(20365.441 3406.307)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									73
								</tspan>
							</text>
							<text
								id="1-elraval-nr"
								transform="translate(20218.842 3444.91)"
								fontSize="9"
								fontFamily="ArialMT, Arial"
							>
								<tspan x="0" y="0">
									1
								</tspan>
							</text>
						</>
					) : null}
				</g>
			</svg>
		</div>
	);
};

export default InteractiveMap;
