import React from "react";
import Header from "components/layout/Header/Header";
import {SearchStyled} from "./Search.style.js";

const Search = () => {
	return (
		<div>
			<Header />
			<SearchStyled>
				<div className="search-body">
					<div className="search-results">
						<div className="search-results-list">
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
							<div className="box"></div>
						</div>
					</div>
					<div className="search-map">
						<div className="map">map here</div>
					</div>
					<div className="search-more-button">
						<button type="button">cargar mas</button>
					</div>
				</div>
			</SearchStyled>
		</div>
	);
};

export default Search;
