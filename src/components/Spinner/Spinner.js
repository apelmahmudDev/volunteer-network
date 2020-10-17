import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = () => {
	return (
		<div className="d-flex align-items-center justify-content-center" style={{height:'40vh'}}>
            <BeatLoader
             size="25" 
             color="purple"
             ></BeatLoader>
		</div>
	);
};

export default Spinner;
