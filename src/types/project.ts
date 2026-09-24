export type SectionContent = {
  id: string;
  header?: string;
  p1: string;
  p2?: string;
  image?: string;
  bgColor?: string;
};

export type ProjectData = {
  id: string;
  repo: string;
  liveLink: string;

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
    overview: SectionContent;
    challenge?: SectionContent;
    direction?: SectionContent;
    experience: {
      id: string;
      article1: SectionContent;
      article2?: SectionContent;
      article3?: SectionContent;
      article4?: SectionContent;
    };
    engineering: {
      id: string;
      article1: SectionContent;
      article2?: SectionContent;
      article3?: SectionContent;
      article4?: SectionContent;
      article5?: SectionContent;
    };
    constraints?: SectionContent;
    reflection: SectionContent;
  };
};
