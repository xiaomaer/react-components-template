/**
 * 组件源文件
 */
import * as React from 'react';
import PropTypes from 'prop-types';
export default function Test(props) {
  return React.createElement("div", {
    className: "test"
  }, props.name);
} // 使用prop-types保证javascript用户也能够进行静态检查，得到友好的运行时报错信息。

Test.propType = {
  name: PropTypes.string.isRequired
};