import React from 'react';

class InputNum extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tentNum : "",
      tentBase: null,
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.handleNum = this.handleNum.bind(this)
  }
  

  handleClick(){
    this.props.onClickCheck(this.state.tentNum, this.state.tentBase)
    this.setState({
      tentNum : ""
    })
  }

  handleChecked(e) {
    this.setState({
      tentBase: e.target.value
    });
  }

  handleNum(e){
    //入力が正しいかの判断がなされていない
    //正確に入力してもらうしかない

    this.setState({
      tentNum: e.target.value
    })
  }
  
  render() {
    const tentNum = this.state.tentNum

    return (
      <>
        <div style={{margin: "1rem 0"}} onChange={this.handleChecked}>
          <p>何進数で判断しますか？</p>
          <label>
            <input
              type="radio"
              value="2"
              name="base"
            />
              2進数
          </label>
          <label>
            <input
              type="radio"
              value="10"
              name="base"
            />
              10進数
          </label>
          <label>
            <input
              type="radio"
              value="16"
              name="base"
            />
              16進数
          </label>
        </div>
        <div >
          <input 
            type="text" 
            value={tentNum} 
            onChange={this.handleNum} 
            placeholder='数字を入力してください' 
          />
          <button onClick={this.handleClick}>判断してみる</button>
        </div>
        
        
      </>   
    )
  } 
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num : "",
      over100: null
    }
    this.onhandleNum = this.onhandleNum.bind(this)
  }

  onhandleNum(num, base){
    //評価
    this.setState({
      num : num
    })

    if (base === null){
      return
    }

    if (base === "2") {
      let dec = parseInt(num, 2)
      if (dec >= 100) {
        this.setState({
          over100: true
        })
      } else {
        this.setState({
          over100: false
        })
      }
    } else if (base === "10"){
      if (num >= 100) {
        this.setState({
          over100: true
        })
      } else {
        this.setState({
          over100: false
        })
      }
    } else if (base === "16") {
      let dec = parseInt(num, 16)
      if (dec >= 100) {
        this.setState({
          over100: true
        })
      } else {
        this.setState({
          over100: false
        })
      }
    }
  }

  render(){
    const num = this.state.num;
    const over100 = this.state.over100;

    return (
      <div style={{margin: "5rem"}}>
        <InputNum 
          num = {num}
          onClickCheck = {this.onhandleNum}
        />
        <p>num : { num } </p>
        <h3>{over100 ? "100以上です" : "100以上ではありません"}</h3>
      </div>
    );
  }
}



export default App;
