import { Context } from '@/types/type';

const resolvers = {
	Query: {
		todos: async (parent: undefined, args: {}, context: Context) => {
			return await context.prisma.todo.findMany();
		},
	},
};

export default resolvers;
