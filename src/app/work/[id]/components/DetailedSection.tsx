import { SectionContent } from "@/types/project";
import { ArticleBlock } from "./ArticleBlock";
import ProjectSectionHeader from "./ProjectSectionHeader";

export function DetailedSection({ section }: { section: SectionContent }) {
  return (
    <div>
      <ProjectSectionHeader section={section} />
      <div className="flex flex-col gap-15 md:gap-25 mt-20">
        {section.articles.map((article) => (
          <ArticleBlock key={article.id} section={article} />
        ))}
      </div>
    </div>
  );
}
