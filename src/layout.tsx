import { JSX } from "@july/snarl";
import { theme } from "./theme.ts";
import { css, Head, ScopedStyleSheet } from "@404/imouto";

export interface LayoutProps {
	children?: JSX.Element | JSX.Element[];
	scope: ScopedStyleSheet;
	class?: string;
}

const styles = css`
	* {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		font-family: ${theme.fontPrimary};
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	html {
		font-family: ${theme.fontPrimary};
		background-color: ${theme.bgPrimary};
		color: ${theme.fg};
		color-scheme: dark;
		overflow-x: hidden;
	}

	body {
		margin: 0;
		overflow-x: hidden;
	}

	a {
		cursor: pointer;
		text-decoration: none;
		color: ${theme.fg};
	}

	a:not(.button):not(.card),
	a:not(.button):not(.card):visited {
		color: ${theme.accent400};
		font-weight: 600;
	}

	a:not(.button):not(.card):hover {
		text-decoration: underline;
	}

	button,
	.button {
		background-color: ${theme.bgSecondary};
		color: ${theme.fg};
		border: 0.5px solid ${theme.bgTertiary};
		-moz-border-radius: ${theme.roundFull};
		-khtml-border-radius: ${theme.roundFull};
		-webkit-border-radius: ${theme.roundFull};
		border-radius: ${theme.roundFull};
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 11.2px;
		padding-bottom: 11.2px;
		cursor: pointer;
		margin-top: 16px;
		margin-right: 8px;
		display: block;
		text-align: center;
	}

	button.prominent,
	.button.prominent {
		border-color: ${theme.accent300};
		background-color: ${theme.accent400};
		color: ${theme.bgPrimary};
		font-weight: 600;
	}

	hr {
		border: none;
		background-color: ${theme.bgTertiary};
		height: 1px;
		margin-top: 16px;
		margin-bottom: 0;
	}

	.card {
		-moz-border-radius: ${theme.roundMedium};
		-khtml-border-radius: ${theme.roundMedium};
		-webkit-border-radius: ${theme.roundMedium};
		border-radius: ${theme.roundMedium};
		padding-left: 16px;
		padding-right: 16px;
		padding-bottom: 16px;
		background-color: ${theme.bgSecondary};
		border: 1px solid ${theme.bgTertiary};
		margin-top: 0rem;
		-webkit-transition: background-color .1s, border-color .1s;
		-o-transition: background-color .1s, border-color .1s;
		transition: background-color .1s, border-color .1s;
		display: block;
	}

	.card hr {
		margin-left: -16px;
		margin-right: -16px;
	}

	a.card:hover {
		background-color: ${theme.bgTertiary};
		border-color: ${theme.bgQuaternary};
	}

	a.card hr {
		-webkit-transition: background-color .1s;
		-o-transition: background-color .1s;
		transition: background-color .1s;
	}

	a.card:hover hr {
		background-color: ${theme.bgQuaternary};
	}

	::selection {
		background-color: ${theme.accent400};
		color: ${theme.bgPrimary};
	}

	::-moz-selection {
		background-color: ${theme.accent400};
		color: ${theme.bgPrimary};
	}

	p,
	b {
		margin-bottom: 0;
		margin-top: 16px;
		font-size: 14px;
	}

	h1 {
		margin-top: 16px;
		margin-bottom: 0;
		font-size: 24px;
	}

	h2 {
		margin-top: 28px;
		margin-bottom: 16px;
		font-weight: 600;
		font-style: italic;
		font-size: 16px;
	}

	table {
		width: 100%;
		table-layout: fixed;
		border-collapse: separate;
		border-spacing: 0;
	}

	td {
		vertical-align: top;
	}

	tr td {
		padding-left: 4px;
		padding-bottom: 8px;
	}

	tr td:first-child {
		padding-left: 0px;
		padding-right: 4px;
	}

	@media (max-width: 600px) {
		table {
			display: block !important;
			width: 100% !important;
		}
		tbody {
			display: block !important;
			width: 100% !important;
		}
		td {
			display: block !important;
			width: 100% !important;
			margin-bottom: 10px !important;
			padding-left: 0 !important;
			padding-right: 0 !important;
			padding-bottom: 0 !important;
		}
		tr {
			display: block !important;
			width: 100% !important;
		}
	}

	footer {
		margin-left: auto;
		margin-right: auto;
		width: -webkit-fit-content;
		width: -moz-fit-content;
		width: fit-content;
	}

	footer sub {
		font-weight: 600;
		color: ${theme.fgTertiary};
	}

	footer sub a {
		color: ${theme.fgTertiary} !important;
		text-decoration: underline;
	}

	center.content {
		text-align: start;
		padding-left: 16px;
		padding-right: 16px;
		margin-left: auto;
		margin-right: auto;
		max-width: 864px;
		padding-top: 48px;
	}
`;

export default (
	{ scope, children, class: className }: LayoutProps,
) => {
	children;
	return (
		<styles.html lang="en">
			<Head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>/peɪd͡ʒ/</title>
				<link rel="stylesheet" href="/iosevka-custom/import.css" />
				<link rel="stylesheet" href="/fontello/import.css" />
			</Head>
			<scope.body class={className}>
				{/* @ts-ignore */}
				<center class="content">
					<main>
						{children}
					</main>
					{/* @ts-ignore */}
				</center>
			</scope.body>
		</styles.html>
	);
};
