import React from 'react'
import ReactDOM from 'react-dom'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share'

export default React.createClass ({
  // displayIfReady: function () {
  //   if (this.props.title && this.props.) {
  //
  //   }
  // }

  render: function () {
    const {
      FacebookShareButton,
      GooglePlusShareButton,
      TwitterShareButton,
      PinterestShareButton
    } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook')
    const TwitterIcon = generateShareIcon('twitter')
    const GooglePlusIcon = generateShareIcon('google')
    const PinterestIcon = generateShareIcon('pinterest')

    return (
      <div className="story">
        <span id="share">
          <FacebookShareButton url={this.props.url} title={this.props.title}><FacebookIcon size={32} round={true} /></FacebookShareButton><TwitterShareButton url={this.props.url} title={this.props.title}><TwitterIcon size={32} round={true} /></TwitterShareButton><PinterestShareButton url={this.props.url} title={this.props.title} media={this.props.media}><PinterestIcon size={32} round={true} /></PinterestShareButton>
          <GooglePlusShareButton url={this.props.url} title={this.props.title}>
            <GooglePlusIcon size={32} round={true} />
          </GooglePlusShareButton>
        </span>
      </div>
    )
  }
})
