<!--
 * @Descripttion: 
 * @version: 
 * @Author: dal
 * @Date: 2021-10-26 17:14:54
 * @LastEditors: dal
 * @LastEditTime: 2021-10-26 17:33:57
-->
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 目录介绍
src
| -- components  # 公共组件
        | -- commonA
                | -- index.jsx
                | -- style.css
| -- reducers # 公共 reducers
| -- actions # 公共 actions
| -- sagas # 公共 sagas，如果需要的话
| -- containers
        | -- A
             | -- components # 私有组件
                     | -- A1
                           | -- index.jsx
                           | -- style.css
             | -- index.jsx # react 组件
             | -- actions.js # action 文件，可视复杂度成为一个文件夹
             | -- style.css # 样式文件，或者 less / sass 
             | -- reducers.js # reducer 文件，可视复杂度成为一个文件夹
             | -- sagas.js # sagas 文件，可视复杂度成为一个文件夹
        | -- B
             | -- index.jsx 
             | -- actions
                     | -- index.js
                     | -- actionA.js
                     | -- actionB.js
             | -- style.css
             | -- reducers.js      
                     | -- index.js
                     | -- reducerA.js
                     | -- reducerB.js
| -- main.js # 入口文件
| -- routes.js # 路由，简单的话可以写在 main.js 里