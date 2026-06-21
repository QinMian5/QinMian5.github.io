const rawIcons = import.meta.glob("./icons/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const icons = Object.fromEntries(
  Object.entries(rawIcons).map(([path, content]) => [
    path.replace("./icons/", "").replace(".svg", ""),
    content,
  ]),
);

export type IconName = keyof typeof icons;
