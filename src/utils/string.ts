export function slugify(text: string) {
  if (!text) return "";
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function capitalize(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function extractIdFromSlug(slug: string) {
  if (!slug) return "";
  return slug.split("-").pop() ?? "";
}

export function extractTitleFromSlug(slug: string) {
  if (!slug) return "";
  return slug.split("-").slice(0, -1).join(" ");
}

export function extractSeasonFromSlug(slug: string) {
  if (!slug) return "";
  return slug.split("-")[0];
}

export function extractEpisodeNumberFromSlug(slug: string) {
  if (!slug) return "";
  return slug.split("-")[1];
}

export function extractEpisodeTitleFromSlug(slug: string) {
  if (!slug) return "";
  return slug.split("-").slice(2).join(" ");
}

export function createQueryString(name: string, value: string) {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  return params.toString();
}

export function formatProfessions(profession: string) {
  return profession.replaceAll(/_/g, " ");
}
