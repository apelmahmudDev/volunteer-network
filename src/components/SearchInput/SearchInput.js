import React from 'react';

const SearchInput = () => {
	return (
		<div className="container">
			<div className="row d-flex justify-content-center align-items-center">
				<div className="col-md-8 mt-5 text-center">
					<h2 className="font-weight-bold text-dark search-top-text">I GROW BY HELPING PEOPLE IN NEED</h2>
					<div className="d-flex mt-3">
						<input
							type="text"
							className="form-control"
							placeholder="Search..."
						/>
						<input type="submit" value="Search" className="btn btn-primary" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchInput;
