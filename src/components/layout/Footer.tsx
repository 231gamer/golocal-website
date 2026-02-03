import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-primary">
              GoLocal
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nutritious, ready-to-eat cereal made from locally sourced ingredients in Liberia.
            </p>
            <p className="text-sm text-muted-foreground">
              Produced by <strong className="text-foreground">GoLocal</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/product" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Product
              </Link>
              <Link to="/why-ks-gari" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Why KS Gari
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About GoLocal
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact / Order
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0777842609"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>0777842609 / 0880557574</span>
              </a>
              <a
                href="mailto:golicalliberia@gmail.com"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>golocalliberia@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>1st Floor, Khouri Building, Johnson Street, Monrovia, Liberia</span>
              </div>
            </div>
          </div>

          {/* Website */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Online</h4>
            <a
              href="https://www.golocal.biz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              www.golocal.biz
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KS Gari Cereal by GoLocal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
