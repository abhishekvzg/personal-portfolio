import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/abhishek", icon: Linkedin },
    { label: "Email", href: "mailto:abhishek@example.com", icon: Mail },
    { label: "GitHub", href: "https://github.com/abhishek", icon: Github },
  ];

  return (
    <footer className="bg-foreground text-background dark:bg-card dark:text-foreground dark:border-t dark:border-foreground/10">
      <div className="px-5 md:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Name */}
          <div>
            <div className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              ABHISHEK
            </div>
            <p className="text-background/60 mt-2 text-sm uppercase tracking-wide">
              Product Manager
            </p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="font-serif text-lg text-background/80">
              Building products users love.
            </p>
          </div>

          {/* Social */}
          <div className="flex justify-start md:justify-end gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors dark:bg-foreground/10 dark:hover:bg-foreground/20"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-background/20">
          <p className="text-sm text-center text-background/60 uppercase tracking-wide">
            © 2025 ABHISHEK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
