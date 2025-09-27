import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const siteMapLinks = [
    { name: "Login", href: "/login" },
    { name: "About Us", href: "/about" },
    { name: "Business", href: "/business" },
  ];

  return (
  <footer className="w-full bg-[#063b6b] text-white relative z-50">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-white/90">Email: info@sokalo.com</p>
              <p className="text-sm text-white/90">Phone: (123) 456-7890</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-2 space-y-2">
                <textarea
                  className="w-full min-h-[100px] rounded-md border border-transparent bg-white/5 px-3 py-2 text-sm placeholder:text-white/70 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-0"
                  placeholder="Type your message here..."
                />
                <Button type="submit" variant="outline" className="w-full bg-white/10 hover:bg-white/20">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Site Maps */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Site Maps</h3>
            <nav className="flex flex-col space-y-2">
              {siteMapLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Sokalo Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-white/90">
              Your Local Market Digitized - Connecting communities through digital commerce.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Sokalo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;