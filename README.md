# ltoast

> A Vue.js project

## 插件安装
```javascript
npm i ltoast
```
## 引入插件
```javascript
import Vue from 'vue';
import ltoast from 'ltoast';
import 'ltoast/lib/index.css';

Vue.use(ltoast);
// 全局配置
Vue.use(ltoast, {
type: 'info',
duration: 2000
});
```

## 用法示例
```javascript
   this.$toast('Hello World');
   this.$toast('Hello World'， 2000);
   this.$toast('Hello World', {type: 'success'，duration： 3000});
   this.$toast.success('Hello World');
```

## API
|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|type|弹窗类型|String|'info', 'success', 'error'|'info'|
|duration|持续的时间|Number||2000|

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
