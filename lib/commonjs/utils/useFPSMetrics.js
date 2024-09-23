"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFPSMetric = useFPSMetric;
var _react = require("react");
function useFPSMetric() {
  const [frameState, setFrameState] = (0, _react.useState)({
    fps: 0,
    lastStamp: Date.now(),
    framesCount: 0,
    average: 0,
    totalCount: 0,
    lowestFps: 240
  });
  (0, _react.useEffect)(() => {
    // NOTE: timeout is here
    // because requestAnimationFrame is deferred
    // and to prevent setStates when unmounted
    let timeout = null;
    requestAnimationFrame(() => {
      timeout = setTimeout(() => {
        const currentStamp = Date.now();
        const shouldSetState = currentStamp - frameState.lastStamp > 1000;
        const newFramesCount = frameState.framesCount + 1;
        // updates fps at most once per second
        if (shouldSetState) {
          const newValue = frameState.framesCount;
          const totalCount = frameState.totalCount + 1;
          // I use math.min here because values over 60 aren't really important
          // I calculate the mean fps incrementally here instead of storing all the values
          const newMean = Math.min(frameState.average + (newValue - frameState.average) / totalCount, 60);
          setFrameState({
            fps: frameState.framesCount,
            lastStamp: currentStamp,
            framesCount: 0,
            average: newMean,
            totalCount,
            lowestFps: Math.min(frameState.lowestFps, frameState.framesCount)
          });
        } else {
          setFrameState({
            ...frameState,
            framesCount: newFramesCount
          });
        }
      }, 0);
    });
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [frameState]);
  const resetLowFpsFn = () => {
    setFrameState({
      ...frameState,
      lowestFps: 240
    });
  };
  return {
    average: frameState.average,
    fps: frameState.fps,
    lowestFps: frameState.lowestFps,
    resetLowFps: resetLowFpsFn,
    lastStamp: frameState.lastStamp
  };
}
//# sourceMappingURL=useFPSMetrics.js.map