import React, { Component } from 'react';
import proptypes from 'prop-types';
import { render } from 'react-dom';
import './countDown.less';

class CountDown extends Component  {

  static defaultProps = {
    checkForm: () => true,
    onSubmit: () => {},
    onComplete: () => {},
    resetMark: false,
    tooltipsMap: {'type1': '对不起, 请输入电话号码','type2': '改电话已经被注册, 请直接登录','type2': '请输入正确的电话号码'},
    time: 5,
    lable: '$秒后可再次发送验证码',
    defaultText: '发送验证码',
  }

  static propTypes = {
    checkForm: proptypes.func,
    onSubmit: proptypes.func,
    onComplete: proptypes.func,
    resetMark: proptypes.bool,
    tooltipsMap: proptypes.object,
    time: proptypes.number,
    lable: proptypes.string,
    defaultText: proptypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      buttonText: '',
      cdMark: false,
      status: false
    }

    this.lable = '';
    this.time = 5;
    this.timekey = null;
    this.tooltipsMap = {};

    this.init = this.init.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.reset = this.reset.bind(this);
    this.checkInfo = this.checkInfo.bind(this);

  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    clearTimeout(this.timekey);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resetMark) {
      this.reset()
    }
  }

  init() {
    const { time, lable, defaultText, tooltipsMap, getReset } = this.props;
    this.time = time;
    this.lable = lable;
    this.defaultText = defaultText;
    this.tooltipsMap = tooltipsMap;

    this.setState({
      buttonText: defaultText,
      cdMark: false,
      status: false
    })
  }

  startCountDown() {
    const countDown = () => {
      this.timekey = setTimeout(() => {
        if (this.time > 1) {
          this.setState({buttonText: this.lable.replace('$', --this.time)});
          countDown();
        } else {
          this.init();
          this.props.onComplete();
        }
      }, 1000);
    };
    this.setState({
      cdMark: true,
      buttonText: this.lable.replace('$', this.time)
    }, () => countDown());
  }

  checkInfo() {
    const { onSubmit, checkForm } = this.props;
    const status = checkForm && checkForm();
    if (status === true) {
      this.startCountDown();
      onSubmit(this.reset); 
    }
    if (Object.keys(this.tooltipsMap).indexOf(status) !== -1) {
      this.setState({ status })
    }
  }

  reset() {
    clearTimeout(this.timekey);
    this.init();
  }

  render() {

    const { status, cdMark, buttonText } = this.state;

    return (
      <div className={`countdown ${status === false ? '' : 'wranning'}`}>
        <button disabled={cdMark} onClick={this.checkInfo}>
          { buttonText }
        </button>
        {
          status === false ? 
          null : 
          <span>{this.tooltipsMap[status]}</span>
        }
        {/*<button onClick={this.reset}>reset</button>*/}
      </div>
    )
  }
}

export default CountDown;