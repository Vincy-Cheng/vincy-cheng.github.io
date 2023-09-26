import { link } from 'fs';
import { IProjectInfo } from '../types';

const webProjects: IProjectInfo[] = [
  {
    name: 'Weathering with Me',
    tags: ['nodejs', 'reactjs', 'expressjs', 'database', 'mongodb', 'aws-ec2'],
    description:
      'This is a team project (6 members) which involves frontend and backend when I was studying at CUHK in CSCI2720. I worked in the backend team. We built a web page that can show the realtime weather details of inserted location. Data is fetched from Weather API. User is required to create an account and login to that account to view the weather.',
    link: 'https://github.com/Vincy-Cheng/CSCI2720-Project',
    screenshot: [
      'https://user-images.githubusercontent.com/60846680/254144594-5b3f2c21-4d4b-4b6a-b643-0eada146470b.png',
    ],
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
  {
    name: 'Expense Tracker (NestJS & ReactJS)',
    tags: [
      'nodejs',
      'reactjs',
      'nestjs',
      'database',
      'mysql',
      'docker',
      'tailwindcss',
      'typeorm',
    ],
    description:
      'This is expense tracker web application. It is built with NestJS (backend), ReactJS (frontend) and MySQL (database). It had used some popular library like React-Toastify (message alert), dnd-kit (drag and drop), React Query (manage the API calling) and Chart.js. Most of the styling and design are referred to Monny app (https://greamer.com/)',
    link: 'https://github.com/Vincy-Cheng/nestjs-expense-tracker',
    screenshot: [
      'https://user-images.githubusercontent.com/60846680/270617660-82505857-7261-480e-b6c7-6c939f0aa8f0.png',
      'https://user-images.githubusercontent.com/60846680/270618033-65fe3aeb-e03d-4804-a537-5096ff8a5533.png',
      'https://user-images.githubusercontent.com/60846680/270618134-5bdc8b45-05a5-4e2c-a561-b7cfafcb51fe.png',
      'https://user-images.githubusercontent.com/60846680/270618253-19825f3c-cf36-4925-a35e-6e5ef51f3ff9.png',
      'https://user-images.githubusercontent.com/60846680/270618370-11cf1f87-40d3-4f35-8467-0e0fe0720cba.png',
      'https://user-images.githubusercontent.com/60846680/270618622-c724ce8b-57c1-45e6-909d-ab33f3741029.png',
      'https://user-images.githubusercontent.com/60846680/270618698-44bc177a-19cb-4b61-bedf-cd1177e68d74.png',
      'https://user-images.githubusercontent.com/60846680/270618999-a74ab4a2-5a55-47b0-86c8-5ab457791cb5.png',
      'https://user-images.githubusercontent.com/60846680/270618786-2bad23e1-f054-40b9-a081-40ce8943f584.png',
      'https://user-images.githubusercontent.com/60846680/270618877-e3b46ab5-8272-4b00-9e8b-e9411ac1688c.png',
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
      "This Flutter app is my final year project at CUHK. (Group project - 2 members) It is an app that can recognize pill's color,shape and size and reminder user to takes pills periodically. The image recognition is applying OpenCV to achieve the features. Me and my partner have built a web server(by using Flask) to store the pills, users, and prescription information. The app fetches those data when user opens the app. Firebase is used for phone authentication. The web server is used ngrok service to direct the public link to my laptop's private network.",
    link: 'https://github.com/Vincy-Cheng/IEFYP/tree/master',
    screenshot: [
      'https://user-images.githubusercontent.com/60846680/254141249-374e3ad8-4f5f-4ae0-8898-e5fbdd74e653.png',
      'https://user-images.githubusercontent.com/60846680/254141281-d2c5ce4a-b48e-4d72-934d-f76cedc12ce4.png',
      'https://user-images.githubusercontent.com/60846680/254141295-808d76ee-01e6-4dfb-81b7-6f4ec18e3095.png',
      'https://user-images.githubusercontent.com/60846680/254141317-c89eb7ec-e62e-484a-a48c-4d5e9040cc8c.png',
      'https://user-images.githubusercontent.com/60846680/254141346-c9eb4598-5997-4e56-9608-152c4ab789fe.jpg',
    ],
  },
  {
    name: 'Minesweeper',
    tags: [
      'react-native',
      'expo',
      'tailwindcss',
      'google-fonts',
      'redux',
      'ios-app',
      'typescript',
    ],
    description:
      'This Minesweeper is built in React Native by Expo. And used TailwindCss for Styling. I used Redux to store the data to restore the game data after users reopen the app. And I imported Google Font - IBM_Plex_Mono for styling.',
    link: 'https://github.com/Vincy-Cheng/Minesweeper',
    screenshot: [
      'https://user-images.githubusercontent.com/60846680/255813748-5ffe1041-7160-450d-b18b-5e01b2a3d083.png',
      'https://user-images.githubusercontent.com/60846680/255815426-ef4ce571-da38-4293-a351-e793bd55cfa6.png',
      'https://user-images.githubusercontent.com/60846680/255815919-eb5ec710-0d2d-42ee-a158-2fa923f3871e.png',
      'https://user-images.githubusercontent.com/60846680/255815045-177eca9c-b26d-42bd-8923-eae17be425a3.png',
      'https://user-images.githubusercontent.com/60846680/255815312-8cb358e2-9c39-4c22-9b7f-474e5273b946.png',
      'https://user-images.githubusercontent.com/60846680/255815602-463f09ca-5a1a-4647-b93a-369d6273efb2.png',
    ],
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
