import React, { memo } from "react";
import { useFPSMetric } from "../../utils/useFPSMetrics";
import { View, Text } from "react-native";

type FPSLoggerProps = {
  screenName: string;
  totalCount: number;
  fpsCaptureEnabled: boolean;
  renderFPS?: boolean;
  handleFPSData?: (
    fps: number,
    average: number,
    screenName: string,
    totalCount: number,
    ...args: any[]
  ) => void;
};

const FPSLogger = (props: FPSLoggerProps) => {
  const { fps, average } = useFPSMetric();
  if (props.fpsCaptureEnabled && props?.handleFPSData) {
    props.handleFPSData(+fps.toFixed(2), +average.toFixed(2), props.screenName, props.totalCount);
  }
  return props?.renderFPS ? (
    <View>
      <Text>{`FPS: ${fps.toFixed(2)}`}</Text>
      <Text>{`Average FPS: ${average.toFixed(2)}`}</Text>
    </View>
  ) : null;
};
export default memo(FPSLogger);
