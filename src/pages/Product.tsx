import { Link } from "react-router-dom";
import { Check, ShieldCheck, QrCode } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import heroProduct from "@/assets/ks-gari-sizes.jpg";

const ingredients = [
  { name: "Gari (Cassava)", description: "Locally grown and processed cassava" },
  { name: "Roasted Peanuts", description: "Protein-rich groundnuts from Liberian farms" },
  { name: "Grated Coconut", description: "Fresh coconut for natural flavor" },
  { name: "Sugar", description: "Balanced sweetness" },
  { name: "Non-Dairy Milk", description: "Creamy texture without dairy" },
];

const targetAudience = [
  "Children needing nutritious breakfast",
  "Students looking for quick meals",
  "Busy families and working parents",
  "Anyone wanting convenient, healthy food",
];

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                KS Gari Cereal
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                A nutritious, ready-to-eat cereal made from locally sourced cassava (gari), 
                roasted peanuts, grated coconut, sugar, and non-dairy milk.
              </p>
              <p className="mt-4 text-muted-foreground">
                Hygienically processed and batch-coded for traceability. Designed to provide 
                a convenient, wholesome meal for children, students, and families.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">Order Now</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src={heroProduct}
                alt="KS Gari Cereal package"
                className="mx-auto w-full max-w-md rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Quality Ingredients"
            subtitle="Every ingredient is carefully selected from local sources"
          />
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {ingredients.map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{ingredient.name}</h3>
                      <p className="text-sm text-muted-foreground">{ingredient.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Perfect For Everyone"
            subtitle="KS Gari Cereal is designed for busy lives"
          />
          <div className="mx-auto max-w-2xl">
            <ul className="grid gap-4 sm:grid-cols-2">
              {targetAudience.map((audience) => (
                <li key={audience} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-foreground">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hygiene & Safety */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Hygiene & Safety First"
            subtitle="Your family's health is our priority"
          />
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Hygienic Processing</h3>
                <p className="mt-2 text-muted-foreground">
                  Our production facility maintains strict hygiene standards throughout the 
                  entire manufacturing process to ensure product safety and quality.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <QrCode className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Batch Coding</h3>
                <p className="mt-2 text-muted-foreground">
                  Every product is batch-coded for complete traceability, allowing us to 
                  track and verify the quality of every package we produce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Usage */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Simple to Store & Enjoy"
              subtitle="Convenience built into every pack"
            />
            <div className="mt-8 rounded-xl border border-border bg-card p-8">
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-foreground">Storage</h4>
                  <p className="text-muted-foreground">
                    Store in a cool, dry place. Keep sealed when not in use.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Serving</h4>
                  <p className="text-muted-foreground">
                    Ready to eat! Simply open and enjoy. Can be consumed dry or with 
                    additional milk of your choice.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">Order Your Pack Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
