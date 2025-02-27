import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile First Experience",
    description:
      "Our responsive designs ensure a seamless experience on any device, embodying our passion for turning complex challenges into creative solutions.",
  },
  {
    icon: "BadgeCheck",
    title: "Trusted Community",
    description:
      "We’re more than just a service – our community of passionate full-stack developers delivers innovative, proven results you can trust.",
  },
  {
    icon: "Goal",
    title: "User-Centered Design",
    description:
      "We transform intricate problems into intuitive digital experiences that meet your audience's needs and drive engagement.",
  },
  {
    icon: "PictureInPicture",
    title: "Visually Inspiring",
    description:
      "Our designs merge striking visuals with seamless functionality, ensuring your brand stands out with creative impact.",
  },
  {
    icon: "MousePointerClick",
    title: "Engagement-Driven",
    description:
      "Clear calls-to-action and collaborative elements guide users to connect, fostering a dynamic digital community around your brand.",
  },
  {
    icon: "Newspaper",
    title: "Compelling Messaging",
    description:
      "We tell your brand’s story with powerful, creative messaging that resonates and drives innovative project outcomes.",
  },
];


export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
      Why Choose Us?
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        More Than Just a Tool: A Community of Innovators
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We blend innovation, aesthetics, and functionality to create seamless digital experiences.  
        Our user-first approach ensures intuitive, high-performing designs tailored to your brand’s success.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
