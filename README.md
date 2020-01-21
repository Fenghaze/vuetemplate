# QUICK START

## Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run serve
```

# Details

- 1、创建一个`App.vue`和`Index.vue`组件
    - `App.vue`：放置`<router-view>`
    - `Index.vue`：空白组件，放置`<router-link>`
- 2、创建两个子组件`Main.vue`和`New.vue`
- 3、创建`main.js`来**渲染**`App`，而不是`Index`
- 4、创建`router.js`，导入除了`App.vue`的所有组件

具体细节详见代码。
