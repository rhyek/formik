/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { FormikProps } from './Formik';
import { SharedRenderProps } from './types';
export declare type FieldArrayConfig = {
  name: string;
  validateOnChange?: boolean;
} & SharedRenderProps<
  ArrayHelpers & {
    form: FormikProps<any>;
  }
>;
export interface ArrayHelpers {
  push: (obj: any) => void;
  handlePush: (obj: any) => () => void;
  swap: (indexA: number, indexB: number) => void;
  handleSwap: (indexA: number, indexB: number) => () => void;
  move: (from: number, to: number) => void;
  handleMove: (from: number, to: number) => () => void;
  insert: (index: number, value: any) => void;
  handleInsert: (index: number, value: any) => () => void;
  unshift: (value: any) => number;
  handleUnshift: (value: any) => () => void;
  handleRemove: (index: number) => () => void;
  handlePop: () => () => void;
  remove<T>(index: number): T | undefined;
  pop<T>(): T | undefined;
}
export declare const move: (array: any[], from: number, to: number) => any[];
export declare const swap: (
  array: any[],
  indexA: number,
  indexB: number
) => any[];
export declare const insert: (array: any[], index: number, value: any) => any[];
export declare class FieldArray extends React.Component<FieldArrayConfig, {}> {
  static defaultProps: {
    validateOnChange: boolean;
  };
  static contextTypes: {
    formik: PropTypes.Requireable<any>;
  };
  constructor(props: FieldArrayConfig);
  updateArrayField: (
    fn: Function,
    alterTouched: boolean,
    alterErrors: boolean
  ) => void;
  push: (value: any) => void;
  handlePush: (value: any) => () => void;
  swap: (indexA: number, indexB: number) => void;
  handleSwap: (indexA: number, indexB: number) => () => void;
  move: (from: number, to: number) => void;
  handleMove: (from: number, to: number) => () => void;
  insert: (index: number, value: any) => void;
  handleInsert: (index: number, value: any) => () => void;
  unshift: (value: any) => number;
  handleUnshift: (value: any) => () => number;
  remove<T>(index: number): T;
  handleRemove: (index: number) => () => any;
  pop<T>(): T;
  handlePop: () => () => any;
  render(): any;
}
