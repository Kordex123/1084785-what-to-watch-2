import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from "./video-player";
import films from "../../mocks/films";

configure({adapter: new Adapter()});

it(`VideoPlayer (e2e) is correctly rendered after relaunch`, () => {

  const videoPlayer = shallow(<VideoPlayer
    film={films[4]}
  />);

  const video = videoPlayer.find(`.player__video`);

  const testLoad = () => { };
  const testPlay = () => { };

  videoPlayer.instance()._previewVideoRef = {
    current: {
      play: testPlay,
      load: testLoad,
    }
  };

  jest.useFakeTimers();
  const spyTestPlay = jest.spyOn(videoPlayer.instance()._previewVideoRef.current, `play`);
  video.simulate(`mouseover`);
  jest.runAllTimers();
  expect(spyTestPlay).toBeCalledTimes(1);

  jest.useFakeTimers();
  const spyTestLoad = jest.spyOn(videoPlayer.instance()._previewVideoRef.current, `load`);
  video.simulate(`mouseleave`);
  jest.runAllTimers();
  expect(spyTestLoad).toBeCalledTimes(1);

});
