import z from "zod";

const envClientSchema = z.object({
	BASE_API_URL: z.string().url(),
});

const envServerSchema = z.object({
	BASE_API_URL: z.string().url(),
});

const envClientObj = {
	BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
};

const envServerObj = {
	BASE_API_URL: process.env.BASE_API_URL,
};

export const env = {
	client: envClientSchema.parse(envClientObj),
	server: envServerSchema.parse(envServerObj),
};
