"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Test;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * 组件源文件
 */
function Test(props) {
  return React.createElement("div", {
    className: "test"
  }, props.name);
} // 使用prop-types保证javascript用户也能够进行静态检查，得到友好的运行时报错信息。


Test.propType = {
  name: _propTypes.default.string.isRequired
};