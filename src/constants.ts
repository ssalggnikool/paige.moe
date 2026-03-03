import { Friend, Link, Project } from "./types.ts";

export const LINKS: Link[] = [
	{ title: "codeberg", href: "https://codeberg.org/paige" },
	{ title: "github", href: "https://github.com/paigely" },
	{ title: "last.fm", href: "https://www.last.fm/user/ohmaigotto" },
];

export const PROJECTS: Project[] = [
	{
		owner: "paige",
		title: "Navic",
		description:
			"Navidrome client app for Android and iOS with Material 3 Expressive design",
		href: "https://github.com/paigely/Navic",
		language: "Kotlin",
		languageColor: "#6942cd",
	},
	{
		owner: "paige",
		title: "Cobu",
		description: "Very WIP iOS Forgejo client, built entirely with UIKit",
		href: "https://github.com/paigely/Cobu",
		language: "Swift",
		languageColor: "#f05138",
	},
	{
		owner: "paige",
		title: "RevertHUD",
		description: "Bring back the pre-tahoe volume HUD",
		href: "https://github.com/paigely/RevertHUD",
		language: "Swift",
		languageColor: "#f05138",
	},
	{
		owner: "paige",
		title: "maize.moe",
		description: "This site",
		href: "https://github.com/paigely/maize.moe",
		language: "TypeScript",
		languageColor: "#3178c6",
	},
];

export const MISC_PROJECTS: Project[] = [
	{
		owner: "claration",
		title: "Impactor",
		description:
			"WIP feature rich iOS/tvOS sideloading application written in Rust.",
		href: "https://github.com/claration/Impactor",
		language: "Rust",
		languageColor: "#dea584",
	},
	{
		owner: "Vendicated",
		title: "Vencord",
		description: "The cutest Discord modification",
		href: "https://github.com/Vendicated/Vencord",
		language: "TypeScript",
		languageColor: "#3178c6",
	},
];

export const FRIENDS: Friend[] = [
	{
		href: "",
		image: "/88x31.gif",
		title: "me",
	},
	{
		href: "https://osage.dev",
		image: "/badges/omar.gif",
		title: "omar",
	},
	"livia",
	{
		href: "https://khcrysalis.dev",
		image: "https://khcrysalis.dev/88x31/me.png",
		title: "samara",
	},
	{
		href: "https://mugman.tech",
		image: "https://mugman.tech/88x31/me.gif",
		title: "mugman",
	},
	{
		href: "https://caitlyn.moe",
		image: "https://caitlyn.moe/88x31.png",
		title: "caitlyn",
	},
	{
		href: "https://hhls.xyz",
		image: "https://rushii.dev/88x31/hhls.png",
		title: "nekohaxx",
	},
	{
		href: "https://elissa.moe",
		image: "https://elissa.moe/88x31.png",
		title: "elissa",
	},
	{
		href: "https://rushii.dev",
		image: "https://rushii.dev/88x31/rushii.webp",
		title: "rushii",
	},
	{
		href: "https://github.com/acquitelol",
		image: "https://rushii.dev/88x31/rosie.png",
		title: "rosie",
	},
	{
		href: "https://vendicated.dev/",
		image: "https://vendicated.dev/assets/88x31/me.gif",
		title: "vendicated",
	},
	{
		href: "https://uncutified.moe/",
		image: "https://uncutified.moe/88x31.gif",
		title: "recutified",
	},
	{
		href: "https://worf.win/",
		image: "https://worf.win/images/worfwin.gif",
		title: "wrof",
	},
	{
		href: "https://sadan.zip",
		image: "https://sadan.zip/assets/88x31.png",
		title: "sadan",
	},
	{
		href: "https://zt64.dev",
		image: "/badges/zt.png",
		title: "zeet",
	},
	{
		href: "https://wingio.xyz/",
		image: "https://rushii.dev/88x31/wing.gif",
		title: "wing",
	},
	{
		href: "https://lumina0machina.github.io/",
		image: "https://lumina0machina.github.io/88x31.png",
		title: "lumina",
	},
	{
		href: "https://faf4a.me/",
		image: "https://faf4a.me/88x31.png",
		title: "fafa",
	},
];
