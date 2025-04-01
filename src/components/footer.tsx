import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} SelfTaughtResume.com
        </div>
        <div className="flex gap-4">
          <Button variant="link" size="sm" className="text-muted-foreground">
            Privacy Policy
          </Button>
          <Button variant="link" size="sm" className="text-muted-foreground">
            Terms of Service
          </Button>
          <Button variant="link" size="sm" className="text-muted-foreground">
            Contact
          </Button>
          <Button variant="link" size="sm" className="text-muted-foreground">
            FAQ
          </Button>
        </div>
      </div>
    </footer>
  );
};
