/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

it("App Router: Works with Client Components (React State)", () => {
  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByRole("button", { name: "+" }));
  expect(screen.getByRole("heading")).toHaveTextContent("1");
});

it("cannot go below zero", () => {
  render(<Counter />);
  const minusButton = screen.getByRole("button", { name: "-" });
  expect(minusButton).toBeDisabled();
  fireEvent.click(minusButton);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
});

it("decrements once a positive count is reached", () => {
  render(<Counter />);
  const plusButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(plusButton);
  fireEvent.click(plusButton);
  fireEvent.click(screen.getByRole("button", { name: "-" }));
  expect(screen.getByRole("heading")).toHaveTextContent("1");
});

it("shows a milestone message at 5", () => {
  render(<Counter />);
  const plusButton = screen.getByRole("button", { name: "+" });
  for (let i = 0; i < 5; i++) fireEvent.click(plusButton);
  expect(screen.getByText(/five/i)).toBeInTheDocument();
});

it("reset returns the count to zero and clears the milestone", () => {
  render(<Counter />);
  const plusButton = screen.getByRole("button", { name: "+" });
  for (let i = 0; i < 5; i++) fireEvent.click(plusButton);
  fireEvent.click(screen.getByRole("button", { name: "reset" }));
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  expect(screen.queryByText(/five/i)).not.toBeInTheDocument();
});
