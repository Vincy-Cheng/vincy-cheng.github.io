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
	tags: ['game', 'c#', 'oop', 'visual-studio'],
	description: 'This game is developed when I was studying at CUHK in IERG3080.',
	link: 'https://github.com/Vincy-Cheng/IERG-3080-Project-Part-1-Pirate-Barrel'
}, {
	name: 'Socket Programming - Testing TCP and UDP',
	tags: ['socket-programming', 'Python', 'TCP', 'UDP'],
	description: 'This project is done when I was studying at CUHK in IERG3310. It is used for testing TCP and UDP communication between Robot.py and student.py by using Python.',
	link: 'https://github.com/Vincy-Cheng/IERG3310'
}]

export { webProjects, appProjects, otherProjects }
