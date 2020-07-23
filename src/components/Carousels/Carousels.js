import {
    Component
} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import styles from './Carousels.css'
import Game from '../../components/Game/Game'
export default class Carousels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [
                    'http://m.51wan.com/pic/5cac3a3718484.jpg',
                    'http://m.51wan.com/pic/5cac57bb912a7.jpg',
                    'http://m.51wan.com/pic/5cac58069ab2e.jpg'],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank 
  s
            >
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            // href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <div className={styles.navs}>
                    <img src="http://m.51wan.com/i/hotgame.png" alt="" className={styles.navimgs}/>
                    <p className={styles.navh2}>热门游戏</p>
                    <p className={styles.navh3}>查看更多 ></p>
                </div>
                
                <div className={styles.p1}><Game /></div>
                
                <div className={styles.rems}>
                    <img src="http://m.51wan.com/i/hotgifts.png" alt="" className={styles.remimgs}/>
                    <p className={styles.remsh2}>热门礼包</p>
                </div>
                <div className={styles.botns}>
                    <img src="http://m.51wan.com/pic/5c203827e184d.jpg" alt="" className={styles.botnimgs}/>
                    <p className={styles.botnp}>《COK》冬日双旦礼包</p>
                </div>
            </WingBlank>
            
        );
    }
}