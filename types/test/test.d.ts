/**
 * 组件源文件
 */
/// <reference types="react" />
import { ITestProps } from './interface';
import PropTypes from 'prop-types';
declare function Test(props: ITestProps): JSX.Element;
declare namespace Test {
    var propType: {
        name: PropTypes.Validator<string>;
    };
}
export default Test;
