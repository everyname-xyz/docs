module.exports = {
  mySidebar: [
    // Normal syntax:
    "intro",
    {
      type: "category",
      label: "Overview",
      collapsed: false,

      items: [
        {
          type: "doc",
          id: "overview/whatIs",
        },
      ],
    },

    {
      type: "category",
      collapsed: false,
      label: "Everyname API",
      items: [
        {
          type: "doc",
          id: "api/name",
        },
        {
          type: "doc",
          id: "api/address",
        },
        {
          type: "doc",
          id: "api/supportedTLDS",
        },
      ],
    },

    {
      type: "link",
      label: "API Docs", // The link label
      href: "/api", // The external URL
    },

    {
      type: "html",
      value:
        "<hr style='background-color:#7a7a7a'/><strong style='color: #7a7a7a'>Additional</strong>",
      className: "sidebar-title",
      defaultStyle: true,
    },

    {
      type: "link",
      label: "Report a Bug", // The link label
      href: "https://github.com/everyname-xyz", // The external URL
      className: "bugReport",
    },
    {
      type: "link",
      label: "Add a Namespace", // The link label
      href: "https://github.com/everyname-xyz/Public", // The external URL
      className: "bugReport",
    },

    // Shorthand syntax:
  ],
};
