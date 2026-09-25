export type SectionContent = {
  id: string;
  article1: Article;
  article2?: Article;
  article3?: Article;
  article4?: Article;
  article5?: Article;
};

export type Article = {
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
    overview: Article;
    challenge?: Article;
    direction?: Article;
    experience: {
      id: string;
      article1: Article;
      article2?: Article;
      article3?: Article;
      article4?: Article;
    };
    engineering: {
      id: string;
      article1: Article;
      article2?: Article;
      article3?: Article;
      article4?: Article;
      article5?: Article;
    };
    constraints?: Article;
    reflection: Article;
  };
};
