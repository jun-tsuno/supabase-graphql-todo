import { gql } from 'apollo-server-micro';

const typeDefs = gql`
	type Todo {
		id: ID!
		title: String!
		status: String!
	}

	input CreateTodoInput {
		title: String!
		status: String!
	}

	type Query {
		todos: [Todo!]
	}

	type Mutation {
		createTodo(input: CreateTodoInput!): Todo
		deleteTodo(id: ID!): Todo
	}
`;

export default typeDefs;
