export interface Project {
  projectName: string;
  src: string;
  year: string;
  type: string;
  stacks: string[];
  liveLink: string;
}

export interface ProjectCardProp extends Project {
  number: number;
}
