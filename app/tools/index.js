const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');
const html = require('remark-html');
// const report = require('vfile-reporter');

module.exports = {
  parseMarkdownToHtmlStr
};

function parseMarkdownToHtmlStr(mrkdStr, callback) {
  remark()
    .use(recommended)
    .use(html)
    .process(mrkdStr || '## Hello world!', function(err, file) {
      callback ? callback(String(file)) : '';
      // console.error(report(err || file))
      // console.log(String(file));
    });
}

// todo
// const unified = require('unified');
// const markdown = require('remark-parse');

// function parseMarkdownToTreeData () {
//   const tree = unified()
//     .use(markdown)
//     .parse('# Hello world!');
//   console.log(tree);
// }

