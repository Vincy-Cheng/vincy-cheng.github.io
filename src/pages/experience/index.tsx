import React from 'react';
import { DateTime } from 'luxon';
import Accordion from '../../components/Accordion';

enum Level {
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  advanced = 'Advanced',
}

enum SkillType {
  language,
  framework,
  library,
  cloudPlatform,
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

type Props = {};
const Experience = (props: Props) => {
  return (
    <div className="w-full">
      <div className="dark:text-secondary-50 text-secondary-900 w-full space-y-2">
        <p className="text-lg border-b border-primary-500 font-bold">
          Skill experiences
        </p>

        <Accordion header={'Languages'}>
          <table className="min-w-[600px] w-full table-fixed overflow-auto relative border-separate">
            <tr className="text-left">
              <th className="grow">Language</th>
              <th className="w-[20%]">Level</th>
              <th className="w-[20%]">Start date</th>
              <th className="w-[20%] text">Around year</th>
            </tr>
            {skills
              .filter((skill) => skill.type === SkillType.language)
              .map((skill) => (
                <tr key={skill.name}>
                  <td>{skill.name}</td>
                  <td>{skill.level}</td>
                  <td>
                    {DateTime.fromJSDate(skill.startTime).toFormat(
                      'yyyy-LL-dd',
                    )}
                  </td>
                  <td>
                    {skill.around.type} {skill.around.year}
                  </td>
                </tr>
              ))}
          </table>
        </Accordion>
        <Accordion header={'Frameworks'}>
          <table className="min-w-[600px] table-fixed overflow-auto relative border-separate">
            <tr className="text-left">
              <th className="grow">Language</th>
              <th className="w-[20%]">Level</th>
              <th className="w-[20%]">Start date</th>
              <th className="w-[20%]">Around year</th>
            </tr>
            {skills
              .filter((skill) => skill.type === SkillType.framework)
              .map((skill) => (
                <tr key={skill.name}>
                  <td>{skill.name}</td>
                  <td>{skill.level}</td>
                  <td>
                    {DateTime.fromJSDate(skill.startTime).toFormat(
                      'yyyy-LL-dd',
                    )}
                  </td>
                  <td>
                    {skill.around.type} {skill.around.year}
                  </td>
                </tr>
              ))}
          </table>
        </Accordion>
        <Accordion header={'Cloud Platforms'}>
          <table className="min-w-[600px] table-fixed relative border-separate">
            <tr className="text-left">
              <th className="grow">Cloud Platform</th>
              <th className="max-w-[20%]">Level</th>
              <th className="max-w-[20%]">Start date</th>
              <th className="w-[20%]">Around year</th>
            </tr>
            {skills
              .filter((skill) => skill.type === SkillType.cloudPlatform)
              .map((skill) => (
                <tr key={skill.name}>
                  <td>{skill.name}</td>
                  <td>{skill.level}</td>
                  <td>
                    {DateTime.fromJSDate(skill.startTime).toFormat(
                      'yyyy-LL-dd',
                    )}
                  </td>
                  <td>
                    {skill.around.type} {skill.around.year}
                  </td>
                </tr>
              ))}
          </table>
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
