import { SectionHead } from "./section-head";

const TOOL_GROUPS: { label: string; items: string }[] = [
  { label: "Languages", items: "TypeScript, JavaScript, Kotlin" },
  { label: "Web", items: "React, Redux, Context API, GraphQL, REST APIs" },
  { label: "Mobile", items: "React Native, native modules on iOS and Android" },
  { label: "Server & cloud", items: "Node.js, Express, Azure Functions, App Services, Cosmos DB" },
  { label: "Build", items: "Webpack, Babel, performance work, CMS integrations" },
  { label: "Team", items: "Agile, Jira, Confluence" },
];

export function Toolbox() {
  return (
    <section id="toolbox" className="section">
      <SectionHead
        index="03"
        title={
          <>
            What I <em>use</em>
          </>
        }
      />
      <div className="kit">
        <p className="kit__intro">
          Most days it&apos;s TypeScript and React, on the web or in React
          Native. The rest comes out when a project needs it.
        </p>
        <dl className="kit__list">
          {TOOL_GROUPS.map((group) => (
            <div key={group.label} className="kit__row">
              <dt>{group.label}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
