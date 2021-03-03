import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faBed} from "@fortawesome/free-solid-svg-icons";
import {faEuroSign} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faBath} from "@fortawesome/free-solid-svg-icons";
import {StyledUl, StyledLi, StyledTitle, StyledText,
} from "./CreateAd.styles"
const CreateAd = () => {
    return (
        <>
        <div>
                    <div>
                    
					<StyledUl>
						<StyledLi>
							<div>
								<FontAwesomeIcon icon={faMapMarkerAlt} />
							</div>
							<StyledTitle>Madrid</StyledTitle>
						</StyledLi>
						<StyledLi>
							<div>
								<FontAwesomeIcon icon={faBed} />
							</div>
							<StyledTitle>3 habitaciones</StyledTitle>
						</StyledLi>
						<StyledLi>
							<div>
								<FontAwesomeIcon icon={faEuroSign} />
							</div>
							<StyledTitle>1.390.000</StyledTitle>
						</StyledLi>
						<StyledLi>
							<div>
								<FontAwesomeIcon icon={faHome} />
							</div>
							<StyledTitle>55m2</StyledTitle>
						</StyledLi>
						<StyledLi>
							<div>
								<FontAwesomeIcon icon={faBath} />
							</div>
							<StyledTitle>4 baños</StyledTitle>
						</StyledLi>
					</StyledUl>
				</div>

				<StyledText>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
						tincidunt urna. Aenean eu ullamcorper eros, blandit volutpat turpis.
					</p>
					<p>
						Quisque feugiat tincidunt lectus, vel congue eros sollicitudin ut. Maecenas
						nec dictum nisl, a maximus elit. Praesent dolor erat, condimentum nec luctus
						vel, tincidunt a tellus. Sed fringilla blandit cursus. Mauris cursus viverra
						congue. Nullam ultricies metus eget condimentum congue.
					</p>
				</StyledText>
            
        </div>
        </>
    )
}

export default CreateAd
