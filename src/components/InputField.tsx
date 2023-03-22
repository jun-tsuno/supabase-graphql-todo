import { FormEvent, useState } from 'react';
import MyButton from './MyButton';

const InputField = () => {
	const [inputTitle, setInputTitle] = useState<string>('');
	const [inputStatus, setInputStatus] = useState<string>('incomplete');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (inputTitle === '' || inputStatus === '')
			return alert('Both fields are required!!');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Task Title...'
					value={inputTitle}
					onChange={(e) => setInputTitle(e.target.value)}
				/>
				<label htmlFor='status'>Status</label>
				<select name='status' onChange={(e) => setInputStatus(e.target.value)}>
					<option value='incomplete'>Incomplete</option>
					<option value='inprogress'>Inprogress</option>
					<option value='completed'>Completed</option>
				</select>
				<MyButton primary type='submit'>
					ADD
				</MyButton>
			</form>
		</div>
	);
};

export default InputField;
