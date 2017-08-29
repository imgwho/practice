import React from 'react'

class Welcome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
      test: '1'
    }
    setInterval(()=>{
      this.setState({
        date: new Date(),
        test: 'setInterval'
      })
    },5000)

    console.log('在constructor里将props和state初始化好了')

  }

  componentWillMount(){
    console.log('运行到这里的话，说明马上要进行render')
  }

  render() {
    // return <h1>Hello {this.props.name}</h1>
    console.log('this is render')
    return (
      <div>
         <h1>Hello, {this.props.name}</h1>
         <h2>{this.state.date.toString()}</h2>
     </div>
    )
  }
  componentDidMount() {
    console.log('已经挂在到页面')
  }
  shouldComponentUpdate() {
    this.setState({
      date: new Date(), // 更新 date
      test: 'shouldComponentUpdate'
    })
    return true
  }
  componentWillUpdate() {

  }
  componentDidUpdate() {

  }
  componentWillUnmount() {
    console.log('要死了')
  }

}

export default Welcome