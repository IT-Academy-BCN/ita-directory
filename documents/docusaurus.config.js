const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "IT Academy Directory",
    tagline: "Dinosaurs are cool",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "ITA Directory",
          logo: {
            alt: "ITA Directory",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Documentation",
            },
            { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://github.com/it-academyproject/ita-directory",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "/blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()}. IT Academy Directory. Designed by Kevin Mamaqi for IT Academy.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
