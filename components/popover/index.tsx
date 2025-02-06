import * as React from 'react';
import useMergedState from '@rc-component/util/lib/hooks/useMergedState';
import KeyCode from '@rc-component/util/lib/KeyCode';
import classNames from 'classnames';

import type { RenderFunction } from '../_util/getRenderPropValue';
import { getRenderPropValue } from '../_util/getRenderPropValue';
import { getTransitionName } from '../_util/motion';
import { cloneElement } from '../_util/reactNode';
import { ConfigContext } from '../config-provider';
import type { AbstractTooltipProps, TooltipRef } from '../tooltip';
import Tooltip from '../tooltip';
import useMergedArrow from '../tooltip/hook/useMergedArrow';
import PurePanel, { Overlay } from './PurePanel';
// CSSINJS
import useStyle from './style';

export interface PopoverProps extends AbstractTooltipProps {
  title?: React.ReactNode | RenderFunction;
  content?: React.ReactNode | RenderFunction;
  onOpenChange?: (
    open: boolean,
    e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => void;
}

const InternalPopover = React.forwardRef<TooltipRef, PopoverProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    title,
    content,
    overlayClassName,
    placement = 'top',
    trigger = 'hover',
    children,
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    onOpenChange,
    overlayStyle = {},
    styles,
    classNames: popoverClassNames,
    motion,
    arrow: popoverArrow,
    ...restProps
  } = props;
  const { popover, getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('popover', customizePrefixCls);
  const [hashId, cssVarCls] = useStyle(prefixCls);
  const rootPrefixCls = getPrefixCls();
  const mergedArrow = useMergedArrow(popoverArrow, popover?.arrow);

  const rootClassNames = classNames(
    overlayClassName,
    hashId,
    cssVarCls,
    popover?.classNames?.root,
    popoverClassNames?.root,
  );
  const bodyClassNames = classNames(popover?.classNames?.body, popoverClassNames?.body);

  const [open, setOpen] = useMergedState(false, {
    value: props.open,
    defaultValue: props.defaultOpen,
  });

  const settingOpen = (
    value: boolean,
    e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    setOpen(value, true);
    onOpenChange?.(value, e);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === KeyCode.ESC) {
      settingOpen(false, e);
    }
  };

  const onInternalOpenChange = (value: boolean) => {
    settingOpen(value);
  };

  const titleNode = getRenderPropValue(title);
  const contentNode = getRenderPropValue(content);

  return (
    <Tooltip
      arrow={mergedArrow}
      placement={placement}
      trigger={trigger}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      {...restProps}
      prefixCls={prefixCls}
      classNames={{ root: rootClassNames, body: bodyClassNames }}
      styles={{
        root: {
          ...popover?.styles?.root,
          ...popover?.style,
          ...overlayStyle,
          ...styles?.root,
        },
        body: {
          ...popover?.styles?.body,
          ...styles?.body,
        },
      }}
      ref={ref}
      open={open}
      onOpenChange={onInternalOpenChange}
      overlay={
        titleNode || contentNode ? (
          <Overlay prefixCls={prefixCls} title={titleNode} content={contentNode} />
        ) : null
      }
      motion={{
        motionName: getTransitionName(
          rootPrefixCls,
          'zoom-big',
          typeof motion?.motionName === 'string' ? motion?.motionName : undefined,
        ),
      }}
      data-popover-inject
    >
      {cloneElement(children, {
        onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => {
          if (React.isValidElement(children)) {
            (
              children as React.ReactElement<{
                onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
              }>
            )?.props.onKeyDown?.(e);
          }
          onKeyDown(e);
        },
      })}
    </Tooltip>
  );
});

type CompoundedComponent = typeof InternalPopover & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};

const Popover = InternalPopover as CompoundedComponent;

Popover._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

if (process.env.NODE_ENV !== 'production') {
  Popover.displayName = 'Popover';
}

export default Popover;
