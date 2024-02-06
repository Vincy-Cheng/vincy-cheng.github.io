import {
  ELevel,
  ISkillExperienceSet,
  ESkillType,
  IWorkExperienceSet,
} from '../types';

const skills: ISkillExperienceSet[] = [
  {
    name: 'TypeScript',
    type: ESkillType.language,
    level: ELevel.intermediate,
    startTime: new Date(2022, 6 - 1, 20),
    around: { year: 1.5, type: '~' },
  },
  {
    name: 'JavaScript',
    type: ESkillType.language,
    level: ELevel.intermediate,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1.5, type: '~' },
  },
  {
    name: 'HTML',
    type: ESkillType.language,
    level: ELevel.intermediate,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1.5, type: '~' },
  },
  {
    name: 'dart',
    type: ESkillType.language,
    level: ELevel.intermediate,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1, type: '~' },
  },
  {
    name: 'Python',
    type: ESkillType.language,
    level: ELevel.intermediate,
    startTime: new Date(2020, 7 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'php',
    type: ESkillType.language,
    level: ELevel.intermediate,
    startTime: new Date(2022, 1 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'SQL',
    type: ESkillType.language,
    level: ELevel.intermediate,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1, type: '>' },
  },
  {
    name: 'Java',
    type: ESkillType.language,
    level: ELevel.beginner,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'C#',
    type: ESkillType.language,
    level: ELevel.beginner,
    startTime: new Date(2020, 1 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'C',
    type: ESkillType.language,
    level: ELevel.beginner,
    startTime: new Date(2018, 9 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'NestJS',
    type: ESkillType.framework,
    level: ELevel.intermediate,
    startTime: new Date(2022, 6 - 1, 20),
    around: { year: 1, type: '~' },
  },
  {
    name: 'Flutter',
    type: ESkillType.framework,
    level: ELevel.intermediate,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'Tailwind CSS',
    type: ESkillType.framework,
    level: ELevel.intermediate,
    startTime: new Date(2022, 6 - 1, 20),
    around: { year: 1, type: '~' },
  },
  {
    name: 'NextJS',
    type: ESkillType.framework,
    level: ELevel.beginner,
    startTime: new Date(2022, 10 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'Flask',
    type: ESkillType.framework,
    level: ELevel.beginner,
    startTime: new Date(2021, 12 - 1, 20),
    around: { year: 1, type: '<' },
  },
  {
    name: 'Bootstrap',
    type: ESkillType.framework,
    level: ELevel.beginner,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'React Native',
    type: ESkillType.framework,
    level: ELevel.beginner,
    startTime: new Date(2022, 11 - 1, 1),
    around: { year: 0.5, type: '<' },
  },
  {
    name: 'ExpressJS',
    type: ESkillType.framework,
    level: ELevel.beginner,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'ReactJS',
    type: ESkillType.library,
    level: ELevel.intermediate,
    startTime: new Date(2021, 9 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'Material UI',
    type: ESkillType.library,
    level: ELevel.beginner,
    startTime: new Date(2021, 6 - 1, 20),
    around: { year: 1, type: '<' },
  },
  {
    name: 'Google Cloud Platform (GCP)',
    type: ESkillType.cloudPlatform,
    level: ELevel.beginner,
    startTime: new Date(2022, 6 - 1, 20),
    around: { year: 1, type: '<' },
  },
  {
    name: 'Amazon Web Services (AWS)',
    type: ESkillType.cloudPlatform,
    level: ELevel.beginner,
    startTime: new Date(2022, 1 - 1, 1),
    around: { year: 1, type: '<' },
  },
  {
    name: 'Swift',
    type: ESkillType.language,
    level: ELevel.beginner,
    startTime: new Date(2023, 12 - 1, 1),
    around: { year: 1, type: '<' },
  },
];

const works: IWorkExperienceSet[] = [
  {
    position: 'Solution Developer',
    description: [
      "Understand client project's business logic.",
      'Developed different tools and proprietary system based on NestJS for client use and internal use',
      'Troubleshoot, debug and upgrade existing applications',
    ],
    company: 'Fivestones',
    startDate: new Date('2022-06-20'),
    endDate: new Date(),
    tags: [
      'TypeScript',
      'NestJS',
      'ReactJS',
      'Node.js',
      'GCP',
      'GAE',
      'Cloud Function',
      'Cloud Run',
      'GMP',
      'APIs',
    ],
  },
];

export { skills, works };
