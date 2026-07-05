import { css } from "@404/imouto";
import Footer from "../components/footer.tsx";
import Friends from "../components/friends.tsx";
import Links from "../components/links.tsx";
import NowPlaying from "../components/now-playing.tsx";
import Projects from "../components/projects.tsx";
import { FRIENDS, LINKS, MISC_PROJECTS, PROJECTS } from "../constants.ts";
import Layout from "../layout.tsx";
import { theme } from "../theme.ts";
import { LastFM } from "../types.ts";

const getTrack: () => Promise<LastFM.Track | undefined> = async () => {
	const params = new URLSearchParams({
		method: "user.getrecenttracks",
		user: "ohmaigotto",
		format: "json",
		api_key: Deno.env.get("LASTFM_TOKEN")!,
		limit: "1",
	});
	const track = (
		(await (
			await fetch(`https://ws.audioscrobbler.com/2.0/?${params}`)
		).json()) as LastFM.RecentTracksResponse | null
	)?.recenttracks?.track?.at(0);
	return track;
};

const Styled = css`
	.lastfm-card {
		display: table;
		width: 100%;
		border-collapse: separate;
		padding-top: 16px;
		margin-right: 0;
		position: relative;
	}

	.lastfm-art-container {
		display: table-cell;
		vertical-align: top;
		width: 1px;
	}

	.lastfm-art {
		display: block;
		-webkit-border-radius: ${theme.roundSmall};
		border-radius: ${theme.roundSmall};
		width: 70px;
		height: 70px;
	}

	.lastfm-info {
		display: table-cell;
		vertical-align: middle;
		text-align: left;
		padding-left: 12px;
	}

	.lastfm-title,
	.lastfm-artist,
	.lastfm-status {
		margin: 0;
		padding: 0;
		line-height: 1.2;
	}

	.lastfm-info * {
		vertical-align: middle;
	}

	.lastfm-info .icon {
		margin-right: 4px;
		width: 14px;
		height: 14px !important;
		vertical-align: middle !important;
	}

	.lastfm-title {
		font-weight: 600;
		font-size: 1.25rem;
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.project-card {
		position: relative;
		overflow: clip;
	}

	.project-title {
		display: block;
		padding-top: 16px;
	}

	.project-title * {
		display: inline;
	}

	.project-title-left {
		margin-top: 0;
		font-weight: 500;
	}

	.project-title-right {
		float: right;
	}

	.project-lang {
		display: inline;
		vertical-align: middle;
	}

	.project-dot {
		-moz-border-radius: ${theme.roundFull};
		-khtml-border-radius: ${theme.roundFull};
		-webkit-border-radius: ${theme.roundFull};
		border-radius: ${theme.roundFull};
		width: 12px;
		height: 12px;
		margin-right: 4.8px;
		display: inline-block;
		vertical-align: middle;
	}

	.friends {
		width: 100%;
	}

	.friend {
		image-rendering: -moz-crisp-edges;
		image-rendering: pixelated;
		margin-right: 5px;
	}
`;

export default async () => {
	return (
		<Layout scope={Styled}>
			<h1>/peɪd͡ʒ/</h1>
			<p>meow</p>
			<NowPlaying track={await getTrack()} />
			<Projects title="main projects" projects={PROJECTS} />
			<Projects title="other things i've worked on" projects={MISC_PROJECTS} />
			<Friends friends={FRIENDS} />
			<Links links={LINKS} />
			<Footer />
		</Layout>
	);
};
