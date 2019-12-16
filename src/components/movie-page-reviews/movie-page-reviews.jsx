import React from 'react';
import PropTypes from "prop-types";
import Namespace from "../../reducer/namespace";
import {connect} from "react-redux";

const MoviePageReviews = ({comments}) => {
  let firstColComments = [];
  let secondColComments = [];
  const sortedComments = comments.sort((comment1, comment2) => (new Date(comment1.date) - new Date(comment2.date)));
  if (sortedComments) {
    firstColComments = sortedComments.slice(0, Math.ceil(comments.length / 2));
    secondColComments = sortedComments.slice(Math.ceil(comments.length / 2));
  }
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstColComments.map((comment) => (
          renderComment(comment)
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {secondColComments.map((comment) => (
          renderComment(comment)
        ))}
      </div>
    </div>
  );
};

const renderComment = (comment) => {
  return (
    <div key={comment.date} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.content}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>{comment.date}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating}</div>
    </div>
  );
};

MoviePageReviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  })
  ),
  filmId: PropTypes.number
};

const mapStateToProps = (state) => ({
  comments: state[Namespace.COMMENT].comments,
});

export default connect(mapStateToProps)(MoviePageReviews);

