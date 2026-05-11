import { SectionHead } from "./section-head";

const TOOL_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Kotlin"],
  },
  {
    label: "Frameworks",
    items: ["React", "React Native", "Node.js", "Express"],
  },
  {
    label: "State & Data",
    items: ["Redux", "Context API", "GraphQL", "RESTful APIs"],
  },
  {
    label: "Tooling",
    items: ["Webpack", "Babel", "Native Modules", "Performance Opt."],
  },
  {
    label: "Cloud",
    items: ["Azure Functions", "App Services", "Cosmos DB"],
  },
  {
    label: "Practice",
    items: ["Agile", "Jira", "Confluence", "CMS Integrations"],
  },
];

export function Toolbox() {
  return (
    <section id="toolbox" className="section section--alt">
      <SectionHead index="03" title={<em>Toolbox</em>} meta="Skill Arsenal" />
      <div className="tools">
        {TOOL_GROUPS.map((group) => (
          <div key={group.label} className="tools__group">
            <span className="tools__label">{group.label}</span>
            <ul className="tools__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
