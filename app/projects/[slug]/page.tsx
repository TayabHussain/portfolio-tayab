import { notFound } from "next/navigation";
import { getProject } from "../../../data/projects";
import { Header } from "./header";
import { Carousel } from "../../components/carousel";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects = [
    { slug: "finbaze" },
    { slug: "woongids_makelaardij" },
    { slug: "euro_dragon" },
    { slug: "wpflow" }
  ];
  return projects;
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
      <article className="px-4 py-12 mx-auto max-w-4xl">
        {/* Carousel for project images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <Carousel images={project.images} />
          </div>
        )}
        
        {/* Project content */}
        <div className="prose prose-zinc prose-quoteless max-w-none">
          <p className="text-lg leading-8 text-zinc-600">
            {project.content}
          </p>
        </div>
      </article>
    </div>
  );
}
