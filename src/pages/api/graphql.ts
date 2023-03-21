import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '@/graphql/schema/type-defs';
import resolvers from '@/graphql/schema/resolvers';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: { prisma },
});

const startServer = apolloServer.start();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://studio.apollographql.com'
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	if (req.method === 'OPTIONS') {
		res.end();
		return false;
	}

	await startServer;
	await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = {
	api: {
		bodyParser: false,
	},
};
