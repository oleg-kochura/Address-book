import React          from 'react';
import { Button }     from 'react-bootstrap';
import { FormGroup }  from 'react-bootstrap';

const AddGroup = ({addGroupMode, enableAdding, onInputChange, onFormSubmit, inputValue}) => (

	<form className="add-group" onSubmit={onFormSubmit}>
		<Button bsSize="xsmall"
		        onClick={ () => enableAdding() }>
			Add new...
		</Button>

		{addGroupMode &&

			<FormGroup bsSize="small">
				<input type="text"
				       autoFocus
				       className="form-control"
				       name="textInput"
				       onChange={(e) => onInputChange(e.target.value)}
				       value={inputValue}/>
			</FormGroup>
		}
	</form>
);


export default AddGroup;