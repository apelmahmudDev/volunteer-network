import React from 'react';
import './AddEvent.css';

const AddEvent = () => {

    return (
        <div className="container">
           <form className="event-form"> 
                <div className="row d-flex">
                    <div className="col-md-6">
                        <label htmlFor="eventTitle">Event Title</label>
                        <input type="text" id="eventTitle" className="form-control" placeholder="Enter Title" />
                        <label htmlFor="description">Event Title</label>
                        <textarea rows="5" id="description" className="form-control" placeholder="Event Description"></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="eventDate">Event Title</label>
                        <input type="date" id="eventDate" className="form-control" />
                        <label htmlFor="banner">Banner</label>
                        <input type="file" disabled name="image" id="banner" className="form-control" />
                    </div>
                </div>
                    <div className="text-right">
                    <input className="btn btn-primary" type="submit"/></div>
            </form>
        </div>
    );
};

export default AddEvent;