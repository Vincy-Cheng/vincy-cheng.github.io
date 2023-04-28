import { ProjectCardProps } from "./ProjectCard";


interface IProjectInfo extends ProjectCardProps {
	thumbNailPath?: string;
	description: string;
	link: string;
	screenshot?: string;
}



const webProjects: IProjectInfo[] = []
const appProjects: IProjectInfo[] = []

const otherProjects: IProjectInfo[] = [{
	name: 'Pirate Barrel',
	tags: ['game', 'c#', 'oop', 'visualStudio'],
	description: 'This game is developed when I was studying at CUHK in IERG3080.',
	link: 'https://github.com/Vincy-Cheng/IERG-3080-Project-Part-1-Pirate-Barrel'
}]

export { webProjects, appProjects, otherProjects }
