import { Link, useRouter } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function NotFound({ children }: { children?: React.ReactNode }) {
  const router = useRouter();

  return (
    <div>
      <div>
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p>
        <Button
          onClick={() => router.history.back()}
        >
          Go back
        </Button>
        <Link
          to="/"
        >
          Start Over
        </Link>
      </p>
    </div>
  );
}
