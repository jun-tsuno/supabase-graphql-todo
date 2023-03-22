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
		updateTodo: async (
			parent: undefined,
			args: { id: string; input: { status: string } },
			context: Context
		) => {
			const id = +args.id;
			const { status } = args.input;
			const updatedTodo = await context.prisma.todo.update({
				where: {
					id,
				},
				data: {
					status,
				},
			});
			return updatedTodo;
		},
	},
};

export default resolvers;
