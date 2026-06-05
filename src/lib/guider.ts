import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const GUIDER_DIR = path.join(process.cwd(), "content", "guider");

export const AUTHOR = {
  name: "Ludvig Eriksson",
  bio: "Ludvig skriver om livet på vägen, vattenlösa toaletter och hur man reser friare med husbil och husvagn.",
  url: "https://www.linkedin.com/in/ludvig-eriksson-540519a8/",
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  keywords: string[];
  readingMinutes: number;
  content: string;
};

function readGuideFile(file: string): Guide {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(GUIDER_DIR, file), "utf-8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    excerpt: data.excerpt ?? data.description ?? "",
    date: data.date ?? "2026-06-05",
    keywords: data.keywords ?? [],
    readingMinutes: Math.max(2, Math.round(words / 200)),
    content,
  };
}

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(GUIDER_DIR)) return [];
  return fs
    .readdirSync(GUIDER_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readGuideFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getGuide(slug: string): Guide | null {
  const file = path.join(GUIDER_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return readGuideFile(`${slug}.md`);
}
