var fs = require('fs');

if (process.argv.length == 2) return console.log("创建基础页面失败！请输入page名称!");

const path_page = "./src/pages";
const path_scss = "./src/scss/pages";
const pageName = process.argv[2];

// page模板
const pageTmp = `<template lang='pug'>
  .demo1 ${pageName}
</template>
<script>
export default {
  name: 'page-${pageName}'
}
</script>`

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
  let _createCss = new Promise((resolve, reject) => {
    fs.writeFile(`${path_scss}/${pageName}.scss`, "", err => {
      if (err) reject(`报错信息: ${err.code}`);
      resolve(`${pageName}.scss创建成功！`);
    })
  })

  _createCss.then(() => {
    fs.readFile('./src/scss/index.scss', 'utf-8', (err, data) => {
      if (err) return console.log(err);
      let content = `${data}
@import "./pages/${pageName}.scss";`

      fs.writeFile('./src/scss/index.scss', content, err => {
        if (err) return console.log(err);
      })
    })
  }).catch(err => {
    console.log(err);
  })
}

createPage();

// 判断创建情况
switch (process.argv.length) {
  case 3:
    createRouter();
    createCss();
    break;
  case 4:
    process.argv[3] == 'noscss' ? createRouter() : createCss();
    break;
  case 5:
    break;
}