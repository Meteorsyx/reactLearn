# React

创建命令：npx create-react-app <项目名字>

Material UI :npm install @mui/material @emotion/react @emotion/styled

react是把数据变为html视图的开源javascript库

facebook开发

### 一.React的特点

1.采用组件化模式、声明式编码，提高开发效率及组件复用率。

2.在React Native中可以使用React语法进行移动端开发。

3.使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互。



#### 1.1.4 React高效的原因

（1）使用虚拟DOM，不总是直接操作页面真实DOM。

（2）DOM Diffing算法，最小化页面重绘。



#### 1.2.React的基本使用



##### 1.2.2.相关js库

1）react.js: React核心库。

2）react-dom.js: 提供操作DOM的react扩展库。

3）babel.min.js: 解析JSX语法代码转为JS代码的库。



#### 关于虚拟DOM：

1.本质的Object类型的对象（一般对象）

2.虚拟DOM 属性比真实DOM 少，因为虚拟DOM是React内部在用， 无需真实DOM上那么多的属性。

3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上。



#### jsx语法规则：

js的语法扩展，需要通过解析工具解析才能在浏览器里运行

1.定义虚拟DOM时，不要写引号。

2.标签中混入JS表达式时要用{}。

3.样式的类名指定不要用class，要用className。

4.内联样式，要用style={{key:value}}的形式去写。

5.虚拟DOM只有一个根标签。

6.标签必须闭合。

7.标签首字母

​	（1）若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。

​	（2）若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

一定注意区分：【js语句（代码）】与【js表达式】

​	1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方

​		下面这些都是表达式：

​			(1). a

​			(2). a+b

​			(3). demo(1)

​			(4). arr.map()

​			(5). function test () {}

​	2.语句（代码）:

​		下面这些都是语句（代码）：

​			(1).if(){}

​			(2).for(){}

​			(3).switch(){case:xxxx}



### 二.React面向组件编程

#### 2.1.基本理解和使用

##### 2.1.1.使用React开发者工具调试

##### 2.1.2. 效果

函数式组件：

类式组件：

# 文档学习

### 1.创建和嵌套组件

创建

```js
function MyButton() {

  return (

    <button>I'm a button</button>

  );

}
```

嵌套进另一个组件

```js
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

你可能已经注意到 `<MyButton />` 是以大写字母开头的。你可以据此识别 React 组件。React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。

`export default` 关键字指定了文件中的主要组件。

### 2.使用 JSX 编写标签 

JSX 比 HTML 更加严格。你必须闭合标签，如 `<br />`。你的组件也不能返回多个 JSX 标签。你必须将它们包裹到一个共享的父级中，比如 `<div>...</div>` 或使用空的 `<>...</>` 包裹：

```js
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

### 3.显示数据

JSX 会让你把标签放到 JavaScript 中。而大括号会让你 “回到” JavaScript 中，这样你就可以从你的代码中嵌入一些变量并展示给用户。例如，这将显示 `user.name`：

```js
return (
  <h1>
    {user.name}
  </h1>
);
```

```js
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

```

在上面示例中，`style={{}}` 并不是一个特殊的语法，而是 `style={ }` JSX 大括号内的一个普通 `{}` 对象。当你的样式依赖于 JavaScript 变量时，你可以使用 `style` 属性。

### 4.条件渲染

React 没有特殊的语法来编写条件语句，因此你使用的就是普通的 JavaScript 代码。例如使用 [`if`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 语句根据条件引入 JSX：

```js
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

如果你喜欢更为紧凑的代码，可以使用 [条件 `?` 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)。与 `if` 不同的是，它工作于 JSX 内部：

```js
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

当你不需要 `else` 分支时，你还可以使用 [逻辑 `&&` 语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)：

```js
 <div>
  {isLoggedIn && <AdminPanel />}
</div>
```

### 5.渲染列表

你将依赖 JavaScript 的特性，例如 [`for` 循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 和 [array 的 `map()` 函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 来渲染组件列表。

注意， `<li>` 有一个 `key` 属性。对于列表中的每一个元素，你都应该传递一个字符串或者数字给 `key`，用于在其兄弟节点中唯一标识该元素。通常 key 来自你的数据，比如数据库中的 ID。如果你在后续插入、删除或重新排序这些项目，React 将依靠你提供的 key 来思考发生了什么。

```js
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

### 6.响应事件

你可以通过在组件中声明 **事件处理** 函数来响应事件：

```js
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

注意，`onClick={handleClick}` 的结尾没有小括号！不要 **调用** 事件处理函数：你只需 **把函数传递给事件** 即可。当用户点击按钮时 React 会调用你传递的事件处理函数。



# useState基础使用

useState 是一个 React Hook(函数)，它允许我们向组件添加一个状态变量，从而