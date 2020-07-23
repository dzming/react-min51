import {
    Component
} from 'react'
// import { Carousel, WingBlank } from 'antd-mobile';
import styles from './Remen.css'
export default class Remen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3','4','5','6'],
            // imgHeight: 176,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [
                    {
                        name: "大家都喜欢：",
                        homeurl: "null",
                        background: "#ffffff",
                        color:"#2B2B2B"
                    },
                    {
                        name: "武道至尊",
                        homeurl: "http://m.51wan.com/gamegift.html?gamename=wdzz",
                        background: "#FFC316",
                        color:"#FFF"
                    },
                    {
                        name: "圣物英雄",
                        homeurl: "http://m.51wan.com/gamegift.html?gamename=swyx",
                        background: "#FFC316",
                        color:"#FFF"
                    },
                    {
                        name: "降龙之刃",
                        homeurl: "http://m.51wan.com/gamegift.html?gamename=xlzr",
                        background: "#FFC316",
                        color:"#FFF"
                    },
                    {
                        name: "捕鱼大奖赛",
                        homeurl: "http://m.51wan.com/gamegift.html?gamename=bydjs",
                        background: "#FFC316",
                        color:"#FFF"
                    },
                    {
                        name: "斗罗大陆",
                        homeurl: "http://m.51wan.com/gamegift.html?gamename=dlh5",
                        background: "#FFC316",
                        color:"#FFF"
                    },
                    {
                        name: "江湖侠客令",
                        homeurl: "http://m.51wan.com/gamegift.html?gamename=jhxkl",
                        background: "#FFC316",
                        color:"#FFF"
                    },],
            });
        }, 100);
    }
    render() {
        return (
                <ul className={styles.navs}>
                    {this.state.data.map((val,index) => (
                        <li
                            key={index}
                            // href="http://www.alipay.com"
                            style={{ width:'60px',  height:'23px' ,float:'left',margin:'5px 5px 10px 15px'}}
                        >
                            <a href={val.homeurl} style={{background:'{val.background}'}} className={styles.a2}>{val.name}</a>
                        </li>
                    ))}
                </ul>
                
        );
    }
}