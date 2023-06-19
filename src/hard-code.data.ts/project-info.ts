import { IProjectInfo } from '../types';

const webProjects: IProjectInfo[] = [
  {
    name: 'Weathering with Me',
    tags: ['nodejs', 'reactjs', 'expressjs', 'database', 'mongodb', 'aws-ec2'],
    description:
      'This is a team project (6 members) which involves frontend and backend when I was studying at CUHK in CSCI2720. I worked in the backend team. We built a web page that can show the realtime weather details of inserted location. Data is fetched from Weather API. User is required to create an account and login to that account to view the weather.',
    link: 'https://github.com/Vincy-Cheng/CSCI2720-Project',
    screenshot: [],
  },
  {
    name: 'Web shop',
    tags: [
      'javascript',
      'css',
      'html',
      'php',
      'paypal',
      'aws-ec2',
      'cybersecurity',
      'database',
      'sqlite',
    ],
    description:
      'This web page is built when when I was studying at CUHK in IERG4210. It was deployed in AWS to public and using SQLite as database. The web page is mainly built by php and able to defense the XSS attack and csrf attack. Customer can use Paypal for payment.',
    link: 'https://github.com/Vincy-Cheng/IERG4210-Assignment-Web-Shop',
    screenshot: [
      'https://user-images.githubusercontent.com/60846680/160234959-d85b8e9f-63a5-4699-a0dd-b2fa55b8e14e.png',
    ],
  },
];
const appProjects: IProjectInfo[] = [
  {
    name: 'Checking pills app',
    tags: [
      'mobile-app',
      'image-processing',
      'image-recognition',
      'opencv',
      'python',
      'flutter',
      'firebase',
      'web-server',
      'flask',
      'sqlalchemy',
    ],
    description:
      "This Flutter app is my final year project at CUHK. (Group project - 2 people) It is an app that can recognize pill's color,shape and size and reminder user to takes pills periodically. The image recognition is applying OpenCV to achieve the features. Me and my partner have built an web server(by using Flask) for storing the pills', user's and prescription's information. User use the app to fetch those data. Firebase is used for phone authentication. (🫣 Got A grade)",
    link: 'https://github.com/Vincy-Cheng/IERG-3080-Project-Part-1-Pirate-Barrel',
    screenshot: [],
  },
];

const otherProjects: IProjectInfo[] = [
  {
    name: 'A Card Game - Match Match',
    tags: ['game', 'c', 'code-block'],
    description:
      'This game is developed when I was studying at CUHK in ENGG1110.(And my first program 🫣). This game is a very rough "Match Match" card game. User need pair the random placed cards in program. It has 2 modes: Human vs. Computer, Computer vs. Computer.',
    link: 'https://github.com/Vincy-Cheng/A-Card-Game',
    screenshot: [],
  },
  {
    name: 'Pirate Barrel',
    tags: ['game', 'c#', 'oop', 'visual-studio'],
    description:
      'This game is developed when I was studying at CUHK in IERG3080.',
    link: 'https://github.com/Vincy-Cheng/IERG-3080-Project-Part-1-Pirate-Barrel',
    screenshot: [
      'https://user-images.githubusercontent.com/60846680/246719428-b4b7e330-6d65-4e9d-a7fd-cde378bfe4b7.png',
      'https://user-images.githubusercontent.com/60846680/246719863-fee4f550-7dd1-4961-95c5-c79e89508c6e.png',
      'https://user-images.githubusercontent.com/60846680/246719953-9d1b8695-18a0-4d90-a50f-ca4a8c23bf15.png',
      'https://user-images.githubusercontent.com/60846680/246719967-5eae598e-b594-4274-b400-826959132a54.png',
    ],
  },
  {
    name: 'Socket Programming - Testing TCP and UDP',
    tags: ['socket-programming', 'python', 'tcp', 'udp'],
    description:
      'This project is done when I was studying at CUHK in IERG3310. It is used for testing TCP and UDP communication between Robot.py and student.py by using Python.',
    link: 'https://github.com/Vincy-Cheng/IERG3310',
    screenshot: [],
  },
  {
    name: 'Tetris',
    tags: ['game', 'c', 'tetris', 'embedded-system', 'hardware', 'keyboard'],
    description:
      'This game is developed when I was studying at CUHK in IERG3810.(Group project - 2 people) This game is built with ARM, LCD, Keyboard and buttons. Just like the normal Tetris game. Block is falling down and player should try their best to eliminate rows to avoid it reach the top. Player can twist the falling block and change the speed. The game has 3 levels. If player survives the count down, player will be promoted to new level. This project is quite fun.',
    link: 'https://github.com/Vincy-Cheng/Tetris',
    screenshot: [
      'https://user-images.githubusercontent.com/60846680/158050163-f3b5803b-8c2c-40e1-b124-3b2c0e64de33.jpg',
      'https://user-images.githubusercontent.com/60846680/158050174-8daa8654-c639-4798-9a11-0c9d3f97f3f5.jpg',
    ],
  },
];

export { webProjects, appProjects, otherProjects };
