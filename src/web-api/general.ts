import { Hono } from "hono";

const generalApi = new Hono().basePath("/api");

generalApi.get("/", (c) => {
	return c.text("Hello.");
});

export { generalApi };
