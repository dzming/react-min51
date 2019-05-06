import { Component } from 'react'
// import { connect } from 'dva'
import styles from './NavContent.css'

import CountDown from '../countDown/countDown';


class NavContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    "name": "三国志",
                    "abbreviated": "sgz",
                    "htmlurl": "http://m.51wan.com/game/66.html?v=9462",
                    "publicity": "战争策略，热血重现！",
                    "size": "",
                    "packhfurl": "http://114.112.71.132/game/",
                    "packageurl": "",
                    "imgurl": "http://m.51wan.com/ui/66/5cc172fa71781.jpg",
                    "downcount": 404
                },
                {
                    "name": "权倾天下",
                    "abbreviated": "qqtx",
                    "htmlurl": null,
                    "publicity": "秦有锐士，谁与争雄！",
                    "size": "",
                    "packhfurl": "http://pubapi.chinagames.net/Cooperate/wan51/qqtx/Entry",
                    "packageurl": "",
                    "imgurl": "http://m.51wan.com/ui/65/5ca3182646b75.png",
                    "downcount": 10
                },
                {
                    "name": "江湖侠客令",
                    "abbreviated": "jhxkl",
                    "htmlurl": null,
                    "publicity": "正版武侠IP授权，带你称霸武林！",
                    "size": "",
                    "packhfurl": "http://h5.sdk.quicksdk.net/webGame/play/productCode/90540191067663712107707265526106/channelCode/4297",
                    "packageurl": "",
                    "imgurl": "http://m.51wan.com/ui/64/5cbd2f70ce6ec.png",
                    "downcount": 1200
                },
                {
                    "name": "大明王爷",
                    "abbreviated": "dmwy",
                    "htmlurl": null,
                    "publicity": "醒掌天下权，醉卧美人膝",
                    "size": "",
                    "packhfurl": "http://h5.sdk.quicksdk.net/webGame/play/productCode/99547462444990015672489845968657/channelCode/4297",
                    "packageurl": "",
                    "imgurl": "http://m.51wan.com/ui/63/5cbd2eee17a8e.png",
                    "downcount": 1100
                },
                {
                    "name": "斗罗大陆",
                    "abbreviated": "dlh5",
                    "htmlurl": null,
                    "publicity": "《斗罗大陆》H5正版授权巨作",
                    "size": "",
                    "packhfurl": "http://h5.sdk.quicksdk.net/webGame/play/productCode/61756842028923108102517758455841/channelCode/4297",
                    "packageurl": "",
                    "imgurl": "http://m.51wan.com/ui/62/5cbd30f7228ef.png",
                    "downcount": 1000
                },
                {
                    "name": "捕鱼大奖赛",
                    "abbreviated": "bydjs",
                    "htmlurl": "http://m.51wan.com/game/61.html?v=6634",
                    "publicity": "疯狂打鱼，全屏爆炸",
                    "size": "",
                    "packhfurl": "http://xyx.yulebuyu.com/main.html?type=wap&cps=50&cpsFile=1",
                    "packageurl": "",
                    "imgurl": "http://m.51wan.com/ui/61/5c988b7553532.png",
                    "downcount": 10
                },
                {
                    "name": "降龙之刃",
                    "abbreviated": "xlzr",
                    "htmlurl": "http://m.51wan.com/game/60.html?v=1686",
                    "publicity": "修仙问道，一路诛神杀魔",
                    "size": "959.8 KB",
                    "packhfurl": "http://csxxh5api.9217web.com/Login/weile?zmcon=8745dcf5a356f01ecc05e3632dcb3e72",
                    "packageurl": "http://imgs.m.51wan.com/sdkpackage/60/20190425135232-1.0.apk",
                    "imgurl": "http://m.51wan.com/ui/60/5c8b42b65816f.png",
                    "downcount": 10
                },
                {
                    "name": "圣物英雄",
                    "abbreviated": "swyx",
                    "htmlurl": "http://m.51wan.com/game/58.html?v=7235",
                    "publicity": "全新的游戏冒险",
                    "size": "",
                    "packhfurl": "http://698wan.188wan.com/platform/wuyiwan/login/75",
                    "packageurl": "",
                    "imgurl": "http://m.51wan.com/ui/58/5baaef49b9049.png",
                    "downcount": 1010
                },
                {
                    "name": "武道至尊",
                    "abbreviated": "wdzz",
                    "htmlurl": "http://m.51wan.com/game/49.html?v=8744",
                    "publicity": "热血PVP 彰显合作战斗快感！！",
                    "size": "512.4 KB",
                    "packhfurl": "http://h5sdk.playtai.com:8080/h5distribute/bridge/51wan/login/wdzz",
                    "packageurl": "http://imgs.m.51wan.com/sdkpackage/49/20171018172750-1.0.apk",
                    "imgurl": "http://m.51wan.com/ui/49/59daddd688995.png",
                    "downcount": "2.1万"
                },
                {
                    "name": "COK列王的纷争",
                    "abbreviated": "cok",
                    "htmlurl": "http://m.51wan.com/game/8.html?v=1663",
                    "publicity": "运筹帷幄 决胜千里",
                    "size": "110.7 MB",
                    "packhfurl": "",
                    "packageurl": "http://imgs.m.51wan.com/sdkpackage/8/20190426175902-4.31.0.apk",
                    "imgurl": "http://m.51wan.com/ui/8/5a810aeba0f35.png",
                    "downcount": "440.0万"
                }
            ]

        }

    }



    componentDidMount() {
        this.setState({
            list: this.state.list
        })
        console.log(this.state.list)
    }
    render() {

        return (

            <div id={styles.NavCt}>
                <div>
                    
                </div>
                <ul className={styles.navul}>
                    {this.state.list.map((item,idx) => {
                        return (
                            <li key={idx}>
                                <dl>
                                    <dt className={styles.paihang}>{idx+1}</dt>
                                    <dt>
                                        <a href={item.htmlurl}>
                                            <img src={item.imgurl} alt="" /></a>
                                    </dt>
                                    <dt className={styles.dlb}>
                                        <h3>
                                            <a className={styles.gamename} href={item.htmlurl}>{item.name}</a>
                                        </h3>
                                        <p className={styles.gamedetails}>{item.publicity}</p>
                                    </dt>
                                    <dd>
                                        {/* <a className="download" data-name={item.abbreviated} href="">下载</a> */}
                                        <CountDown/>
                                    </dd>
                                </dl>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default NavContent