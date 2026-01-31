import { Linkedin, Mail } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-foreground text-background px-6 py-3 rounded-full shadow-2xl flex items-center gap-6 dark:bg-background dark:text-foreground dark:border dark:border-foreground/20">
      <a
        href="https://www.linkedin.com/in/abhishekdoddi/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-70 transition-opacity text-sm font-bold uppercase tracking-wide"
        aria-label="Connect on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
      <div className="w-px h-5 bg-background/30" />
      <a
        href="mailto:abhishekvzg@gmail.com"
        className="flex items-center gap-2 hover:opacity-70 transition-opacity text-sm font-bold uppercase tracking-wide"
        aria-label="Send email"
      >
        <Mail className="w-5 h-5" />
        <span className="hidden sm:inline">Email</span>
      </a>
    </div>
  );
};

export default ContactBar;
