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
          id: "api/getrecordsforadomain",
        },
        {
          type: "doc",
          id: "api/supportedTLDS",
        },
      ],
    },

    /*   {
      type: "link",
      label: "Wallet API", // The link label
      href: "/walletapi", // The external URL
    }, */

    {
      type: "html",
      value:
        "<hr style='background-color:#ab9fff'/><strong style='color: #ab9fff'>Additional</strong>",
      className: "sidebar-title",
      defaultStyle: true,
    },

    {
      type: "link",
      label: "Report a Bug", // The link label
      href: "https://github.com/everyname-xyz", // The external URL
      className: "bugReport",
    },

    // Shorthand syntax:
  ],
};
