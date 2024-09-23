import React, { memo } from "react";
import { useFPSMetric } from "../../utils/useFPSMetrics";
import { View, Text } from "react-native";
const FPSLogger = props => {
  const {
    fps,
    average
  } = useFPSMetric();
  if (props.fpsCaptureEnabled && props !== null && props !== void 0 && props.handleFPSData) {
    props.handleFPSData(+fps.toFixed(2), +average.toFixed(2), props.screenName, props.totalCount);
  }
  return props !== null && props !== void 0 && props.renderFPS ? /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, `FPS: ${fps.toFixed(2)}`), /*#__PURE__*/React.createElement(Text, null, `Average FPS: ${average.toFixed(2)}`)) : null;
};
export default /*#__PURE__*/memo(FPSLogger);
//# sourceMappingURL=FPSLogger.js.map