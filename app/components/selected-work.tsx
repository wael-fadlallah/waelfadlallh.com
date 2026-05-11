import type { ReactNode } from "react";
import { SectionHead } from "./section-head";

type Project = {
  label: string;
  title: ReactNode;
  metric: string;
  metricLabel: ReactNode;
  metricVariant?: "primary" | "alt";
  copy: ReactNode;
};

type GroupedCase = {
  variant: "group";
  num: string;
  title: string;
  role: string;
  time: string;
  projects: [Project, Project];
  tags: string[];
};

type SingleCase = {
  variant: "single";
  num: string;
  title: string;
  role: string;
  time: string;
  copy: ReactNode;
  tags: string[];
};

type Case = GroupedCase | SingleCase;

const CASES: Case[] = [
  {
    variant: "group",
    num: "01",
    title: "Mashreq Bank",
    role: "Frontend Engineer · Dubai · 2 shipped products",
    time: "Jun 2022 — Present",
    projects: [
      {
        label: "Project 01 · Web",
        title: (
          <>
            Mashreq — <em>Account Fulfillment</em>
          </>
        ),
        metric: "10K+",
        metricLabel: (
          <>
            daily requests
            <br />
            processed
          </>
        ),
        metricVariant: "primary",
        copy: (
          <>
            Led the build of NEO&apos;s customer account-fulfillment web app.{" "}
            <em>React</em>, <em>TypeScript</em>, <em>Redux</em>. Now powers
            every account opened at the bank.
          </>
        ),
      },
      {
        label: "Project 02 · Mobile",
        title: (
          <>
            Mashreq — <em>Digital Onboarding</em>
          </>
        ),
        metric: "700K+",
        metricLabel: (
          <>
            new users
            <br />
            onboarded
          </>
        ),
        metricVariant: "alt",
        copy: (
          <>
            Built onboarding journey that included <em>KYC</em> and
            <em>document-upload</em> flows in Mashreq Egypt&apos;s mobile
            onboarding. 700K+ people have signed up through it.
          </>
        ),
      },
    ],
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Redux",
      "KYC",
      "Native Modules",
      "RESTful APIs",
    ],
  },
  {
    variant: "single",
    num: "02",
    title: "Inceptive Communications",
    role: "Software Engineer · Dubai",
    time: "Mar 2021 — Jun 2022",
    copy: (
      <>
        Built marketing and e-commerce sites for clients in <em>React</em>,{" "}
        <em>Node.js</em> and <em>Express</em>. Shipped Android features in{" "}
        <em>Kotlin</em>. Wired up <em>Microsoft Azure</em> (Functions, App
        Services, Cosmos DB) for data and auth.
      </>
    ),
    tags: ["React", "Node.js", "Kotlin", "Azure", "SEO"],
  },
  {
    variant: "single",
    num: "03",
    title: "Revo Tech Co.",
    role: "Software Engineer · Khartoum",
    time: "Jan 2018 — Apr 2021",
    copy: (
      <>
        Shipped web apps in <em>JavaScript</em>, <em>React</em> and{" "}
        <em>Node.js</em> — mostly fintech. First job where I owned the Jira
        board and the stand-up, not just attended them.
      </>
    ),
    tags: ["JavaScript", "React", "Node.js", "Agile"],
  },
];

function CaseHead({
  num,
  title,
  role,
  time,
}: Pick<Case, "num" | "title" | "role" | "time">) {
  return (
    <header className="case__head">
      <span className="case__num">{num}</span>
      <div className="case__title-block">
        <h3 className="case__title">{title}</h3>
        <p className="case__role">{role}</p>
      </div>
      <span className="case__time">{time}</span>
    </header>
  );
}

function CaseTags({ tags, group }: { tags: string[]; group?: boolean }) {
  return (
    <ul className={`case__tags${group ? " case__tags--group" : ""}`}>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function CaseProject({ project }: { project: Project }) {
  return (
    <article className="case__project">
      <header className="case__project-head">
        <span className="case__project-label">{project.label}</span>
        <h4 className="case__project-title">{project.title}</h4>
      </header>
      <div
        className={`case__metric${
          project.metricVariant === "alt" ? " case__metric--alt" : ""
        }`}
      >
        <span className="case__metric-num">{project.metric}</span>
        <span className="case__metric-label">{project.metricLabel}</span>
      </div>
      <p className="case__copy">{project.copy}</p>
    </article>
  );
}

function GroupCase({ data }: { data: GroupedCase }) {
  return (
    <li className="case case--group">
      <CaseHead {...data} />
      <div className="case__projects">
        {data.projects.map((project) => (
          <CaseProject key={project.label} project={project} />
        ))}
      </div>
      <CaseTags tags={data.tags} group />
    </li>
  );
}

function SingleCaseCard({ data }: { data: SingleCase }) {
  return (
    <li className="case">
      <CaseHead {...data} />
      <div className="case__body">
        <p className="case__copy case__copy--wide">{data.copy}</p>
        <CaseTags tags={data.tags} />
      </div>
    </li>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="section">
      <SectionHead
        index="02"
        title={
          <>
            Selected <em>work</em>
          </>
        }
        meta="2018 — present"
      />
      <ol className="cases">
        {CASES.map((c) =>
          c.variant === "group" ? (
            <GroupCase key={c.num} data={c} />
          ) : (
            <SingleCaseCard key={c.num} data={c} />
          ),
        )}
      </ol>
    </section>
  );
}
