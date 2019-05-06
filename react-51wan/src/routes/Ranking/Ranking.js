import { Component } from 'react'
// import { connect } from 'dva'
import styles from './Ranking.css'
import Nav from '../../components/Nav';

class Ranking extends Component {
    constructor(props){
        super(props)
        this.state = {}
       
    }
    
    render(){
        
        return (
           
            <div id={styles.reg}>
            
                <div className={styles.reg}>
                    <span className={styles.span1}>51wan手游</span>
                    <span></span>
                    <span className={styles.span2}></span>
                </div>
                <div className={styles.clearfix}>
                    <Nav />
                </div>   
            </div>
        )
    }
}
export default Ranking