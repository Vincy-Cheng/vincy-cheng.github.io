import { ProjectCardProps } from "../pages/project/ProjectCard";

interface ISideBarMenuItem {
  path: string;
  icon: JSX.Element;
  title: string;
}
interface IProjectInfo extends ProjectCardProps {
  thumbNailPath?: string;
  description: string;
  link: string;
  screenshot: string[];
}

enum ELevel {
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  advanced = 'Advanced',
}

enum ESkillType {
  language = 'Language',
  framework = 'Framework',
  library = 'Library',
  cloudPlatform = 'Cloud Platform',
}

interface IAround {
  year: number;
  type: '<' | '>' | '~';
}

interface ISkillExperienceSet {
  name: string;
  type: ESkillType;
  level: ELevel;
  startTime: Date;
  around: IAround;
}

interface IWorkExperienceSet {
  position: string;
  description: string[];
  company: string;
  startDate: Date;
  endDate: Date;
}

export type { IProjectInfo, ISideBarMenuItem, ISkillExperienceSet, IWorkExperienceSet }

export { ELevel, ESkillType }