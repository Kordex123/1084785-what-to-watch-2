import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card";
import films from "../../mocks/films";
import VideoPlayer from "../video-player/video-player";
import {BrowserRouter} from "react-router-dom";

configure({adapter: new Adapter()});

it(`MovieCard (e2e) is correctly rendered after relaunch`, () => {

  // const clickHandler = jest.fn();
  const hoverHandler = jest.fn();
  const movieCard = mount(
      <BrowserRouter>
        <MovieCard
          film={films[4]}
          onHover={hoverHandler}
        />
      </BrowserRouter>);
  // movieCard.find(`a`).at(0).simulate(`click`);

  const videoPlayer = movieCard.find(VideoPlayer);
  const testLoad = () => { };
  const testPlay = () => { };
  videoPlayer.instance()._previewVideoRef = {
    current: {
      play: testPlay,
      load: testLoad,
    }
  };

  const videoPlayerNode = videoPlayer.find(`.player__video`);
  jest.useFakeTimers();
  videoPlayerNode.simulate(`mouseover`);
  jest.runAllTimers();
  expect(hoverHandler).toHaveBeenCalledTimes(1);
});

