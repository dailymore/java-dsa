import { defineConfig } from "vitepress";
import sidebars from "../sidebars";

export default defineConfig({
  title: "Spring Docs",
  description: "Java DSA",
  outDir: "../dist",
  base: "/java-dsa/",
  vite: { server: { port: 2000 } },
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: sidebars,
    socialLinks: [{ icon: "github", link: "https://github.com/cmhehe176/" }],
  },
});
