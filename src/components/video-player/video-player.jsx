import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._previewVideoRef = React.createRef();
    this.timeout = null;

    this.state = {
      isPlaying: false,
    };

    this._onPlayPreviewMovie = () => {
      this.timeout = setTimeout(() => {
        this.setState({
          isPlaying: true,
        });
      }, 1000);
    };

    this._onStopPreviewMovie = () => {
      clearTimeout(this.timeout);
      this.setState({
        isPlaying: false,
      });
    };
  }

  render() {
    const {previewMovieImage, previewVideoLink} = this.props.film;
    return (
      <React.Fragment>
        <video
          onMouseOver={this._onPlayPreviewMovie}
          onMouseLeave={this._onStopPreviewMovie}
          className="player__video"
          ref={this._previewVideoRef}
          poster={`img/${previewMovieImage}`}
          type = "video/mp4"
          muted="muted">
          <source src={previewVideoLink}/>
        </video>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const video = this._previewVideoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    previewMovieImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  })
};
