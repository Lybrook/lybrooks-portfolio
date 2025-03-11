import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  image: string;
  title: string;
  github: string;
  liveDemo?: string;
  description: string;
  details: string[];
}

const projectList: ProjectProps[] = [
  {
    image: "/Eventify1.jpeg",
    title: "Eventify",
    github: "https://github.comirineCKimeto/GROUP-5",
    liveDemo: "https://group-5-git-main-irine-kimetos-projects.vercel.app/",
    description:
      "An event management and ticketing platform where users can create and manage events and attendees can browse, register, and purchase tickets for events.",
    details: [
      "Designed and implemented a full-stack app using Python, Flask, JavaScript, React, and Tailwind",
      "Developed RESTful APIs for management, ensuring seamless data retrieval and updates.",
      "Integrated PostgreSQL for structured data storage and implemented CRUD operations for tracking.",
      "Deployed the backend on Render and the frontend on Vercel for scalability and performance",
    ],
  },
  {
    image: "/furniture1.jpeg",
    title: "Furniture Inventory",
    github: "https://github.com/Lybrook",
    liveDemo: "https://e-commerce-furniture-six.vercel.app/",
    description:
      "Web Application to save built furniture built and available in stock that can be presented to clients to view.",
    details: [
      "Designed and implemented full stack app using Python, Flask, JavaScript, React and Tailwind.",
      "Developed RESTful APIs for inventory management, ensuring seamless data retrieval and updates.",
      "Integrated SQLite for structured data storage and implemented CRUD operations for inventory tracking.",
      "Deployed the backend on Render and the frontend on Vercel for scalability and performance.",
    ],
  },
  {
    image: "/Kosala1.jpeg",
    title: "Furniture Website",
    github: "https://github.com/Lybrook/furniture",
    liveDemo: "https://kosalas.vercel.app/",
    description:
      "Web application for contacting a carpenter, showcasing completed projects, and displaying company details.",
    details: [
      "Designed and implemented the application using JavaScript, React, and Tailwind CSS for a modern UI/UX.",
      "Implemented lazy loading and React Suspense for optimized route-based code splitting and seamless transitions.",
      "Utilized the agile development lifecycle to plan, iterate, and refine workflows.",
    ],
  },
  {
    image: "/Pet1.jpeg",
    title: "Pet Adoption",
    github: "https://github.com/Lybrook/Pet-Adoption-App",
    liveDemo: "https://pet-adoption-app-seven.vercel.app/",
    description:
      "Web application for adopting a pet where a user can add to favorites a pet that he wants, and can edit and delete a pet",
    details: [
      "Designed and implemented the application using JavaScript, React, and CSS for a modern UI/UX.",
      "Utilized the agile development lifecycle to plan, iterate, and refine workflows.",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id='projects' className='container py-24 sm:py-32'>
      <div className='grid lg:grid-cols-1 place-items-center lg:gap-24'>
        <div>
          <h2 className='text-lg text-primary mb-2 tracking-wider'>
            Technical Projects
          </h2>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Showcasing My Work
          </h2>
          <p className='text-xl text-muted-foreground mb-8'>
            Here are some of the technical projects I have worked on,
            demonstrating my skills and expertise in various technologies.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 w-full'>
          {projectList.map(
            (
              { image, title, github, liveDemo, description, details },
              index
            ) => (
              <Card
                key={title}
                className='bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number'
              >
                <CardHeader>
                  <div className='flex justify-between items-center'>
                    <Image
                      src={image}
                      alt={title}
                      width={128}
                      height={128}
                      className='w-32 h-32 object-cover mb-6'
                    />
                    <span className='text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30'>
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className='text-muted-foreground'>
                  <p>{description}</p>
                  <ul className='list-disc pl-5 mt-2'>
                    {details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div className='mt-4'>
                    <a
                      href={github}
                      className='text-primary mr-4'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      GitHub
                    </a>
                    {liveDemo && (
                      <a
                        href={liveDemo}
                        className='text-primary'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
