import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from "./video-player";
import films from "../../mocks/films";

configure({adapter: new Adapter()});

it(`VideoPlayer (e2e) is correctly rendered after relaunch`, () => {

  jest.useFakeTimers();
  const videoPlayer = mount(<VideoPlayer
    film={films[4]}
  />);

  const video = videoPlayer.find(`.player__video`);
  const videoNode = window.HTMLMediaElement.prototype;
  videoNode.load = () => { };
  videoNode.play = () => { };
  const spyVideoPlay = jest.spyOn(videoNode, `play`);
  const spyVideoLoad = jest.spyOn(videoNode, `load`);

  video.simulate(`mouseover`);
  jest.runAllTimers();

  expect(videoPlayer.state().isPlaying).toBe(true);
  expect(spyVideoPlay).toBeCalledTimes(1);
  expect(spyVideoLoad).toBeCalledTimes(0);

  jest.clearAllMocks();
  video.simulate(`mouseleave`);

  expect(videoPlayer.state().isPlaying).toBe(false);
  expect(spyVideoPlay).toBeCalledTimes(0);
  expect(spyVideoLoad).toBeCalledTimes(1);

});
