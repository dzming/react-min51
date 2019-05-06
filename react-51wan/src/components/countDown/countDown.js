import { Component } from 'react'
import { Modal,Button, WhiteSpace, WingBlank } from 'antd-mobile';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
  
  class CountDown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal1: false,
        modal2: false,
      };
    }
    showModal = key => (e) => {
      e.preventDefault(); // 修复 Android 上点击穿透
      this.setState({
        [key]: true,
      });
    }
    onClose = key => () => {
      this.setState({
        [key]: false,
      });
    }
  
    onWrapTouchStart = (e) => {
      // fix touch to scroll background page on iOS
      if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        return;
      }
      const pNode = closest(e.target, '.am-modal-content');
      if (!pNode) {
        e.preventDefault();
      }
    }
  
    render() {
      return (
        <WingBlank>
          <Button onClick={this.showModal('modal1')}>下载</Button>
          <WhiteSpace />
          <Modal
            visible={this.state.modal1}
            transparent
            maskClosable={false}
            onClose={this.onClose('modal1')}
            title="IOS版本敬请期待"
            footer={[{ text: 'Ok', onPress: () => { this.onClose('modal1')(); } }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          >
            <div style={{ height: 50, overflow: 'auto' }}>
                
                如果您是安卓手机，请手动修改您的<br />
                浏览器标识(UA),刷新页面再次下载!<br />
            </div>
          </Modal>

         
        </WingBlank>
      );
    }
  }
export default CountDown