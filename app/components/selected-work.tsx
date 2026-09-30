import type { ReactNode } from "react";
import { SectionHead } from "./section-head";

type Stat = {
  value: string;
  label: string;
  tone?: "alt";
};

type Project = {
  kind: string;
  title: ReactNode;
  stat: Stat;
  copy: ReactNode;
};

const MASHREQ: Project[] = [
  {
    kind: "Mobile · React Native",
    title: (
      <>
        Digital <em>onboarding</em>
      </>
    ),
    stat: { value: "700K+", label: "people signed up through it", tone: "alt" },
    copy: (
      <>
        Mashreq Egypt&apos;s mobile onboarding. I built the KYC and
        document-upload steps, the part of the app where you prove who you are
        before the bank will open an account for you.
      </>
    ),
  },
  {
    kind: "Web · React & Redux",
    title: (
      <>
        Account <em>fulfillment</em>
      </>
    ),
    stat: { value: "10K+", label: "requests handled a day" },
    copy: (
      <>
        I led the build of NEO&apos;s account-fulfillment web app, and hooked
        it up to the verification APIs so fewer requests need someone to
        check them by hand.
      </>
    ),
  },
];

type Role = {
  years: string;
  title: string;
  where: string;
  copy: ReactNode;
  links?: { href: string; label: string }[];
};

const EARLIER: Role[] = [
  {
    years: "2021 – 2022",
    title: "Inceptive Communications",
    where: "Software Engineer · Dubai",
    copy: (
      <>
        Agency work, so a different client every few weeks. Marketing and
        e-commerce sites in React, Node and Express, Android features in
        Kotlin, and Azure Functions, App Services and Cosmos DB behind them.
      </>
    ),
  },
  {
    years: "2018 – 2021",
    title: "Revo Tech Co.",
    where: "Software Engineer · Khartoum",
    copy: (
      <>
        My first job. I built web apps end to end in JavaScript, React and
        Node, mostly for B2B clients, and ended up running the team&apos;s
        Jira board and daily stand-ups.
      </>
    ),
  },
];

const SIDE: Role[] = [
  {
    years: "Personal",
    title: "Wakey: Wake Up Alarms",
    where: "Mobile app · Expo · AlarmKit",
    copy: (
      <>
        A free alarm app I built on my own. Its alarms run on Apple&apos;s
        AlarmKit, so they go off like the built-in Clock alarms, even with
        the app closed. To use AlarmKit from React Native, I wrote my own
        library on top of it, and Wakey is built on that.
      </>
    ),
    links: [
      { href: "/projects/wakey-wakey/privacy", label: "Privacy" },
      { href: "/support/wakey", label: "Support" },
    ],
  },
];

function Feature({ project }: { project: Project }) {
  return (
    <article className="feature__project">
      <span className="feature__kind">{project.kind}</span>
      <h4 className="feature__title">{project.title}</h4>
      <p
        className={`feature__stat${
          project.stat.tone === "alt" ? " feature__stat--alt" : ""
        }`}
      >
        <span className="feature__stat-num">{project.stat.value}</span>
        <span className="feature__stat-label">{project.stat.label}</span>
      </p>
      <p className="feature__copy">{project.copy}</p>
    </article>
  );
}

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol className="roles">
      {roles.map((role) => (
        <li key={role.title} className="role">
          <span className="role__years">{role.years}</span>
          <div className="role__main">
            <h4 className="role__title">{role.title}</h4>
            <p className="role__where">{role.where}</p>
          </div>
          <div className="role__body">
            <p className="role__copy">{role.copy}</p>
            {role.links && (
              <p className="role__links">
                {role.links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label} →
                  </a>
                ))}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="section">
      <SectionHead
        index="01"
        title={
          <>
            Selected <em>work</em>
          </>
        }
        meta="2018 – now"
      />

      <div className="feature">
        <header className="feature__head">
          <h3 className="feature__company">Mashreq Bank</h3>
          <p className="feature__role">
            Frontend Engineer · Dubai · Jun 2022 – now
          </p>
          <p className="feature__intro">
            Two products, one goal: getting someone from &ldquo;I want an
            account&rdquo; to actually having one.
          </p>
        </header>
        <div className="feature__projects">
          {MASHREQ.map((project) => (
            <Feature key={project.kind} project={project} />
          ))}
        </div>
      </div>

      <h3 className="roles__heading">Before that</h3>
      <RoleList roles={EARLIER} />

      <h3 className="roles__heading roles__heading--side">On the side</h3>
      <RoleList roles={SIDE} />
    </section>
  );
}
