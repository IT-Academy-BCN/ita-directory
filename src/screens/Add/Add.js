import React from "react";
import Body from "components/layout/Body/Body";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faBed} from "@fortawesome/free-solid-svg-icons";
import {faEuroSign} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faBath} from "@fortawesome/free-solid-svg-icons";

const Add = () => {
	return (
		<>
			<Body title="Anuncio">
				<div>
					<ul>
						<li>
							<div>
								<FontAwesomeIcon icon={faMapMarkerAlt} />
							</div>
							<div>Madrid</div>
						</li>
						<li>
							<div>
								<FontAwesomeIcon icon={faBed} />
							</div>
							<div>3 habitaciones</div>
						</li>
						<li>
							<div>
								<FontAwesomeIcon icon={faEuroSign} />
							</div>
							<div>1.390.000</div>
						</li>
						<li>
							<div>
								<FontAwesomeIcon icon={faHome} />
							</div>
							<div>55m2</div>
						</li>
						<li>
							<div>
								<FontAwesomeIcon icon={faBath} />
							</div>
							<div>4 baños</div>
						</li>
					</ul>
				</div>

				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
						tincidunt urna. Aenean eu ullamcorper eros, blandit volutpat turpis.
					</p>
					<p>
						Quisque feugiat tincidunt lectus, vel congue eros sollicitudin ut. Maecenas
						nec dictum nisl, a maximus elit. Praesent dolor erat, condimentum nec luctus
						vel, tincidunt a tellus. Sed fringilla blandit cursus. Mauris cursus viverra
						congue. Nullam ultricies metus eget condimentum congue. Cras ac mollis nisl.
						Donec nec libero quis ex tempus iaculis a ut diam. Etiam porttitor gravida
						augue, sed mattis velit. Donec nec mi molestie risus fermentum viverra eu
						sit amet metus. Aenean iaculis tincidunt ex id interdum. Nam vitae venenatis
						magna. Curabitur vehicula semper metus, quis commodo erat tincidunt nec.
						Orci varius natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus.
					</p>
				</div>

				<button>Contacto</button>
			</Body>
		</>
	);
};

export default Add;
