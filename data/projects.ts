export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  url?: string;
  repository?: string;
  published: boolean;
  images: {
    src: string;
    alt: string;
  }[];
  content: string;
}

export const projects: Project[] = [
  {
    slug: "finbaze",
    title: "Finbaze",
    description: "Finbaze is a platform for financial data aggregation and analysis, providing users with powerful tools to access, visualize, and interpret financial information from multiple sources.",
    date: "2023-07-01",
    url: "https://finbaze.com",
    published: true,
    repository: "chronark/unkey",
    images: [
      {
        src: "/experience_img/finbaze/image_1.png",
        alt: "Finbaze Dashboard Overview"
      },
      {
        src: "/experience_img/finbaze/image_2.png",
        alt: "Finbaze Data Visualization"
      },
      {
        src: "/experience_img/finbaze/image_3.png",
        alt: "Finbaze Analytics Interface"
      },
      {
        src: "/experience_img/finbaze/image_4.png",
        alt: "Finbaze Mobile View"
      }
    ],
    content: "Finbaze is a comprehensive financial data aggregation and analysis platform that empowers users with powerful tools to access, visualize, and interpret financial information from multiple sources. The platform provides real-time data insights, advanced analytics, and intuitive dashboards for financial professionals and enthusiasts alike."
  },
  {
    slug: "woongids_makelaardij",
    title: "Woongids Makelaardij",
    description: "A real estate platform for property listings and management.",
    date: "2023-06-01",
    published: true,
    images: [],
    content: "Woongids Makelaardij is a comprehensive real estate platform designed to streamline property management and enhance the home buying experience."
  },
  {
    slug: "euro_dragon",
    title: "Euro Dragon",
    description: "A gaming platform with advanced features and user management.",
    date: "2023-05-01",
    published: true,
    images: [],
    content: "Euro Dragon is an innovative gaming platform that provides users with an immersive gaming experience and comprehensive user management features."
  },
  {
    slug: "wpflow",
    title: "wpflow",
    description: "Finbaze is a platform for financial data aggregation and analysis, providing users with powerful tools to access, visualize, and interpret financial information from multiple sources.",
    date: "2023-07-01",
    url: "https://wpflow.app",
    published: true,
    repository: "chronark/unkey",
    images: [],
    content: "Unkey is an open source API Key management solution. It allows you to create, manage and validate API Keys for your users. It's built with security and speed in mind."
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects.filter(project => project.published);
} 