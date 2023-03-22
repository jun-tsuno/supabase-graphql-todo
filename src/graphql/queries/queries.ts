import { gql } from '@apollo/client';

export const GET_TODOS = gql`
	query GetAllTodos {
		todos {
			id
			title
			status
		}
	}
`;

export const CREATE_TODO_MUTATION = gql`
	mutation CreateTodo($input: CreateTodoInput!) {
		createTodo(input: $input) {
			id
			title
			status
		}
	}
`;

export const DELETE_TODO_MUTATION = gql`
	mutation DeleteTodo($id: ID!) {
		deleteTodo(id: $id) {
			title
		}
	}
`;

export const UPDATE_TODO_MUTATION = gql`
	mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
		updateTodo(id: $id, input: $input) {
			id
			title
			status
		}
	}
`;
