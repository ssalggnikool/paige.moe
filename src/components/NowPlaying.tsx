import { LastFM } from "../types.ts";

export default function ({ track }: { track: LastFM.Track }) {
	const coverArt = track.image.at(3);
	if (!coverArt) return;
	return (
		<>
			<h2>
				{track["@attr"]?.nowplaying ? "listening to" : "last listened to"}
			</h2>
			{/* @ts-expect-error */}
			<a class="card lastfm-card" href={track.url} target="_blank">
				<img
					src={coverArt["#text"]}
					class="lastfm-art"
					width={70}
					height={70}
				/>
				<div class="lastfm-info">
					<p class="lastfm-title">{track.name}</p>
					<p class="lastfm-artist">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							/* @ts-expect-error */
							width="14"
							/* @ts-expect-error */
							height="14"
							/* @ts-expect-error */
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-microphone-2"
						>
							{/* @ts-expect-error */}
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							{/* @ts-expect-error */}
							<path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
							{/* @ts-expect-error */}
							<path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515" />
						</svg>
						{track.artist["#text"]}
					</p>
					<p class="lastfm-artist">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							/* @ts-expect-error */
							width="14"
							/* @ts-expect-error */
							height="14"
							/* @ts-expect-error */
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-disc"
						>
							{/* @ts-expect-error */}
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							{/* @ts-expect-error */}
							<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
							{/* @ts-expect-error */}
							<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
							{/* @ts-expect-error */}
							<path d="M7 12a5 5 0 0 1 5 -5" />
							{/* @ts-expect-error */}
							<path d="M12 17a5 5 0 0 0 5 -5" />
						</svg>
						{track.album["#text"]}
					</p>
				</div>
				<div class="spacer"></div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="img"
					class="lastfm-logo"
					/* @ts-expect-error */
					width={20}
					/* @ts-expect-error */
					height={20}
					/* @ts-expect-error */
					viewBox="0 0 994.95 1000"
				>
					<path
						/* @ts-expect-error */
						fill="currentColor"
						d="m438.782 715.968l-36.475-99.147s-59.271 66.104-148.153 66.104c-78.648 0-134.487-68.383-134.487-177.795c0-140.18 70.653-190.326 140.184-190.326c100.286 0 132.194 64.96 159.553 148.161l36.475 113.97c36.462 110.543 104.845 199.438 302.008 199.438c141.333 0 237.061-43.304 237.061-157.269c0-92.314-52.433-140.184-150.449-162.98l-72.937-15.954c-50.141-11.396-64.955-31.912-64.955-66.104c0-38.75 30.764-61.545 80.918-61.545c54.704 0 84.332 20.517 88.895 69.522l113.966-13.679c-9.117-102.57-79.774-144.738-196.023-144.738c-102.566 0-202.861 38.75-202.861 162.976c0 77.499 37.61 126.51 132.194 149.301l77.508 18.229c58.122 13.679 77.491 37.61 77.491 70.666c0 42.16-41.025 59.258-118.524 59.258c-115.11 0-162.967-60.402-190.325-143.603l-37.61-113.961C484.378 278.331 408.01 223.627 256.43 223.627C88.9 223.627.001 329.616.001 509.685c0 173.236 88.9 266.685 248.461 266.685c128.767 0 190.321-60.402 190.321-60.402z"
					>
					</path>
				</svg>
			</a>
		</>
	);
}
