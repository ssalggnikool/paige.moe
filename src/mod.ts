import { createApp as createRouter } from "@404/imouto";

const router = await createRouter({
	routesDir: "./src/routes",
	staticDir: "./static",
	immutableStatic: true,
	maxAge: 86400,
});

router.serve();
