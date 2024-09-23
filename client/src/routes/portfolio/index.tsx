import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/")({
  component: () => <div>Hello /portolio/!</div>,
});
