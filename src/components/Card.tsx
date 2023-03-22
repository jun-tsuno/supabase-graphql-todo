import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { TodoType } from '@/types/type';
import MyButton from './MyButton';
import { GET_TODOS } from '@/pages';
import Dropdown from './Dropdown';

const DELETE_TODO_MUTATION = gql`
	mutation DeleteTodo($id: ID!) {
		deleteTodo(id: $id) {
			title
		}
	}
`;

const UPDATE_TODO_MUTATION = gql`
	mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
		updateTodo(id: $id, input: $input) {
			id
			title
			status
		}
	}
`;

interface CardProps {
	todo: TodoType;
}

const Card = ({ todo }: CardProps) => {
	const { title, status, id } = todo;
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [newStatus, setNewStatus] = useState<string>('');

	const [deleteUser] = useMutation(DELETE_TODO_MUTATION, {
		refetchQueries: [GET_TODOS, 'GetAllTodos'],
	});

	const [updateTodo] = useMutation(UPDATE_TODO_MUTATION, {
		refetchQueries: [GET_TODOS, 'GetAllTodos'],
	});

	const handleDelete = async (id: string) => {
		await deleteUser({
			variables: { id },
		});
	};

	const handleEdit = async (id: string) => {
		if (newStatus === '') return alert('Select the Status');
		await updateTodo({
			variables: { id, input: { status: newStatus } },
		});
		setIsEdit(false);
	};

	return (
		<div className='w-[90%] min-w-[300px] mx-auto border-2 border-zinc-300 rounded-lg text-zinc-300 py-3 px-2 flex justify-between items-center'>
			<div className='flex-[80%]'>
				<p>
					Todo:
					<span className='font-bold text-xl break-all'> {title}</span>
				</p>
				{isEdit ? (
					<Dropdown setSelect={setNewStatus} />
				) : (
					<p>
						Status:
						<span className='font-medium'> {status.toUpperCase()}</span>
					</p>
				)}
			</div>
			<div className='flex-[20%] flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 '>
				<MyButton danger onClick={() => handleDelete(id)}>
					DELETE
				</MyButton>
				{isEdit ? (
					<MyButton secondary onClick={() => handleEdit(id)}>
						UPDATE
					</MyButton>
				) : (
					<MyButton primary onClick={() => setIsEdit(true)}>
						UPDATE
					</MyButton>
				)}
			</div>
		</div>
	);
};

export default Card;
