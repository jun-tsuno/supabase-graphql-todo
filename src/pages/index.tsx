import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Tab from '@/components/Tab';

const GET_TODOS = gql`
	query GetAllTodos {
		todos {
			id
			title
			status
		}
	}
`;

const tabs = [
	{ label: 'INCOMPLETE', id: 'incomplete' },
	{ label: 'IN PROGRESS', id: 'in-progress' },
	{ label: 'COMPLETED', id: 'completed' },
];

const Home = () => {
	const [activeTab, setActiveTab] = useState('incomplete');
	const { data, loading, error } = useQuery(GET_TODOS);

	if (loading) return <h2>Loading...</h2>;
	if (error) return <h2>Something Went Wrong! Please Try Again!</h2>;

	const { todos } = data;
	console.log(todos);

	return (
		<>
			<div className='w-[90%] max-w-[800px] mx-auto'>
				<h1 className='text-center py-5 text-2xl font-semibold text-zinc-500'>
					ToDo App with Supabase
				</h1>
				<div className='my-10'>
					<Tab tabs={tabs} activeTab={activeTab} handleTab={setActiveTab} />
				</div>
			</div>
		</>
	);
};

export default Home;
