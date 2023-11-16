// 项目的根组件
import './App.css';

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

function Button(){
  return <button>click me</button>
}

function App() {
  
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
    </div>
  );
}

export default App;
