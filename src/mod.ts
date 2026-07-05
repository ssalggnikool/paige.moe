import { createApp as createRouter } from "@404/imouto";

const router = await createRouter({
	routesDir: "./src/routes",
	staticDir: "./static",
	immutableStatic: true,
	maxAge: 86400,
});

router.serve();

router.get("/88x31", (ctx) => ctx.redirect("/88x31.gif"));
router.get("/88x31.png", (ctx) => ctx.redirect("/88x31.gif"));
router.get("/88x31.webp", (ctx) => ctx.redirect("/88x31.gif"));
router.get("/88x31.jpg", (ctx) => ctx.redirect("/88x31.gif"));
router.get("/88x31.jpeg", (ctx) => ctx.redirect("/88x31.gif"));
