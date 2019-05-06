import {
    Component
} from 'react'
import Carousels from './Carousels/Carousels';
import { Tabs, Badge } from 'antd-mobile';
// import './Nav.css'
// import { connect } from 'dva';
// props和state区别
// state组件的私有数据 内部数据
// props来自于父组件的（仓库） 外部数据
class Nav extends Component {
    constructor(props) {
        // 继承于父组件的props
        super(props)
        this.state = {}
    }
    
    render() {
        const tabs = [
            { title: <Badge >推荐  </Badge> },
            { title: <Badge >热门礼包</Badge> },
            { title: <Badge >排行榜</Badge> },
            { title: <Badge >活动</Badge> },
            { title: <Badge >畅玩版</Badge> },
          ];
         
        return (
            <div>
                <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <Carousels />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        活动
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        畅玩版
                        </div>
                    </Tabs>
                    {/* <WhiteSpace /> */}
                   
            </div>
        )
    }
}
export default Nav
  
    