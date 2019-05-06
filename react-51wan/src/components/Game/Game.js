import {
    Component
} from 'react'
// import { Carousel, WingBlank } from 'antd-mobile';
import styles from './Game.css'
export default class Game extends Component {
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
                        gametypename: "战争策略",
                        imgurl: "http://m.51wan.com/ui/66/5cc172fa71781.jpg",
                        name: "三国志",
                        uid:"0",
                        playurl: "http://h5.51wan.com/play.html?gamename=sgz",
                        homeurl: "http://m.51wan.com/game/66.html?v=9462",
                        lujin:"下载"
                    },
                    {
                        gametypename: "H5游戏",
                        imgurl: "http://m.51wan.com/ui/65/5ca3182646b75.png",
                        name: "权倾天下",
                        uid:"1",
                        playurl: "http://h5.51wan.com/play.html?gamename=qqtx",
                        homeurl: "qqtx.51wan.com",
                        lujin:"开始游戏"
                    },
                    {
                        gametypename: "H5游戏",
                        imgurl: "http://m.51wan.com/ui/64/5cbd2f70ce6ec.png",
                        name: "江湖侠客令",
                        uid:"2",
                        playurl: "http://h5.51wan.com/play.html?gamename=jhxkl",
                        homeurl: null,
                        lujin:"开始游戏"
                    },
                    {
                        gametypename: "H5游戏",
                        imgurl: "http://m.51wan.com/ui/62/5cbd30f7228ef.png",
                        name: "斗罗大陆",
                        uid:"3",
                        playurl: "http://h5.51wan.com/play.html?gamename=dlh5",
                        homeurl: null,
                        lujin:"开始游戏"
                    },
                    {
                        gametypename: "H5游戏",
                        imgurl: "http://m.51wan.com/ui/61/5c988b7553532.png",
                        name: "捕鱼大奖赛",
                        uid:"4",
                        playurl: "http://h5.51wan.com/play.html?gamename=bydjs",
                        homeurl: "http://m.51wan.com/game/61.html?v=6634",
                        lujin:"开始游戏"
                    },
                    {
                        gametypename: "H5游戏",
                        imgurl: "http://m.51wan.com/ui/60/5c8b42b65816f.png",
                        name: "降龙之刃",
                        uid:"5",
                        playurl: "http://h5.51wan.com/play.html?gamename=xlzr",
                        homeurl: "http://m.51wan.com/game/60.html?v=1686",
                        lujin:"开始游戏"
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
                            style={{justifyContent:" space-between " , width: '160px', height:'130px' ,float:'left',margin:'10px 0 0 10px'}}
                        >
                            <img
                                src={val.imgurl}
                                alt=""
                               
                                style={{ width: '75px', height:'75px' ,float:'left'}}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            <div className={styles.names}>
                                <span className={styles.spans1}>{val.name}</span>
                                <span className={styles.spans2}>{val.gametypename}</span>
                            </div>
                            <a href={val.homeurl} className={styles.a1}>官网</a>
                            <a href={val.playurl} className={styles.a2}>{val.lujin}</a>
                        </li>
                    ))}
                </ul>
            
        );
    }
}