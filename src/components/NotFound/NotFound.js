import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row p-2 d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
                <div className="col-md-4 p-5 rounded text-center" style={{background:'#1B1D26'}}>
                    <h3 className="mb-3 text-white">Not found the page!</h3>
                    <Link to="/">
                        <button className="btn btn-dark text-white">Go to Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;