// 项目的根组件
import { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const num = 100

  const style = {
    color:"red"
  }

  function getName(){
    return "tom"
  }

  const list = [
    {id:1001, name:"Vue"},
    {id:1002, name:"React"},
    {id:1003, name:"Angular"}
  ]

  const isLogin = true

  // 定义文章类型
  const type = 1

  // 定义函数（根据type返回不同模板）
  function artical(type){
    if(type === 0){
      return <div>我是无图文章</div>
    }else if(type === 1){
      return <div>我是单图模式</div>
    }else{
      return <div>我是三图模式</div>
    }
  }

  function handleClick(e,name){
    console.log("被点击了");
    console.log(e);
    console.log(name);
    console.log(this);
  }

  // 组件
  // function Button(){
  //   return <button>click me</button>
  // }
  // useState实现一个计数器
  // 调用useState添加了一个状态变量
  // count 状态变量
  // setCount 改变状态变量的方法
  const [count, setCount] = useState("你好")

  const addCount = (e) => {
    console.log(e);
    setCount("我不好")
  }

  return (
    <div className="App">
      this is a app
      {/* 使用引号传递字符串 */}
      {'this is a message'}
      {/* 识别js变量 */}
      {num}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}

      <div style={style}> this is a apple </div>
      <div>
        {/* 渲染列表 */}
        <ul>
          {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>

      {/* 逻辑与 && */}
      <div>
        {isLogin && <span>this is a span</span>}
        {isLogin ? <span>tom</span> : <span>jerry</span>}
      </div>

      {artical(type)}

      <button onClick={(e) => handleClick(e,"tom")}>点击</button>

      <Button></Button>

      <button onClick={addCount}>{count}</button>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}

export default App;
