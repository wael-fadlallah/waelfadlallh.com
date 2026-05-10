import type { ReactNode } from "react";

type Props = {
  index: string;
  title: ReactNode;
  meta?: string;
};

export function SectionHead({ index, title, meta }: Props) {
  return (
    <header className="section__head">
      <span className="section__index">{index}</span>
      <h2 className="section__title">{title}</h2>
      <span className="section__rule" aria-hidden="true" />
      {meta && <span className="section__meta">{meta}</span>}
    </header>
  );
}
