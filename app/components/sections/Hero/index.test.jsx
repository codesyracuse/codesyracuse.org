import React from "react";
import { render, screen } from "@testing-library/react";
import { buildBlockContent } from "~/../test/utils";
import { Hero } from "./index.jsx";

describe("Hero", () => {
  const title = "This is a title";
  const description = "The best art in Syracuse";
  const blockContentDescription = buildBlockContent(description);

  test("renders Hero component", () => {
    const { asFragment } = render(
      <Hero title={title} description={blockContentDescription} />,
    );
    // screen.debug();
    // expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText(title)).toHaveTextContent(title);
    expect(screen.getByText(description)).toHaveTextContent(description);
  });
});
