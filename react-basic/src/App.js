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
    </div>
  );
}

export default App;
