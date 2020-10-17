import React from 'react';
import { useHistory } from 'react-router-dom';
import trashIcon from '../../images/trash.png';

const TableRow = (props) => {
	const {name, email, date, volunteerOption, _id} = props.volunteer;
	let history = useHistory();

	const deleteVolunteer = (id) => {
        fetch(`http://localhost:4200/deleteVolunteer/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Delete a volunteer list!')
                history.push("/home");
                history.push("/admin/volunteers-list");
            }
        })
	}
	
	return (
		<tr>
			<td>{name}</td>
			<td>{email}</td>
			<td>{date}</td>
			<td>{volunteerOption}</td>
			<td onClick={() => deleteVolunteer(_id)} className="trash-icon">
				<img src={trashIcon} alt="" />
			</td>
		</tr>
	);
};

export default TableRow;
