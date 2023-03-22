import { Context } from '@/types/type';
import { UserInput } from '@/types/type';

const resolvers = {
	Query: {
		todos: async (parent: undefined, args: {}, context: Context) => {
			return await context.prisma.todo.findMany();
		},
	},
	Mutation: {
		deleteTodo: async (
			parent: undefined,
			args: { id: string },
			context: Context
		) => {
			const id = +args.id;
			await context.prisma.todo.delete({
				where: {
					id,
				},
			});
			return null;
		},
		createTodo: async (
			parent: undefined,
			args: { input: UserInput },
			context: Context
		) => {
			const { title, status } = args.input;
			const newTodo = await context.prisma.todo.create({
				data: {
					title,
					status,
				},
			});
			return newTodo;
		},
	},
};

export default resolvers;
