"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useFPSMetrics = require("../../utils/useFPSMetrics");
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FPSLogger = props => {
  const {
    fps,
    average
  } = (0, _useFPSMetrics.useFPSMetric)();
  if (props.fpsCaptureEnabled && props !== null && props !== void 0 && props.handleFPSData) {
    props.handleFPSData(+fps.toFixed(2), +average.toFixed(2), props.screenName, props.totalCount);
  }
  return props !== null && props !== void 0 && props.renderFPS ? /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, `FPS: ${fps.toFixed(2)}`), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, `Average FPS: ${average.toFixed(2)}`)) : null;
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(FPSLogger);
//# sourceMappingURL=FPSLogger.js.map