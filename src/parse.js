const { spawnSync } = require("child_process");
const path = require("path");

module.exports = (text, _parsers, _opts) => {
  const child = spawnSync(
    "java",
    ["-jar", path.join(__dirname, "./kotato"), "parse"],
    {
      input: text
    }
  );

  const error = child.stderr.toString();
  if (error) {
    throw new Error(error);
  }

  const response = child.stdout.toString();
  console.log(JSON.parse(response));
  return JSON.parse(response);
};
