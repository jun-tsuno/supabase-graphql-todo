interface TabProps {
	tabs: { label: string; id: string }[];
	activeTab: string;
	handleTab: (id: string) => void;
}

const Tab = ({ tabs, activeTab, handleTab }: TabProps) => {
	return (
		<div>
			<div className='mx-auto flex w-[90%] min-w-[315px] max-w-[800px] justify-center'>
				{tabs.map(({ label, id }) => {
					return (
						<div
							key={id}
							onClick={() => handleTab(id)}
							className={`flex-grow cursor-pointer border-b-4 pb-1 text-center text-sm font-medium ${
								activeTab === id
									? ' border-cyan-700 text-cyan-700'
									: 'text-zinc-500'
							}`}
						>
							{label}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Tab;
