export interface ProjectBaseArray {
  projectName: string;
  src: string;
  year: string;
  stacks: string[];
  liveLink: string;
}

export interface ProjectCardProp extends ProjectBaseArray {
  number: number;
}
