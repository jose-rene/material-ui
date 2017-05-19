// @flow weak

import React, { Element } from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from '../utils/customPropTypes';
import Modal from '../internal/Modal';
import Fade from '../transitions/Fade';
import { duration } from '../styles/transitions';
import Paper from '../Paper';

export const styleSheet = createStyleSheet('MuiDialog', (theme) => {
  return {
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      width: '75%',
      maxHeight: '90vh',
      '&:focus': {
        outline: 'none',
      },
    },
    'dialogWidth-xs': {
      maxWidth: theme.breakpoints.getWidth('xs'),
    },
    'dialogWidth-sm': {
      maxWidth: theme.breakpoints.getWidth('sm'),
    },
    'dialogWidth-md': {
      maxWidth: theme.breakpoints.getWidth('md'),
    },
    fullScreen: {
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0,
    },
  };
});

type Props = {
  /**
   * Dialog children, usually the included sub-components.
   */
  children?: Element<*>,
  /**
   * @ignore
   */
  className?: string,
  /**
   * If `true`, it will be full-screen
   */
  fullScreen?: boolean,
  /**
   * If `true`, clicking the backdrop will not fire the `onRequestClose` callback.
   */
  ignoreBackdropClick?: boolean,
  /**
   * If `true`, hitting escape will not fire the `onRequestClose` callback.
   */
  ignoreEscapeKeyUp?: boolean,
  /**
   * Duration of the animation when the element is entering.
   */
  enterTransitionDuration?: number, // eslint-disable-line react/sort-prop-types
  /**
   * Duration of the animation when the element is leaving.
   */
  leaveTransitionDuration?: number,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application.
   */
  maxWidth?: 'xs' | 'sm' | 'md',
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick?: Function,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter?: Function,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering?: Function,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered?: Function, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fires when the escape key is released and the modal is in focus.
   */
  onEscapeKeyUp?: Function, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the dialog exits.
   */
  onExit?: Function,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting?: Function,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited?: Function, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired when the dialog requests to be closed.
   */
  onRequestClose?: Function,
  /**
   * If `true`, the Dialog is open.
   */
  open?: boolean,
  /**
   * The CSS class name of the paper inner element.
   */
  paperClassName?: string,
  /**
   * Transition component.
   */
  transition?: Function | Element<*>,
};

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 *
 * ```jsx
 * <Dialog>
 *   <DialogContent>...</DialogContent>
 *   <DialogActions>...</DialogActions>
 * </Dialog>
 * ```
 */
function Dialog(props: Props, context: { styleManager: Object }) {
  const {
    children,
    className,
    fullScreen,
    ignoreBackdropClick,
    ignoreEscapeKeyUp,
    enterTransitionDuration,
    leaveTransitionDuration,
    maxWidth: maxWidthProp,
    open,
    onBackdropClick,
    onEscapeKeyUp,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    onRequestClose,
    paperClassName,
    transition,
    ...other
  } = props;

  const classes = context.styleManager.render(styleSheet);

  // workaround: see #2 test case from https://github.com/facebook/flow/issues/1660#issuecomment-302468866
  const maxWidth = maxWidthProp || Dialog.defaultProps.maxWidth;

  const transitionProps = {
    in: open,
    transitionAppear: true,
    enterTransitionDuration,
    leaveTransitionDuration,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
  };

  let createTransitionFn;

  if (typeof transition === 'function') {
    createTransitionFn = React.createElement;
  } else {
    createTransitionFn = React.cloneElement;
  }

  return (
    <Modal
      className={classNames(classes.modal, className)}
      backdropTransitionDuration={open ? enterTransitionDuration : leaveTransitionDuration}
      ignoreBackdropClick={ignoreBackdropClick}
      ignoreEscapeKeyUp={ignoreEscapeKeyUp}
      onBackdropClick={onBackdropClick}
      onEscapeKeyUp={onEscapeKeyUp}
      onRequestClose={onRequestClose}
      show={open}
      {...other}
    >
      {/* $FlowFixMe */}
      {createTransitionFn(transition, transitionProps, (
        <Paper
          data-mui-test="Dialog"
          elevation={24}
          className={classNames(classes.dialog, classes[`dialogWidth-${maxWidth}`],
            paperClassName, { [classes.fullScreen]: fullScreen })}
        >
          {children}
        </Paper>
      ))}
    </Modal>
  );
}

Dialog.defaultProps = {
  fullScreen: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  enterTransitionDuration: duration.enteringScreen,
  leaveTransitionDuration: duration.leavingScreen,
  maxWidth: 'sm',
  open: false,
  transition: Fade,
};

Dialog.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};

export default Dialog;
