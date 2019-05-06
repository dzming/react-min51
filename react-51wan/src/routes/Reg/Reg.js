import { Component } from 'react'
// import { connect } from 'dva'
import styles from './Reg.css'
import axios from 'axios'
// 返回路由
import creatHistory from 'history/createHashHistory'
const history = creatHistory();

class Reg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', //账号
            password: '', // 密码
            checkN: '', // 确认密码
            type: 'worker', // 用户类型 默认求职者
            number: "",
            tishi:"",
            che:"",
            isok:""

        }
    }
    componentDidMount() {
        let username = localStorage.getItem("username");
        this.setState({
            username: username
        });
        if(!username){
            // 没有自动返回登录页面
            // this.props.history.push("/login");
        }else{
            this.props.history.push("/me");
        }
        this.yanzheng()
    }
    fanhui = () => {
        history.goBack();
    }
    // 简易验证码
    yanzheng(){
        this.state.number=""
        for (let i = 0; i < 4; i++) {
            this.state.number += parseInt(Math.random() * 10);
            
        }
        this.setState({
            checkNumber: this.state.number
        });
    }
    veryTel(){
        let pword = this.refs.password.value;
        let andpword = this.refs.andpassword.value;
        let warning1 = this.refs.warning1;
        if(pword === andpword){
            warning1.style.display = 'none'
        }else{
            warning1.style.display = 'block'
        }
    }
    veryTel1(){
        let checkN = this.refs.checkN.value;
        let warning2 = this.refs.warning2;
        console.log(checkN)
        if(checkN === this.state.checkNumber){
            warning2.style.display = 'none'
            console.log("yes")
        }
        else{
            warning2.style.display = 'block'
            console.log("no")
        }
    }
    gotoLogin() {
        this.props.history.push("/login");
      }
    toregister() {
        let uname = this.refs.username.value;
        let checkN = this.refs.checkN.value;
        let pword = this.refs.password.value;
        let che = this.refs.che.checked;
        let warning = this.refs.warning;
            if (uname && checkN && pword && checkN === this.state.checkNumber) {
                if(che){
                        axios
                          .post("http://47.106.252.139:5200/users/findUser", {
                            username: uname
                          })
                          .then(res => {
                            console.log(res)
                            if (res.data.length !== 1) {
                              axios
                                .post("http://47.106.252.139:5200/users/register", {
                                  username: uname,
                                  password: pword
                                })
                                .then(res => {
                                    alert("注册成功");
                                    this.gotoLogin();
                                });
                            }else{
                                warning.style.display = 'block'
                            }
                          });
                }else{
                    alert("请勾选协议")
                }
            }else{
                alert("请填写正确的的账号密码")
            }
        
      }
    render() {
        return (
            <div id={styles.reg}>
                <div className={styles.reg}>
                    <span className={styles.span1} onClick={this.fanhui.bind(this)}>返回</span>
                    <span>个性账号注册</span>
                    <span></span>
                </div>
                <div className={styles.clearfix}>
                    <div className={styles.inp}><input  ref="username"  className={styles.txt} placeholder="请输入您的用户名" /></div>
                    <div className={styles.inp}><input  onBlur={this.veryTel.bind(this)}  type="password" ref="password"  className={styles.txt} placeholder="创建密码（6-32位）" /></div>
                    <div className={styles.inp}><input onBlur={this.veryTel.bind(this)}  type="password" ref="andpassword"  className={styles.txt} placeholder="再次确认密码" /></div>
                    <div>
                        <input className={styles.txt2} onBlur={this.veryTel1.bind(this)} ref="checkN"  placeholder="输入右侧验证码" />
                        <span className={styles.span4}  onClick={this.yanzheng.bind(this)} >{this.state.number}</span>
                    </div>
                    
                    <div className={styles.inp2}>
                        <input type="checkbox" ref="che" />
                        <label>已阅读并同意 服务协议 和 隐私政策</label>
                    </div>
                    
                    <div >
                        <span onClick={this.toregister.bind(this)} className={styles.submit}>注册</span>
                    </div>
                    <br />
                    <div ref="warning" style={{color:'red',display:"none"}}>
                        用户名已存在
                    </div>
                    <div ref="warning1" style={{color:'red',display:"none"}}>
                        密码不一致
                    </div>
                    <div ref="warning2" style={{color:'red',display:"none"}}>
                        验证码错误
                    </div>
                    <div ref="warning3" style={{color:'red',display:"none"}}>
                        请勾选协议
                    </div>
                </div>
            </div>
        );
    }
    

    handleGoLogin() {
        this.props.history.push('/login')
    }
    // handleChange(key, val) {
    //     this.setState({
    //         [key]: val
    //     })
    // }
}
export default Reg
