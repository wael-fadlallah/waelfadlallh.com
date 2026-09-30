import { SectionHead } from "./section-head";

const AWARDS = [
  {
    year: "2024",
    title: "Mashreq NEO launch recognition",
    note: "For my part in launching Mashreq NEO and e&Mashreq NEO.",
  },
  {
    year: "2023",
    title: "Fantastic Four award",
    note: "Mashreq's internal award for delivering the projects I led that year.",
  },
];

export function About() {
  return (
    <section id="about" className="section section--alt">
      <SectionHead
        index="02"
        title={
          <>
            The short <em>version</em>
          </>
        }
        meta="Khartoum → Dubai"
      />

      <div className="about">
        <div className="about__text">
          <p className="about__lead">
            I got my first engineering job in Khartoum in 2018 and have been
            building front ends ever since.
          </p>
          <p>
            At Revo Tech I learned the job by doing all of it: the React app,
            the Node service behind it, and eventually the Jira board and the
            morning stand-up.
          </p>
          <p>
            In 2021 I moved to Dubai and spent a year and a bit at Inceptive,
            an agency. New client, new stack, new deadline. Most of it was
            React and Node, but when a client&apos;s Android app needed new
            features, I picked up Kotlin and shipped those too.
          </p>
          <p>
            Since mid-2022 I&apos;ve been at Mashreq, building the flows
            people use to join the bank. More than 700,000 people have signed
            up through the mobile onboarding I built the KYC and upload steps
            for, and the fulfillment app I led handles over 10,000 requests a
            day. At that scale every screen has to be fast, clear, and hard to
            get wrong, and that&apos;s the bar I hold my work to.
          </p>
        </div>

        <aside className="about__aside">
          <h3 className="about__label">Awards</h3>
          <ul className="about__list">
            {AWARDS.map((award) => (
              <li key={award.year}>
                <span className="about__year">{award.year}</span>
                <div>
                  <p className="about__item">{award.title}</p>
                  <p className="about__note">{award.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="about__label">Education</h3>
          <ul className="about__list">
            <li>
              <span className="about__year">BSc</span>
              <div>
                <p className="about__item">Information Technology</p>
                <p className="about__note">
                  Sudan International University, network management track.
                </p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
