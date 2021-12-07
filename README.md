## 准备

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) -项目开发环境
- [tsdx](https://tsdx.io/) - 了解打包第三方库
- [rollup](https://www.rollupjs.com/) - JavaScript 模块打包器
- [TypeScript](https://www.typescriptlang.org/) - 熟悉`TypeScript`基本语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [less](https://less.bootcss.com/) - 熟悉 less 基本语法
- [css(var)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) - 熟悉 CSS自定义属性
## 安装使用

- 获取项目代码

```bash
git clone http://icode.kaikeba.com/kmos/kmos-paysdk-reactui.git
```

- 安装依赖

```bash
cd kmos-paysdk-reactui

yarn install

cd example

yarn install

```

- 运行

```bash
cd kmos-paysdk-reactui
 
 yarn start

 cd example

yarn start
```

## 预览

- [本地预览](http://localhost:1234/) - 开发环境 两个同时启动


- 打包

```bash
yarn build 正式线打包
```

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

1. 创建自己的分支: `git checkout -b feat/xxxx`
2. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
3. 推送您的分支: `git push origin feat/xxxx`

### 参数说明
|  参数   | 说明  | 类型  | 默认值 | 是否必传 |
|  ----  | ----  |----  | ---- |  ---- |
| visible  | 组件是否可见 |   boolean   |    false   | 是|
| onClose  | 关闭组件 |   function   |     -  | 是 |
| title  | 标题 |   string   |   无   | 是 |
| mark  | 遮罩层是否显示 |   boolean   |   true   | 是 |
| markStyle  | 遮罩层style |   React.CSSProperties   |  rgba(55, 55, 55, 0.6)     | 否 |
| mode  | modal动画 |   'left''bottom'   |   bottom   | 否 |
| orderNo  | 订单号 |   number   |    -   | 是 |
| openid  | 用户openid |   string   |    -   | 是 |
| unionid  | 用户unionid |   string   |    -   | 是 |
| channelCode  | 渠道 |   string   |    -   | 是 |
| courseCode  | 课程 |   string   |    -   | 是 |
| userId  | 用户id |   string   |    -   | 是 |
| onError  | 接口报错 |   (msg:string)=>{}   |    toast   | 否 |
| onSuccess  | 成功回调 |   (msg:string)=>{}   |       | 否 |

## 使用
``` javascript
  npm install kmos-paysdk-reactui
  or
  yarn add kmos-paysdk-reactui
  import { PayList,PaySdk } from "kmos-paysdk-reactui";

  PaySdk.init('test')

   <PayList
        visible={visible}
        onClose={handleClose}
        title={"请选择支付方式"}
        orderNo={order && order.orderNo}
        markStyle={{ backgroundColor: "red" }}
        openid="o0IXitx_lVGqIU0Q26qYojqv4pAs"
        unionid="ocPQA1dkMB11rqsgUEktzVjISuQk"
        channelCode="9zd1lmrs9i"
        courseCode="0307l3nhxh"
      />

```

## 主题颜色
```css
    :root:root {
      --kpui-color-primary: red;
      --kpui-color-weak: yellow;
    }
````

## 目录结构

```
.
├── dist #打包文件
├── example #测试项目
├── src #项目代码
│   ├── assets #静态资源
│   ├── components #组件
│   ├── design #样式
│   ├── hooks #hooks
│   ├── index.ts #入口文件
│   └── utils #工具
├── stories #文档项目
└── test #测试项目
```
