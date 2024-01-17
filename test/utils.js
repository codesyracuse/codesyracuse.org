export const buildBlockContent = (text = "") => [
  {
    _type: "block",
    _key: "321",
    style: "normal",
    markDefs: [
      {
        _type: "link",
        _key: "456",
        href: "https://www.portabletext.org",
      },
    ],
    children: [
      {
        _type: "span",
        _key: "123",
        text: text,
        marks: [],
      },
    ],
  },
];
