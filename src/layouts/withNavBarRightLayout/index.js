import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import ShareActionSheet from '@components/ShareActionSheet'
import './style.less'

const withNavBarBasicLayout = title => {
  return WrappedComponent => {
    return class extends Component {
      render() {
        return (
          <div className="wrap RightNavBar">
            <NavBar
              className="header"
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={this.goBack}
              rightContent={
                <ShareActionSheet icon={<Icon key="1" type="ellipsis" />} />
              }
            >
              <h1>{title}</h1>
            </NavBar>
            <div className="content">
              <WrappedComponent {...this.props} />
            </div>
          </div>
        )
      }
      goBack = () => {
        this.props.history.goBack()
      }
    }
  }
}
export default withNavBarBasicLayout
