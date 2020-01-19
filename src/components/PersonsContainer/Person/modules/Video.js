import React, {Component} from "react";

class Video extends React.Component {
  render() {
    return (
      <div className="person__video">
        <video controls="controls">
          <source src={"/data/videos/" + this.props.src + ".mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
        </video>
      </div>
    )
  }
}

export default Video;