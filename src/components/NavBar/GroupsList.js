import React        from 'react';
import { MenuItem } from 'react-bootstrap';


const GroupsList = ({groups, onSetFilter, filter}) => (
	<div className="groups-list">
		{groups.map((group, index) =>
			<MenuItem key={index}
			          onClick={() => onSetFilter(group)}
			          className={group === filter && 'active'}>

				{group}
			</MenuItem>
		)}
	</div>
);


export default GroupsList;