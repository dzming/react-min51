import { Component } from 'react'
// import { connect } from 'dva'
import styles from './Login.css'
// 返回路由
// import creatHistory from 'history/createHashHistory' 
import axios from 'axios'
import qs from "qs";
// const history = creatHistory();

class Reg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', //账号
            password: ''
        }
    }
    componentDidMount() {
        let username = localStorage.getItem("username");
        this.setState({
            username: username
        });
        if(!username){
            // 没有自动返回登录页面
            this.props.history.push("/login");
        }else{
            this.props.history.push("/me");
        }
    }
    fanhui = () => {
		this.props.history.push("/home");
    }
    goReg = () => {
		this.props.history.push({
			pathname:'/reg'
		});
    }
    tologin() {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        axios.post("http://47.106.252.139:5200/users/login", 
            qs.stringify(
                {
                    username:username,
                    password:password,
                },
                {
                    headers:{"Content-type":"application/x-www-form-urlencoded"}
                },
                {
                    withCredentials:true
                }
            )
        )
        .then((res)=>{
            if(res.data.status==="success"){
                console.log(666)
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("username",res.data.username);
                this.props.history.push("/me");
                
            }else{
                alert("密码错误或者该账号未注册");
            }
            
        })
    }
    render() {
        // this.props.navigation.goBack();
        return (
            <div id={styles.reg} >
                <div className={styles.reg}>
                    <span   className={styles.span1}  onClick={this.fanhui.bind(this)} >返回</span>
                    <span>登录</span>
                    <span>找回密码</span>
                </div>
                <div className={styles.clearfix}>
                    <div className={styles.inp}><input className={styles.txt} ref="username"  placeholder="请输入您的用户名"/></div>
                    <div className={styles.inp}><input type="password"  className={styles.txt} ref="password"  placeholder="请输入您的密码"/></div>
                    
                    <div >
                        <span className={styles.submit} onClick={this.goReg.bind(this)}>注册</span>
                    </div>
                    <div >
                        <span className={styles.submit} style={{marginRight:"0",background:"#BCE099"}} onClick={this.tologin.bind(this)}>登录</span>
                    </div>
                    <h4>第三方账号登录</h4>

                    <div>
                        <img src="http://m.51wan.com/i/login-tencent.png" alt="" style={{ width: "49%", height: "42px" ,float: "left",marginRight:"7px"}}/>
                    </div>

                    <div>
                        <img src="http://m.51wan.com/i/login-sina.png" alt="" style={{ width: "49%", height: "42px" ,float: "left" }}/>
                    </div>
                </div> 
            </div>
        );
    }
}
  export default Reg
