import type { ReactNode } from "react";
import { SectionHead } from "./section-head";

type Award = {
  year: string;
  title: ReactNode;
  copy: ReactNode;
};

const AWARDS: Award[] = [
  {
    year: "2024",
    title: (
      <>
        Mashreq <em>NEO</em> Launch Recognition
      </>
    ),
    copy: (
      <>
        Honored for contributions to the successful launch of Mashreq NEO and
        e&amp;Mashreq NEO platforms, enhancing digital banking services.
      </>
    ),
  },
  {
    year: "2023",
    title: (
      <>
        Mashreq <em>Fantastic Four</em> Award
      </>
    ),
    copy: (
      <>
        Recognised for outstanding performance delivering key projects and
        contributing to team success.
      </>
    ),
  },
  {
    year: "2018",
    title: (
      <>
        B.Sc. <em>Information Technology</em>
      </>
    ),
    copy: <>Network management — Sudan International University.</>,
  },
];

export function Recognition() {
  return (
    <section id="recognition" className="section">
      <SectionHead index="04" title={<em>Recognition</em>} meta="awards" />
      <ul className="awards">
        {AWARDS.map((award) => (
          <li key={award.year} className="award">
            <span className="award__year">{award.year}</span>
            <h3 className="award__title">{award.title}</h3>
            <p className="award__copy">{award.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
