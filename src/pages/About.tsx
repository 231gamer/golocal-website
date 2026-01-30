import { Link } from "react-router-dom";
import { Target, Sprout, Users, Globe } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

const values = [
  {
    icon: Sprout,
    title: "Local Sourcing",
    description: "We source all our ingredients from Liberian farmers, ensuring freshness and supporting local agriculture.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "We create jobs and opportunities for vulnerable communities across Liberia.",
  },
  {
    icon: Target,
    title: "Quality Standards",
    description: "Every product meets strict hygiene and quality standards for your family's safety.",
  },
  {
    icon: Globe,
    title: "Sustainable Impact",
    description: "We're building a sustainable food system that benefits both people and the environment.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              About GoLocal
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              The people behind KS Gari Cereal
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Who We Are
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                GoLocal is a Liberian company dedicated to producing nutritious, 
                locally-made food products that support our communities. We believe 
                that quality nutrition should be accessible to everyone, and that 
                food production should benefit local farmers and workers.
              </p>
              
              <h2 className="mt-12 font-display text-2xl font-bold text-foreground md:text-3xl">
                Why We Created KS Gari Cereal
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We saw a need for convenient, nutritious food options that families 
                could afford. Many imported cereals are expensive and don't use local 
                ingredients. KS Gari Cereal was created to fill this gap — providing 
                a ready-to-eat, wholesome meal made entirely from Liberian ingredients.
              </p>
              
              <h2 className="mt-12 font-display text-2xl font-bold text-foreground md:text-3xl">
                Our Commitment
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We are committed to local sourcing and production. Every ingredient 
                in KS Gari Cereal — the cassava, peanuts, and coconut — comes from 
                Liberian farms. This creates fair income for farmers and keeps money 
                circulating in our local economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="What Drives Us"
            subtitle="Our core values guide everything we do"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              We envision a Liberia where nutritious, locally-produced food is 
              available to everyone. Where farmers earn fair wages for their work. 
              Where communities thrive because food production happens right here, 
              not overseas. KS Gari Cereal is just the beginning of this journey 
              toward food security and community development.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Partner With Us"
              subtitle="Interested in becoming a distributor or learning more about GoLocal?"
            />
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
