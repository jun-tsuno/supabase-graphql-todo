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

	input UpdateTodoInput {
		status: String!
	}

	type Query {
		todos: [Todo!]
	}

	type Mutation {
		createTodo(input: CreateTodoInput!): Todo
		deleteTodo(id: ID!): Todo
		updateTodo(id: ID!, input: UpdateTodoInput!): Todo
	}
`;

export default typeDefs;
