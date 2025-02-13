import type {ProjectProps} from "~/components/project";
import levenshtein from "js-levenshtein";

export function search(prompt: string, projects: ProjectProps[]) {
    const weightMap = new Map<ProjectProps, number>();
    projects.forEach(project => {
        let distance = 0;
        distance += levenshtein(prompt, project.name) - project.name.length;
        distance += levenshtein(prompt, project.role) - project.role.length;
        let toolsDistance = 0
        let tools = 0;
        project.tools.forEach(tool => {
            toolsDistance += levenshtein(prompt, tool.name);
            tools++;
        })
        distance += toolsDistance / tools;
        weightMap.set(project, distance)
    })

    return [...weightMap.entries()].sort((a, b) => a[1] - b[1]).map(it => it[0]);
}

function searchTitle() {

}