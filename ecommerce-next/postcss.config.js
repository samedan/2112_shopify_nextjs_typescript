module.exports = {
  plugins: ["tailwindcss", "postcss-nesting", "autoprefixer"],
};
// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require("tailwindcss/nesting")(require("postcss-nesting")),
//     require("tailwindcss"),
//     require("autoprefixer"),
//   ],
// };
// just for testing
// module.exports = {
//   plugins: [require("tailwindcss")],
// };
