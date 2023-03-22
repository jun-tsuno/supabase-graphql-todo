import { FormEvent, useState } from 'react';
import MyButton from './MyButton';
import { gql, useMutation } from '@apollo/client';
import { GET_TODOS } from '../pages/index';
import Dropdown from './Dropdown';

const CREATE_TODO_MUTATION = gql`
	mutation CreateTodo($input: CreateTodoInput!) {
		createTodo(input: $input) {
			id
			title
			status
		}
	}
`;

const InputField = () => {
	const [inputTitle, setInputTitle] = useState<string>('');
	const [inputStatus, setInputStatus] = useState<string>('');

	const [createTodo] = useMutation(CREATE_TODO_MUTATION, {
		refetchQueries: [GET_TODOS, 'GetAllTodos'],
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (inputTitle === '' || inputStatus === '')
			return alert('Both fields are required!!');
		await createTodo({
			variables: { input: { title: inputTitle, status: inputStatus } },
		});
		setInputTitle('');
		setInputStatus('');
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='w-[90%] mx-auto flex justify-around'
			>
				<input
					type='text'
					placeholder='Task Title...'
					value={inputTitle}
					onChange={(e) => setInputTitle(e.target.value)}
					className='grow p-2 rounded-lg'
				/>
				<div>
					<Dropdown setSelect={setInputStatus} />
					<MyButton primary type='submit'>
						ADD
					</MyButton>
				</div>
			</form>
		</>
	);
};

export default InputField;
