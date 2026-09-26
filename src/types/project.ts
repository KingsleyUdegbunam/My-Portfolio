export type ProjectHeader = ProjectData["header"];

export type ProjectMetaProps<K extends keyof ProjectHeader> = {
  type: K;
  content: ProjectHeader[K];
  position?: "left" | "right";
};

export type ProjectSections = ProjectData["sections"];

export type SectionContent = {
  id: string;
  articles: Article[];
};

export type Article = {
  id: string;
  header?: string;
  p: string[];
  image?: string;
};

export type ProjectCardProps = Pick<ProjectData, "id" | "stacks"> &
  Pick<ProjectData["header"], "title" | "year" | "stack" | "type"> & {
    number: number;
  } & {
    src: ProjectData["heroImage"];
  };

export type ProjectData = {
  id: string;
  repo: string;
  liveLink: string;
  stacks: string[];

  header: {
    title: string;
    role: string;
    year: number;
    client?: string;
    context?: string;
    type?: string;
    team?: string;
    contributors?: string;
    stack?: string;
    deliverables?: string;
  };
  summary: string;
  heroImage: string;
  overview?: { id: string; header: string; p1: string; p2?: string };
  sections: {
    overview: Article;
    challenge?: Article;
    direction?: Article;
    experience: {
      id: string;
      articles: Article[];
    };
    engineering: {
      id: string;
      articles: Article[];
    };
    constraints?: Article;
    reflection: Article;
  };
};
