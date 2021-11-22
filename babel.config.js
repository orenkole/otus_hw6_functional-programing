module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": ["@emotion/babel-plugin"]
};