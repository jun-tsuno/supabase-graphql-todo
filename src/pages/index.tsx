import { Fragment, useState } from 'react';
import { useQuery } from '@apollo/client';
import Tab from '@/components/Tab';
import Card from '@/components/Card';
import { TodoType } from '@/types/type';
import InputField from '../components/InputField';
import { GET_TODOS } from '@/graphql/queries/queries';

const tabs = [
	{ label: 'INCOMPLETE', id: 'incomplete' },
	{ label: 'IN PROGRESS', id: 'inprogress' },
	{ label: 'COMPLETED', id: 'completed' },
];

const Home = () => {
	const [activeTab, setActiveTab] = useState('incomplete');
	const { data, loading, error } = useQuery(GET_TODOS);

	if (loading) return <div className='text-white'>Loading...</div>;
	if (error)
		return <div className='text-white'>Something Went Wrong!! Try Again!</div>;

	const { todos } = data;
	const filteredTodos = todos.filter((todo: TodoType) => {
		return activeTab === todo.status;
	});

	return (
		<>
			<div className='w-[90%] h-[100vh] max-w-[800px] mx-auto'>
				<h1 className='text-center py-8 text-2xl font-semibold text-emerald-500'>
					ToDo App with Supabase & GraphQL
				</h1>
				<InputField />
				<div className='my-10'>
					<Tab tabs={tabs} activeTab={activeTab} handleTab={setActiveTab} />
				</div>
				<div className='space-y-4'>
					{filteredTodos.map((todo: TodoType) => {
						return (
							<Fragment key={todo.id}>
								<Card todo={todo} />
							</Fragment>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
