import { gql, useMutation, useQuery } from '@apollo/client';
import { TodoType } from '@/types/type';
import MyButton from './MyButton';
import { GET_TODOS } from '@/pages';

const DELETE_TODO_MUTATION = gql`
	mutation DeleteTodo($id: ID!) {
		deleteTodo(id: $id) {
			title
		}
	}
`;

interface CardProps {
	todo: TodoType;
}

const Card = ({ todo }: CardProps) => {
	const { title, status, id } = todo;

	const [deleteUser, { data, loading, error }] = useMutation(
		DELETE_TODO_MUTATION,
		{
			refetchQueries: [GET_TODOS, 'GetAllTodos'],
		}
	);

	const handleDelete = async (id: string) => {
		await deleteUser({
			variables: { id },
		});
	};

	return (
		<div className='w-[80%] mx-auto border-2 border-zinc-300 rounded-lg text-zinc-300 py-3 px-2 flex justify-between'>
			<div>
				<p>
					Todo:
					<span className='font-bold text-xl'> {title}</span>
				</p>
				<p>
					Status:
					<span className='font-semibold'> {status}</span>
				</p>
			</div>
			<div className='flex space-x-2'>
				<MyButton danger onClick={() => handleDelete(id)}>
					DELETE
				</MyButton>
				<MyButton primary>UPDATE</MyButton>
			</div>
		</div>
	);
};

export default Card;
