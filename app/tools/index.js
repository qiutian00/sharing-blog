const remark = require('remark');
const recommended = require('remark-preset-lint-recommended');
const html = require('remark-html');
// const report = require('vfile-reporter');

module.exports = {
  parseMarkdownToHtmlStr,
  parseMarkdownToTreeData
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

const unified = require('unified');
const markdown = require('remark-parse');
const P_TYPE = 'paragraph';
const TEXT_TYPE = 'text';

function parseMarkdownToTreeData (mrkdStr) {
  const treeData = unified()
    .use(markdown)
    .parse(mrkdStr || `# Hello world! 
    this is span show`);
  
  let returnStr = '文章内容截取';
  let childrenData = treeData.children;
  // get the second node or get the first node
  let secondNodeData = childrenData[0] ? childrenData[0].children : [];
  // console.log(childrenData[1]);
  for (let oneChildren of secondNodeData) {
    if (oneChildren.type == TEXT_TYPE) {
      returnStr = oneChildren.value;
    }
  }
  console.log(returnStr);
  return returnStr;
}

