import { AnyRecord, BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 角标颜色类型
 * @desc default 灰色
 * @desc primary 蓝色
 * @desc success 绿色
 * @desc warning 黄色
 * @desc error 红色
 */
type _UniBadgeType = 'default' | 'primary' | 'success' | 'warning' | 'error';

/**
 * @desc 角标大小
 * @desc normal 正常
 * @desc small 小
 */
type _UniBadgeSize = 'normal' | 'small';

/**
 * @desc 自定义样式
 */
type _UniBadgeCustomStyle = AnyRecord;

/**
 * @desc 开启绝对定位，角标将定位到其包裹的标签的四个角上
 * @desc rightTop 右上角
 * @desc rightBottom 右下角
 * @desc leftBottom 左下角
 * @desc leftTop 左上角
 */
type _UniBadgeAbsolute = 'rightTop' | 'rightBottom' | 'leftBottom' | 'leftTop';

/**
 * @desc 点击事件
 */
interface _UniBadgeOnClick {
  (event: BaseEvent): void;
}

/**
 * @desc 数字角标属性
 */
interface _UniBadgeProps {
  /**
   * @desc 角标内容
   */
  text: string;
  /**
   * @desc 角标颜色类型
   * @desc default 灰色
   * @desc primary 蓝色
   * @desc success 绿色
   * @desc warning 黄色
   * @desc error 红色
   * @desc 默认为 default
   */
  type: _UniBadgeType;
  /**
   * @desc 角标大小
   * @desc normal 正常
   * @desc small 小
   * @desc 默认为 normal
   */
  size: _UniBadgeSize;
  /**
   * @desc 是否只展示一个点不展示内容
   * @desc 默认为 false
   */
  isDot: boolean;
  /**
   * @desc 展示封顶的数字值，超过 99 显示 99+
   * @desc 默认为 99
   */
  maxNum: number;
  /**
   * @desc 自定义样式
   */
  customStyle: _UniBadgeCustomStyle;
  /**
   * @desc 是否无需背景颜色
   * @desc true 背景颜色将变为文字的字体颜色
   * @desc false 正常显示
   */
  inverted: boolean;
  /**
   * @desc 开启绝对定位，角标将定位到其包裹的标签的四个角上
   * @desc rightTop 右上角
   * @desc rightBottom 右下角
   * @desc leftBottom 左下角
   * @desc leftTop 左上角
   * @desc 默认为 rightTop
   */
  absolute: _UniBadgeAbsolute;
  /**
   * @desc 距定位角中心点的偏移量
   * @desc [-10, -10] 表示向 absolute 指定的方向偏移 10px
   * @desc [10, 10] 表示向 absolute 指定的反方向偏移 10px
   * @desc 与 absolute 一一对应
   * @desc 存在 absolute 属性时有效
   * @desc 单位为 px
   */
  offset: [number, number];
  /**
   * @desc 点击事件
   */
  onClick: _UniBadgeOnClick;
}

/**
 * @desc 数字角标
 * @desc 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
 */
type _UniBadge = Component<Partial<_UniBadgeProps>>;

export {
  _UniBadgeType as UniBadgeType,
  _UniBadgeSize as UniBadgeSize,
  _UniBadgeCustomStyle as UniBadgeCustomStyle,
  _UniBadgeAbsolute as UniBadgeAbsolute,
  _UniBadgeOnClick as UniBadgeOnClick,
  _UniBadgeProps as UniBadgeProps,
  _UniBadge as _UniBadge,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 角标颜色类型
     * @desc default 灰色
     * @desc primary 蓝色
     * @desc success 绿色
     * @desc warning 黄色
     * @desc error 红色
     */
    export type UniBadgeType = _UniBadgeType;
    /**
     * @desc 角标大小
     * @desc normal 正常
     * @desc small 小
     */
    export type UniBadgeSize = _UniBadgeSize;
    /**
     * @desc 自定义样式
     */
    export type UniBadgeCustomStyle = _UniBadgeCustomStyle;
    /**
     * @desc 开启绝对定位，角标将定位到其包裹的标签的四个角上
     * @desc rightTop 右上角
     * @desc rightBottom 右下角
     * @desc leftBottom 左下角
     * @desc leftTop 左上角
     */
    export type UniBadgeAbsolute = _UniBadgeAbsolute;
    /**
     * @desc 点击事件
     */
    export interface UniBadgeOnClick extends _UniBadgeOnClick {}
    /**
     * @desc 数字角标属性
     */
    export interface UniBadgeProps extends _UniBadgeProps {}
    /**
     * @desc 数字角标
     * @desc 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
     */
    export type UniBadge = _UniBadge;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 数字角标
     * @desc 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
     */
    UniBadge: _UniBadge;
  }
}
