import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof typeof errors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const whatsappNumber = "231777842609";
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in KS Gari Cereal. I would like to place an order.");

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-bg py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Contact Us / Order
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Ready to order KS Gari Cereal or become a distributor? Get in touch today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you want to place an order, become a distributor, or simply 
                learn more about our products, we're here to help.
              </p>

              <div className="mt-8 space-y-6">
                {/* Phone */}
                <a
                  href="tel:0777842609"
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Call Us</p>
                    <p className="text-muted-foreground">0777842609</p>
                    <p className="text-muted-foreground">0880557574</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">Chat with us instantly</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:golicalliberia@gmail.com"
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">golocalliberia@gmail.com</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">
                      1st Floor, Khouri Building<br />
                      Monrovia, Montserrado County<br />
                      Liberia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground">
                  Website: <a href="https://www.golocal.biz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.golocal.biz</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Place an order or become a distributor
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your order or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
              Become a Distributor
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Interested in selling KS Gari Cereal in your store or community? 
              Contact us to learn about distributor partnerships.
            </p>
            <div className="mt-8">
              <Button
                asChild
                variant="whatsapp"
                size="lg"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'm interested in becoming a distributor for KS Gari Cereal.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
