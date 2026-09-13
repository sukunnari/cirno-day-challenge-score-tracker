import { Hono } from "hono";

// ======= Management api =======
const MANAGEMENT_PASSWORD = process.env.MANAGE_PASSWORD;
if (!MANAGEMENT_PASSWORD) {
	throw new Error(
		"Please configure these variables in the .env file: MANAGE_PASSWORD",
	);
}

const manageApi = new Hono().basePath(`/api/manage`);

// Middleware for all api below
manageApi.use("/*", async (c, next) => {
	try {
		const headers = c.req.header();
		const password = headers?.["api-password"] || "";

		console.log(password, MANAGEMENT_PASSWORD);

		if (password != MANAGEMENT_PASSWORD) {
			c.status(401);
			return c.json({
				success: false,
				message: "Forbidden",
			});
		}

		await next();
	} catch (error) {
		console.error(error);
		c.status(500);
		return c.json({
			success: false,
			message: "Internal Server Error",
		});
	}
});

manageApi.post("/add-room", async (c) => {
	c.status(200);
	return c.json({
		success: false,
		message: "This does nothing yet, sorry",
	});
});

export { manageApi };
