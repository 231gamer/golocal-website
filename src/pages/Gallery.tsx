import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Stock gallery images - replace with actual event photos when available
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    alt: "Community farmers meeting with agricultural experts",
    caption: "Farmer training and capacity building workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    alt: "School children receiving food supplies",
    caption: "Institutional food distribution to local schools",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    alt: "Agricultural processing facility",
    caption: "Modern food processing and quality control",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    alt: "Community stakeholders discussing food systems",
    caption: "Multi-stakeholder dialogue on food security",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    alt: "NGO representatives at supply chain meeting",
    caption: "Partnership development with development organizations",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    alt: "Local market with fresh produce",
    caption: "Supporting local markets and value chains",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Events Gallery
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Showcasing GoLocal's community engagement, institutional partnerships, and commitment to Liberian food systems.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Recent Events & Activities"
            subtitle="Photos from our community events, product launches, and institutional supply deliveries"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{image.caption}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="space-y-4">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full rounded-lg"
                    />
                    <p className="text-center text-muted-foreground">{image.caption}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;