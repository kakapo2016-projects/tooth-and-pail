import React from 'react'
import ReactDOM from 'react-dom'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';



export default React.createClass ({

  render: function () {
    const {
      FacebookShareButton,
      GooglePlusShareButton,
      TwitterShareButton,
      PinterestShareButton
    } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const GooglePlusIcon = generateShareIcon('google');
    const PinterestIcon = generateShareIcon('pinterest')

    return (
      <span id="share">
        <FacebookIcon size={32} round={true} />
        <TwitterIcon size={32} round={true} />
        <PinterestIcon size={32} round={true} />
        <GooglePlusIcon size={32} round={true} />
      </span>
      )
  }
})

