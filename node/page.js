var fs = require('fs');

if (process.argv.length == 2) return console.log("创建基础页面失败！请输入page名称!");

const path_page = "./src/pages";
const pageName = process.argv[2];

// page模板
const pageTmp = `<template lang='pug'>
  .page-${pageName} ${pageName}
</template>
<script>
export default {
  name: 'page-${pageName}'
}
</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>`

// 创建page
function createPage() {
  let createDir = new Promise((resolve, reject) => {
    fs.mkdir(`${path_page}/${pageName}`, err => {
      if (err) reject(`报错信息: ${err.code}`);
      resolve(`${pageName}创建成功！`);
    })
  })

  createDir.then(res => {
    fs.writeFile(`${path_page}/${pageName}/index.vue`, pageTmp, err => {
      if (err) return console.log(err);
      console.log(res)
    });
  }).catch(err => {
    console.log(err);
  })
}

// 创建router
function createRouter() {
  // 写入router
  fs.readFile('./src/router/routes.js', 'utf-8', (err, data) => {
    if (err) return console.log(err);
    let header = data.split('[')[0];
    let bottom = data.split('[')[1].split(']')[1];
    let content = data.split('[')[1].split(']')[0];

    content = `${content}  {
      path: '/${pageName}',
      name: '${pageName}',
      component: () => import('@/pages/${pageName}')
    },
    `
    fs.writeFile('./src/router/routes.js', header + "[" + content + "]" + bottom, err => {
      if (err) return console.log(err);
    })
  })
}

// 创建scss
function createCss() {
  fs.writeFile(`${path_page}/${pageName}/index.scss`, "", err => {
    if (err) console.log(`报错信息: ${err.code}`);
    console.log(`${pageName}.scss创建成功！`);
  })
}

createPage();
createCss();
process.argv.length === 3 && createRouter();
