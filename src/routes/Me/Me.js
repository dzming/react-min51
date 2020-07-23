import { Component } from 'react'
// import { connect } from 'dva'
import styles from './Me.css'
// 返回路由
// import creatHistory from 'history/createHashHistory' 

// const history = creatHistory();

class Me extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', //账号
            password: ''
        }
    }
    fanhui = () => {
		this.props.history.push("/home");
    }
    componentDidMount() {
        let username = localStorage.getItem("username");
        this.setState({
            username: username
        });
        if(!username){
            // 没有自动返回登录页面
            this.props.history.push("/login");
        }
    }
     
    zhixiao(){
        localStorage.removeItem("username");
        this.props.history.push("/login");
    }
    
    render() {
        // this.props.navigation.goBack();
        let username = this.state.username
        return (
            <div id={styles.reg} >
                <div className={styles.reg}>
                    <span className={styles.span1} onClick={this.fanhui.bind(this)} >返回</span>
                    <span>登录</span>
                    <span onClick={this.zhixiao.bind(this)}>注销</span>
                </div>
                <div className={styles.clearfix}>
                    <div className={styles.content}>
                        <span className={styles.touxiang}>
                            <img src="http://images.51wan.com/v3/myCommunity/template/001/images/default/default_new120_m.jpg?ver=0" alt="" />
                        </span>
                        <span className={styles.xinxi}>
                            <h3>{username}</h3>
                            <p>uid:2441</p>
                        </span>
                        <span className={styles.xiugai}>
                            <a>修改密码</a>
                        </span>
                    </div>
                    <div className={styles.shouji}>
                        <a>您尚未绑定手机号，安全风险高，建议立即绑定</a>
                    </div>
                    <p className={styles.libao}>最近领取的游戏礼包</p>
                    <br />
                    <br />
                    <p style={{ textAlign: "center", color: " #666", fontSize: "12px" }}>暂无领取记录</p>
                </div>
            </div>
        );
    }
}
  export default Me
