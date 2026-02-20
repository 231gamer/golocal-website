import { Link } from "react-router-dom";
import { MapPin, Clock, Wallet, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

const differentiators = [
  {
    icon: MapPin,
    title: "Locally Made",
    description: "Unlike imported cereals that travel thousands of miles, KS Gari Cereal is proudly made right here in Liberia using local ingredients.",
    comparison: "Imported cereals vs. locally produced",
  },
  {
    icon: Clock,
    title: "Ultimate Convenience",
    description: "No cooking, no preparation time. Just open and eat. Perfect for busy mornings, snacks, or meals on the go.",
    comparison: "Traditional preparation vs. ready-to-eat",
  },
  {
    icon: Wallet,
    title: "Affordable Nutrition",
    description: "Quality nutrition shouldn't break the bank. KS Gari Cereal provides wholesome meals at prices families can afford.",
    comparison: "Premium pricing vs. accessible pricing",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Every purchase directly supports Liberian farmers and local communities, creating jobs and sustainable livelihoods.",
    comparison: "Corporate profits vs. community impact",
  },
];

const WhyKSGari = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-bg py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Why Choose KS Gari Cereal?
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Discover what makes KS Gari Cereal the smart choice for your family's nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6 md:p-8"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-accent">
                    {item.comparison}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
              Made With Purpose
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              KS Gari Cereal isn't just another product on the shelf. It's a commitment 
              to providing nutritious, affordable food while supporting the people who 
              grow our ingredients. When you choose KS Gari Cereal, you're choosing 
              quality, convenience, and community all in one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Ready to Try KS Gari Cereal?"
              subtitle="Join thousands of families who have made the switch to nutritious, locally-made cereal."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Order Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/product">View Product Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyKSGari;
