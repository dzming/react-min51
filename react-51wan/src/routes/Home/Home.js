import { Component } from '../../../node_modules/react'
// import { connect } from 'dva'
import styles from './Home.css'
import NavContent from '../../components/NavContent/NavContent';
import { Tabs, Badge } from '../../../node_modules/antd-mobile';
import Carousels from '../../components/Carousels/Carousels'
import Remen from '../../components/Remen/Remen'
class Ranking extends Component {
    constructor(props){
        super(props)
        this.state = {}
       
    }
    goProduct = () => {
		this.props.history.push({
			pathname:'/login'
		});
	}
    render(){
        const tabs = [
            { title: <Badge >推荐  </Badge> },
            { title: <Badge >热门礼包</Badge> },
            { title: <Badge >排行榜</Badge> },
            { title: <Badge >活动</Badge> },
            { title: <Badge >畅玩版</Badge> },
          ];
        return (
           
            <div id={styles.reg}>
            
                <div className={styles.reg}>
                    <span className={styles.span1}>51wan手游</span>
                    <span></span>
                    <span className={styles.span2} onClick={this.goProduct.bind(this)}></span>
                </div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    
                    tabBarActiveTextColor={'#ff6d00'}
                    tabBarUnderlineStyle={{'borderColor':'#ff6d00'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <Carousels className={styles.clearfix}/>
                    <div style={{ justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <Remen/>
                        <div className={styles.remens}>
                            <img src="http://m.51wan.com/ui/8/5c203d139d06b.png" alt="" className={styles.remenimg}></img>
                            <h3 className={styles.h1}>《COK》冬日双旦礼包</h3>
                            <h3 className={styles.h2}>《COK》冬日双旦礼包</h3>
                            <a className={styles.a1} href="http://m.51wan.com/gift/50.html?v=4153">领取</a>
                            <p className={styles.p1}>
                                剩余：
                                <span style={{color: '#FF6D00'} } >5467</span>
                            </p>
                            
                        </div>
                    </div >
                        <NavContent className={styles.clearfix}/>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    活动
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    畅玩版
                    </div>
                </Tabs>
               
            </div>
        )
    }
}
export default Ranking