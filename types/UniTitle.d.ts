import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 标题类型
 */
type _UniTitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

/**
 * @desc 对齐方式
 * @desc left 左对齐
 * @desc center 居中对齐
 * @desc right 右对齐
 */
type _UniTitleAlign = 'left' | 'center' | 'right';

interface _UniTitleProps {
  /**
   * @desc 标题类型
   */
  type: _UniTitleType;
  /**
   * @desc 章节标题内容
   */
  title: string;
  /**
   * @desc 对齐方式
   * @desc left 左对齐
   * @desc center 居中对齐
   * @desc right 右对齐
   */
  align: _UniTitleAlign;
  /**
   * @desc 字体颜色
   */
  color: string;
  /**
   * @desc 是否开启统计
   */
  stat: boolean;
}

/**
 * @desc 章节标题，通常用于记录页面标题
 * @desc 使用当前组件，uni-app 如果开启统计，将会自动统计页面标题
 */
type _UniTitle = Component<Partial<_UniTitleProps>>;

export {
  _UniTitleType as UniTitleType,
  _UniTitleAlign as UniTitleAlign,
  _UniTitleProps as UniTitleProps,
  _UniTitle as UniTitle,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 标题类型
     */
    export type UniTitleType = _UniTitleType;
    /**
     * @desc 对齐方式
     * @desc left 左对齐
     * @desc center 居中对齐
     * @desc right 右对齐
     */
    export type UniTitleAlign = _UniTitleAlign;
    export interface UniTitleProps extends _UniTitleProps {}
    /**
     * @desc 章节标题，通常用于记录页面标题
     * @desc 使用当前组件，uni-app 如果开启统计，将会自动统计页面标题
     */
    export type UniTitle = _UniTitle;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 用于展示一个或多个文字标签，可点击切换选中、不选中的状态
     */
    UniTitle: _UniTitle;
  }
}
