interface DropdownProps {
	setSelect: (value: string) => void;
}

const Dropdown = ({ setSelect }: DropdownProps) => {
	return (
		<>
			<label htmlFor='status' className='mx-3 text-lg text-zinc-300'>
				Status
			</label>
			<select
				className='text-zinc-500 p-2 mr-2 rounded-lg'
				name='status'
				defaultValue={''}
				onChange={(e) => setSelect(e.target.value)}
			>
				<option value='' disabled hidden>
					Choose here
				</option>
				<option value='incomplete'>Incomplete</option>
				<option value='inprogress'>Inprogress</option>
				<option value='completed'>Completed</option>
			</select>
		</>
	);
};

export default Dropdown;
