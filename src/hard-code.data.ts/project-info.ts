import { ProjectCardProps } from "../pages/project/ProjectCard";


export interface IProjectInfo extends ProjectCardProps {
	thumbNailPath?: string;
	description: string;
	link: string;
	screenshot: string[];
}



const webProjects: IProjectInfo[] = [{
	name: 'Weathering with Me',
	tags: ['nodejs', 'reactjs', 'expressjs', 'database', 'mongodb', 'aws-ec2'],
	description: 'This is a team project (6 members) which involves frontend and backend when I was studying at CUHK in CSCI2720. I worked in the backend team. We built a web page that can show the realtime weather details of inserted location. Data is fetched from Weather API. User is required to create an account and login to that account to view the weather.',
	link: 'https://github.com/Vincy-Cheng/CSCI2720-Project',
	screenshot: []
},
{
	name: 'Web shop',
	tags: ['javascript', 'css', 'html', 'php', 'paypal', 'aws-ec2', 'cybersecurity', 'database', 'sqlite'],
	description: 'This web page is built when when I was studying at CUHK in IERG4210. It was deployed in AWS to public and using SQLite as database. The web page is mainly built by php and able to defense the XSS attack and csrf attack. Customer can use Paypal for payment.',
	link: 'https://github.com/Vincy-Cheng/IERG4210-Assignment-Web-Shop',
	screenshot: ['https://user-images.githubusercontent.com/60846680/160234959-d85b8e9f-63a5-4699-a0dd-b2fa55b8e14e.png']
},
]
const appProjects: IProjectInfo[] = [{
	name: 'Checking pills app',
	tags: ['mobile-app', 'image-processing', 'image-recognition', 'opencv', 'python', 'flutter', 'firebase', 'web-server', 'flask', 'sqlalchemy'],
	description: 'This Flutter app is my final year project at CUHK. It is an app that can recognize pill\'s color,shape and size and reminder user to takes pills periodically. The image recognition is applying OpenCV to achieve the features. Me and my partner have built an web server(by using Flask) for storing the pills\', user\'s and prescription\'s information. User use the app to fetch those data. Firebase is used for phone authentication. (🫣 Got A grade)',
	link: 'https://github.com/Vincy-Cheng/IERG-3080-Project-Part-1-Pirate-Barrel',
	screenshot: []
},]

const otherProjects: IProjectInfo[] = [{
	name: 'A Card Game - Match Match',
	tags: ['game', 'c', 'code-block'],
	description: 'This game is developed when I was studying at CUHK in ENGG1110.(And my first program 🫣). This game is a very rough "Match Match" card game. User need pair the random placed cards in program. It has 2 modes: Human vs. Computer, Computer vs. Computer.',
	link: 'https://github.com/Vincy-Cheng/A-Card-Game',
	screenshot: []
}, {
	name: 'Pirate Barrel',
	tags: ['game', 'c#', 'oop', 'visual-studio'],
	description: 'This game is developed when I was studying at CUHK in IERG3080.',
	link: 'https://github.com/Vincy-Cheng/IERG-3080-Project-Part-1-Pirate-Barrel',
	screenshot: []
}, {
	name: 'Socket Programming - Testing TCP and UDP',
	tags: ['socket-programming', 'python', 'tcp', 'udp'],
	description: 'This project is done when I was studying at CUHK in IERG3310. It is used for testing TCP and UDP communication between Robot.py and student.py by using Python.',
	link: 'https://github.com/Vincy-Cheng/IERG3310',
	screenshot: []
}]

export { webProjects, appProjects, otherProjects }
