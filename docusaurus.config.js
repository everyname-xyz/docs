// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "everyname",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://uploads-ssl.webflow.com/64204d41a2bd1e495749eb46/64341aaa7225bc9f5b476efb_favicon-32.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      {
        api: {
          path: "openapi.yaml",
          routeBasePath: "api",
          sidebarCollapsed: false,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          //routeBasePath: "/api", // Serve the docs at the site's root
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
            [
              require("docusaurus-remark-plugin-codetabs"),
              {
                // options
              },
            ],
          ],

          rehypePlugins: [katex],
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    "https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;400&display=swap",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "everyname Logo",
          src: "https://uploads-ssl.webflow.com/64204d41a2bd1e495749eb46/6434550aab4f8743745b859c_everyname_docs_logo.svg",
          href: "/api",

          //srcDark: "img/logo_dark.svg",
        },
        items: [
          /*     {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Introduction",
          }, */

          {
            href: "/api",
            label: "Introduction",
            position: "left",
          },
          {
            /*     html: `<form class="inputGroup" method="post" action="https://weightless.so/api/lists/hgd2zt6r/subscribe">
<input type="email" class="inputEmail" value="" required="" name="subscription[email]" placeholder="Your email address">
<button class="dark navbarBtn">
Subscribe
</button>
</form>
` */ html: `<button class="dark navbarBtn">Get Api Key</button>

`,
            position: "left",
            href: "https://forms.gle/XikEsdYrqvXrbRhR6",
          },

          {
            href: "https://everyname.xyz/",
            label: "everyname.xyz",
            position: "right",
          },
          {
            position: "right",
            href: "https://github.com/everyname-xyz",
            className: "navbar-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ["solidity"],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
