import { gql } from 'apollo-server-micro';

const typeDefs = gql`
	type Todo {
		id: ID!
		title: String!
		status: String!
	}

	type Query {
		todos: [Todo!]
	}
`;

export default typeDefs;
