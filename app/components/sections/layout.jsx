import React from "react";
import clsx from "clsx";

export function Layout(props) {
  return <FullWidthLayout className="max-w-2xl" children={props.children} />;
}

export function MidWidthLayout(props) {
  return <FullWidthLayout className="max-w-4xl" children={props.children} />;
}

export function FullWidthLayout({ className, children }) {
  return (
    <div className={clsx("mx-auto mb-4 last:mb-0 md:mb-8", className)}>
      {children}
    </div>
  );
}
