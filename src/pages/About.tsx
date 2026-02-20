import { Link } from "react-router-dom";
import { Target, Sprout, Users, Globe } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

const values = [
  {
    icon: Sprout,
    title: "Local Value Chains",
    description: "We strengthen Liberia's food systems by connecting farmers directly to institutional markets.",
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    description: "Supporting smallholder farmers and community processors with fair pricing and reliable demand.",
  },
  {
    icon: Target,
    title: "Quality Standards",
    description: "Delivering standardized, hygienic products that meet institutional requirements.",
  },
  {
    icon: Globe,
    title: "Institutional Supply",
    description: "Reliable food supply solutions for schools, NGOs, and development programs.",
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
                GoLocal Group of Companies is a Liberia-based agro-food systems and institutional supply enterprise engaged in the aggregation, processing, packaging, and distribution of locally produced staple foods. The company operates an integrated food systems model that connects smallholder farmers and community-based processors to institutional buyers such as schools, non-governmental organizations, training institutions, and development programs. GoLocal focuses on delivering standardized, high-quality food products while strengthening local value chains and institutional supply systems.
              </p>
              
              <h2 className="mt-12 font-display text-2xl font-bold text-foreground md:text-3xl">
                Our Mission
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We bridge the gap between local food production and institutional demand, ensuring that Liberian farmers and processors have reliable markets while institutions receive consistent, quality-assured staple foods. Through KS Gari Cereal and other products, we demonstrate how local food systems can meet modern standards of quality, hygiene, and nutrition.
              </p>
              
              <h2 className="mt-12 font-display text-2xl font-bold text-foreground md:text-3xl">
                Institutional Impact
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our work supports Liberia's development goals by strengthening local value chains, creating sustainable livelihoods for smallholder farmers, and providing reliable food supply solutions for schools, NGOs, and development programs. Every product we deliver represents a step toward greater food security and economic resilience in our communities.
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
              We envision a Liberia where integrated food systems provide sustainable livelihoods for farmers while ensuring reliable, quality food supplies for institutions. Through our agro-food enterprise model, we aim to contribute to food security, economic development, and community resilience across the country.
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
