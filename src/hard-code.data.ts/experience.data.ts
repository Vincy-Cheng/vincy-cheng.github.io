enum Level {
	beginner = 'Beginner',
	intermediate = 'Intermediate',
	advanced = 'Advanced',
}

enum SkillType {
	language = 'Language',
	framework = 'Framework',
	library = 'Library',
	cloudPlatform = 'Cloud Platform',
}

interface Around {
	year: number;
	type: '<' | '>' | '~';
}

interface SkillExperienceSet {
	name: string;
	type: SkillType;
	level: Level;
	startTime: Date;
	around: Around;
}

interface WorkExperienceSet {
	position: string;
	description: string[];
	company: string;
	startDate: Date;
	endDate: Date;
}

const skills: SkillExperienceSet[] = [
	{
		name: 'TypeScript',
		type: SkillType.language,
		level: Level.intermediate,
		startTime: new Date(2022, 6 - 1, 20),
		around: { year: 1, type: '~' },
	},
	{
		name: 'JavaScript',
		type: SkillType.language,
		level: Level.intermediate,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1.5, type: '~' },
	},
	{
		name: 'HTML',
		type: SkillType.language,
		level: Level.intermediate,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1.5, type: '~' },
	},
	{
		name: 'dart',
		type: SkillType.language,
		level: Level.intermediate,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1, type: '~' },
	},
	{
		name: 'Python',
		type: SkillType.language,
		level: Level.intermediate,
		startTime: new Date(2020, 7 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'php',
		type: SkillType.language,
		level: Level.intermediate,
		startTime: new Date(2022, 1 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'SQL',
		type: SkillType.language,
		level: Level.intermediate,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1, type: '>' },
	},
	{
		name: 'Java',
		type: SkillType.language,
		level: Level.beginner,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'C#',
		type: SkillType.language,
		level: Level.beginner,
		startTime: new Date(2020, 1 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'C',
		type: SkillType.language,
		level: Level.beginner,
		startTime: new Date(2018, 9 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'NestJS',
		type: SkillType.framework,
		level: Level.intermediate,
		startTime: new Date(2022, 6 - 1, 20),
		around: { year: 1, type: '~' },
	},
	{
		name: 'Flutter',
		type: SkillType.framework,
		level: Level.intermediate,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'Tailwind CSS',
		type: SkillType.framework,
		level: Level.intermediate,
		startTime: new Date(2022, 6 - 1, 20),
		around: { year: 1, type: '<' },
	},
	{
		name: 'NextJS',
		type: SkillType.framework,
		level: Level.beginner,
		startTime: new Date(2022, 10 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'Flask',
		type: SkillType.framework,
		level: Level.beginner,
		startTime: new Date(2021, 12 - 1, 20),
		around: { year: 1, type: '<' },
	},
	{
		name: 'Bootstrap',
		type: SkillType.framework,
		level: Level.beginner,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'React Native',
		type: SkillType.framework,
		level: Level.beginner,
		startTime: new Date(2022, 11 - 1, 1),
		around: { year: 0.5, type: '<' },
	},
	{
		name: 'ExpressJS',
		type: SkillType.framework,
		level: Level.beginner,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'ReactJS',
		type: SkillType.library,
		level: Level.intermediate,
		startTime: new Date(2021, 9 - 1, 1),
		around: { year: 1, type: '<' },
	},
	{
		name: 'Material UI',
		type: SkillType.library,
		level: Level.beginner,
		startTime: new Date(2021, 6 - 1, 20),
		around: { year: 1, type: '<' },
	},
	{
		name: 'Google Cloud Platform (GCP)',
		type: SkillType.cloudPlatform,
		level: Level.beginner,
		startTime: new Date(2022, 6 - 1, 20),
		around: { year: 1, type: '<' },
	},
	{
		name: 'Amazon Web Services (AWS)',
		type: SkillType.cloudPlatform,
		level: Level.beginner,
		startTime: new Date(2022, 1 - 1, 1),
		around: { year: 1, type: '<' },
	},
];

const works: WorkExperienceSet[] = [{
	position: 'Solution Developer',
	description: ['Understand client project\'s business logic.', 'Developed different tools for client use and internal use'],
	company: 'Fivestones',
	startDate: new Date('2022-06-20'),
	endDate: new Date()
}]

export { skills, SkillType, works }