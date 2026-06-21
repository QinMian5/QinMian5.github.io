import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const markdownProcessor = unified({
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
});

export default defineConfig({
  site: "https://qinmian5.github.io",
  output: "static",
  markdown: {
    processor: markdownProcessor,
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const hiddenPaths = [
          "/about/",
          "/projects/",
          "/writing/",
          "/talks/",
          "/teaching/",
          "/cv/",
          "/tags/",
          "/dev-tools/",
          "/dev-tools/palette-visualizer/",
          "/dev-tools/screen-visualizer/",
          "/dev-tools/theme-visualizer/",
        ];
        const hiddenPrefixes = ["/tags/"];

        return (
          !hiddenPaths.includes(pathname) &&
          !hiddenPrefixes.some((path) => pathname.startsWith(path))
        );
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
