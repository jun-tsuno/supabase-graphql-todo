import { FormEvent, useState } from 'react';
import MyButton from './MyButton';
import { useMutation } from '@apollo/client';
import { GET_TODOS, CREATE_TODO_MUTATION } from '@/graphql/queries/queries';
import Dropdown from './Dropdown';

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
			<form onSubmit={handleSubmit} className='space-y-3 sm:flex sm:space-y-0'>
				<input
					type='text'
					placeholder='Task Title...'
					value={inputTitle}
					onChange={(e) => setInputTitle(e.target.value)}
					className='p-2 rounded-lg w-full'
				/>
				<div className='flex items-center'>
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
