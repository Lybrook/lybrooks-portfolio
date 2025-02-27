import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Custom Domain Integration",
    description:
      "Elevate your online identity with tailored domain solutions that capture your brand’s essence.",
    pro: ProService.NO,
  },
  {
    title: "Social Media Integrations",
    description:
      "Effortlessly connect with your audience through seamless social media integrations that boost engagement.",
    pro: ProService.NO,
  },
  {
    title: "Email Marketing Integrations",
    description:
      "Enhance your outreach with powerful email marketing tools that nurture relationships and drive results.",
    pro: ProService.NO,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your digital visibility with advanced SEO strategies designed to attract and retain traffic.",
    pro: ProService.YES,
  },
  {
    title: "Responsive Web Development",
    description:
      "Craft dynamic, responsive websites that merge sleek design with robust functionality to captivate users.",
    pro: ProService.YES,
  },
  {
    title: "Custom API Development",
    description:
      "Develop scalable, secure APIs that seamlessly integrate your systems and power your business processes.",
    pro: ProService.YES,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Launch secure, high-performing e-commerce platforms that streamline transactions and drive online sales.",
    pro: ProService.YES,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Our Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Full-Stack Web Development Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative p-4"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute top-2 right-2 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
