const visit = require("unist-util-visit");
const retext = require("retext");
const retextSmartypants = require("retext-smartypants");

function remarkSmartypants(options) {
  const processor = retext().use(retextSmartypants, options);
  function transformer(tree) {
    visit(tree, "text", node => {
      const newValue = String(processor.processSync(node.value));
      node.value = newValue;
    });
  }
  return transformer;
}

module.exports = remarkSmartypants;
