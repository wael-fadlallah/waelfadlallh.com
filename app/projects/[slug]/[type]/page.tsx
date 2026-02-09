import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = { slug: string; type: string };

function getMarkdownFile(slug: string, type: string) {
  const filePath = path.join(
    process.cwd(),
    "app/projects",
    slug,
    "content/legal",
    type,
    `${type}.md`
  );

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

export function generateStaticParams() {
  return [
    { slug: "wakey-wakey", type: "privacy" },
    { slug: "wakey-wakey", type: "terms" },
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, type } = await params;
  const file = getMarkdownFile(slug, type);
  if (!file) return {};
  return { title: file.data.title };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, type } = await params;
  const file = getMarkdownFile(slug, type);
  if (!file) notFound();

  const { data, content } = file;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold text-text-primary">
        {data.title}
      </h1>
      {data.lastUpdated && (
        <p className="mb-10 text-sm text-text-secondary">
          Last Updated:{" "}
          {data.lastUpdated instanceof Date
            ? data.lastUpdated.toISOString().split("T")[0]
            : data.lastUpdated}
        </p>
      )}
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </main>
  );
}
