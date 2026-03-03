import { Project } from "../types.ts";

export default function (
	{ projects, title = "projects" }: { projects: Project[]; title?: string },
) {
	return (
		<>
			<h2>{title}</h2>
			<div class="grid">
				{projects.map((project) => (
					/* @ts-expect-error */
					<a class="card" href={project.href} target="_blank">
						<div class="project-title">
							<p class="project-title-title">
								<b>{project.owner}</b>
								{"/"}
								{project.title}
							</p>
							<div class="spacer"></div>
							<div
								class="project-dot"
								style={`--color: ${project.languageColor}`}
							>
							</div>
							<p class="project-lang">{project.language}</p>
						</div>
						<hr></hr>
						<p>{project.description}</p>
					</a>
				))}
			</div>
		</>
	);
}
