import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import type { Project } from "@/components/Projects";

interface GitHubRepo {
  name: string;
  description: string | null;
  topics: string[];
  language: string | null;
  html_url: string;
  homepage: string | null;
}

const accentCycle: Array<"cyan" | "purple" | "mixed"> = [
  "cyan",
  "purple",
  "mixed",
];

function formatRepoName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function getGithubProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/shiki-12/repos?sort=updated&per_page=6",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const repos: GitHubRepo[] = await res.json();

    return repos.map((repo, i) => ({
      title: formatRepoName(repo.name),
      description: repo.description || "No description provided.",
      tags:
        repo.topics && repo.topics.length > 0
          ? repo.topics
          : repo.language
            ? [repo.language]
            : ["Code"],
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || null,
      accent: accentCycle[i % 3],
    }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const githubProjects = await getGithubProjects();

  return (
    <main className="relative z-10 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={githubProjects} />
      <Services />
      <Skills />
      <Footer />
    </main>
  );
}
