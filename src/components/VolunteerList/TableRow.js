import React from 'react';
import trashIcon from '../../images/trash.png';

const TableRow = (props) => {
    const {name, email, date, volunteerOption, _id} = props.volunteer;
	return (
		<tr>
			<td>{name}</td>
			<td>{email}</td>
			<td>{date}</td>
			<td>{volunteerOption}</td>
			<td className="trash-icon">
				<img src={trashIcon} alt="" />
			</td>
		</tr>
	);
};

export default TableRow;
