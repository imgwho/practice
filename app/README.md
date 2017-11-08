# 下面是一个React的倒计时按钮组件

## 合适使用

- 需要一定时间间隔后再进行某些操作的时候

## API

```jsx
<CountDown />
```

> 所有的参数都不为必传参数

| 参数 | 说明 | 类型 | 默认值 |
|:---:|:----:|:---:|:-----:|
| checkForm | 点击按钮后检测表单信息 | Function | () => true | 
| onSubmit | 点击按钮后, 发生的事件。 比如向后台去数据, 第一个参数为组件的重置函数 | Function | () => {}|
| onComplete | 倒计时结束后需要发生的事件 | Function | () => {}|
| resetMark | 重置标志 | Boolean | false | 
| tooltipsMap | 警告或者错误提示对象 | Object | {'type1': '对不起, 请输入电话号码','type2': '改电话已经被注册, 请直接登录','type2': '请输入正确的电话号码'} |
| time | 倒计时的时长 | Number | 5 |
| label | 倒计时开始后按钮的文字, 可自定义, 用‘$’符号占据时间的位置 | String | '$秒后可再次发送验证码' 
| defaultText | 默认状态下按钮的文字 | String | '发送验证码'|

