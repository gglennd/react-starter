import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <Button>Click me!</Button>
    </React.Fragment>
  );
}
