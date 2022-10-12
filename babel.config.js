/* eslint-disable prettier/prettier */
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "nativewind/babel",
    { tailwindConfig: "./tailwind.native.config.js" },
  ],
};
