import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from "./video-player";
import films from "../../mocks/films";

configure({adapter: new Adapter()});

it(`VideoPlayer (e2e) is correctly rendered after relaunch`, () => {

  const onHover = jest.fn();
  const videoPlayer = shallow(<VideoPlayer
    film={films[4]}
    onHover={onHover}
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
  video.simulate(`mouseover`);
  jest.runAllTimers();
  expect(onHover).toBeCalledTimes(1);

  // reset onHover's toBeCalledTimes counter
  jest.clearAllMocks();

  jest.useFakeTimers();
  video.simulate(`mouseleave`);
  jest.runAllTimers();
  expect(onHover).toBeCalledTimes(1);

  const spyTestPlay = jest.spyOn(videoPlayer.instance()._previewVideoRef.current, `play`);
  videoPlayer.setProps({isPlaying: true});
  expect(spyTestPlay).toBeCalledTimes(1);

  const spyTestLoad = jest.spyOn(videoPlayer.instance()._previewVideoRef.current, `load`);
  videoPlayer.setProps({isPlaying: false});
  expect(spyTestLoad).toBeCalledTimes(1);
});
