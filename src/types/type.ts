import { PrismaClient } from '@prisma/client';

export interface Context {
	prisma: PrismaClient;
}

export interface TodoType {
	id: string;
	title: string;
	status: 'incomplete' | 'completed' | 'inprogress';
}

export interface UserInput {
	title: string;
	status: string;
}
