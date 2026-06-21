import { getCollection, type CollectionEntry } from "astro:content";

export const publicCollections = [
  "projects",
  "writing",
  "publications",
  "talks",
  "teaching",
] as const;

export type PublicCollection = (typeof publicCollections)[number];
export type PublicEntry =
  | CollectionEntry<"projects">
  | CollectionEntry<"writing">
  | CollectionEntry<"publications">
  | CollectionEntry<"talks">
  | CollectionEntry<"teaching">;

const collectionSources: Record<PublicCollection, Record<string, unknown>> = {
  projects: import.meta.glob("../content/projects/**/*.{md,mdx}"),
  writing: import.meta.glob("../content/writing/**/*.{md,mdx}"),
  publications: import.meta.glob("../content/publications/**/*.{md,mdx}"),
  talks: import.meta.glob("../content/talks/**/*.{md,mdx}"),
  teaching: import.meta.glob("../content/teaching/**/*.{md,mdx}"),
};

export const collectionPaths: Record<PublicCollection, string> = {
  projects: "/projects/",
  writing: "/writing/",
  publications: "/publications/",
  talks: "/talks/",
  teaching: "/teaching/",
};

export const collectionLabels: Record<PublicCollection, string> = {
  projects: "Code & Projects",
  writing: "Writing",
  publications: "Publications",
  talks: "Talks & Presentations",
  teaching: "Teaching",
};

export function isPublished(entry: PublicEntry): boolean {
  return entry.data.draft !== true;
}

export function formatDate(date: Date | undefined): string | undefined {
  if (!date) {
    return undefined;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(date);
}

export function sortByDateDesc<T extends PublicEntry>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    const dateA = a.data.date?.getTime() ?? 0;
    const dateB = b.data.date?.getTime() ?? 0;
    return dateB - dateA || a.data.title.localeCompare(b.data.title);
  });
}

export async function getSectionEntries(
  collection: PublicCollection,
): Promise<PublicEntry[]> {
  if (Object.keys(collectionSources[collection]).length === 0) {
    return [];
  }

  const entries = (await getCollection(collection, ({ data }) => {
    return data.draft !== true;
  })) as PublicEntry[];

  return sortByDateDesc(entries);
}

export function getEntryPath(
  collection: PublicCollection,
  entry: PublicEntry,
): string {
  return `${collectionPaths[collection]}${entry.id}/`;
}

export function getEntryExtra(entry: PublicEntry): string | undefined {
  const data = entry.data;

  if ("venue" in data && data.venue) {
    return data.venue;
  }

  if ("journal" in data && data.journal) {
    return data.journal;
  }

  if ("event" in data && data.event) {
    return data.event;
  }

  if ("institution" in data && data.institution) {
    return data.institution;
  }

  if ("role" in data && data.role) {
    return data.role;
  }

  return undefined;
}

export function getEntryAuthors(entry: PublicEntry): string | undefined {
  const data = entry.data;

  if ("authors" in data && Array.isArray(data.authors)) {
    return data.authors.join(", ");
  }

  return data.author;
}

export async function getAllTaggedEntries(): Promise<
  Array<PublicEntry & { collection: PublicCollection }>
> {
  const groups = await Promise.all(
    publicCollections.map(async (collection) => {
      const entries = await getSectionEntries(collection);
      return entries.map((entry) => ({ ...entry, collection }));
    }),
  );

  return groups.flat();
}

export async function getAllTags(): Promise<
  Array<{ name: string; count: number }>
> {
  const entries = await getAllTaggedEntries();
  const counts = new Map<string, number>();

  for (const entry of entries) {
    for (const tag of entry.data.tags ?? []) {
      const normalized = tag.trim().toLowerCase();
      if (normalized) {
        counts.set(normalized, (counts.get(normalized) ?? 0) + 1);
      }
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getContentByTag(
  tag: string,
): Promise<Array<PublicEntry & { collection: PublicCollection }>> {
  const normalized = tag.toLowerCase();
  const entries = await getAllTaggedEntries();

  return sortByDateDesc(
    entries.filter((entry) =>
      (entry.data.tags ?? []).some(
        (entryTag) => entryTag.toLowerCase() === normalized,
      ),
    ),
  );
}
