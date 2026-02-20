import { Link } from "react-router-dom";
import { ShieldCheck, QrCode, Leaf, Users, Check, Phone, Mail, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { TrustBadge } from "@/components/TrustBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroProduct from "@/assets/ks-gari-single.jpg";
import heroSizes from "@/assets/ks-gari-sizes.jpg";
import slider1 from "@/assets/slider-1.png";
import slider2 from "@/assets/slider-2.png";
import slider3 from "@/assets/slider-3.jpeg";

const trustIndicators = [
  { icon: ShieldCheck, title: "Hygienically Processed" },
  { icon: QrCode, title: "Batch-Coded for Traceability" },
  { icon: Leaf, title: "Locally Sourced Ingredients" },
  { icon: Users, title: "Supports Local Farmers" },
];

const productBenefits = [
  "Ready-to-eat cereal",
  "No cooking required",
  "Ideal for children, students & families",
  "Convenient and affordable nutrition",
];

const heroSlides = [
  {
    image: slider1,
    alt: "KS Gari Cereal individual pack",
    headline: "Individual Family Pack",
    subtitle: "Perfect for daily nutrition",
  },
  {
    image: slider2,
    alt: "KS Gari Cereal multiple sizes",
    headline: "Available in Multiple Sizes",
    subtitle: "From small portions to family servings",
  },
  {
    image: slider3,
    alt: "KS Gari Cereal ready to eat",
    headline: "Ready-to-Eat Cereal",
    subtitle: "No cooking required, instant nutrition",
  },
  {
    image: slider1,
    alt: "KS Gari Cereal locally sourced",
    headline: "Locally Sourced Ingredients",
    subtitle: "Made with Liberian cassava, peanuts & coconut",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/20 to-bg py-12 md:py-20 lg:py-24">
        <div className="container">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="order-2 lg:order-1 animate-fade-in">
                      <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                        {slide.headline}
                      </h1>
                      <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                        {slide.subtitle}
                      </p>
                      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Button asChild variant="hero" size="lg">
                          <Link to="/contact">Order Now / Contact Us</Link>
                        </Button>
                        <Button asChild variant="heroOutline" size="lg">
                          <Link to="/contact">Become a Distributor</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="mx-auto w-full max-w-md rounded-2xl shadow-xl lg:max-w-lg"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y border-border bg-card py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustIndicators.map((indicator) => (
              <TrustBadge
                key={indicator.title}
                icon={indicator.icon}
                title={indicator.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Snapshot */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="Wholesome Nutrition, Ready in Seconds"
              subtitle="KS Gari Cereal is designed to provide a convenient, nutritious meal for busy families."
            />
            <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {productBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/product">View Product Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
              More Than Food — Supporting Local Communities
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl leading-relaxed">
              Every pack of KS Gari Cereal supports Liberian farmers and local communities. 
              We source our cassava, peanuts, and coconut directly from local producers, 
              ensuring fair prices and sustainable livelihoods. By choosing KS Gari Cereal, 
              you're investing in food security and community development in Liberia.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/about">Learn About GoLocal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Get in Touch"
            subtitle="Ready to order or have questions? We're here to help."
          />
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-6 md:grid-cols-2">
              <a
                href="tel:0777842609"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">0777842609</p>
                  <p className="text-sm text-muted-foreground">0880557574</p>
                </div>
              </a>
              <a
                href="mailto:golicalliberia@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground text-sm">golocalliberia@gmail.com</p>
                </div>
              </a>
            </div>
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="font-semibold text-foreground">
                    1st Floor, Khouri Building, Johnson Street, Monrovia, Liberia
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
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

export default Index;
