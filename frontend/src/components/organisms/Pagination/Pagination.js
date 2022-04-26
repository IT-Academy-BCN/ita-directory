import React from "react";
import {PaginationStyled} from "./Pagination.style";

const Pagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<PaginationStyled>
				{pageNumbers.length > 1
					? pageNumbers.map((number) => (
							<li
								className={`page-item ${currentPage === number ? "active" : null}`}
								key={number}
							>
								{" "}
								<a onClick={() => paginate(number)} href="!#">
									{number}
								</a>
							</li>
					  ))
					: null}
			</PaginationStyled>
		</nav>
	);
};
export default Pagination;
