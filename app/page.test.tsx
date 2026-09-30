/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "App Router",
  );
});

it("renders the interactive counter alongside the server-rendered heading", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("0");
  expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
});
