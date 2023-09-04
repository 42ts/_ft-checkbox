import { I } from '@-ft/i';
import clsx from 'clsx';
import { memo, useCallback, useState, type KeyboardEvent } from 'react';

export type CheckboxChecked = boolean | 'true' | 'mixed' | 'false';

export interface CheckboxProps {
  toggle: () => void;
  checked: CheckboxChecked;
  label: string;
  controlsIdRef?: string;
  style?: React.CSSProperties;
  className?: string;
  focusedClass?: string;
  blurredClass?: string;
  checkedClass?: string;
  uncheckedClass?: string;
  mixedClass?: string;
  mergeClasses?: (classes: string) => string;
}

export const Checkbox = memo(function Checkbox({
  toggle,
  checked,
  label,
  controlsIdRef,
  style,
  className,
  focusedClass,
  blurredClass,
  checkedClass,
  uncheckedClass,
  mixedClass,
  mergeClasses,
}: CheckboxProps): React.JSX.Element {
  const [focused, setFocused] = useState(false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }, []);

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case ' ':
          toggle();
          event.stopPropagation();
          break;

        default:
          break;
      }
    },
    [toggle]
  );

  const handleClick = useCallback(() => {
    toggle();
  }, [toggle]);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, [setFocused]);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, [setFocused]);

  return (
    <div
      style={style}
      className={(mergeClasses ?? I)(
        clsx(
          className,
          focused ? focusedClass : blurredClass,
          (checked === 'true' || checked === true) && checkedClass,
          (checked === 'false' || checked === false) && uncheckedClass,
          checked === 'mixed' && mixedClass
        )
      )}
      tabIndex={0}
      role="checkbox"
      aria-label={label}
      aria-controls={controlsIdRef}
      aria-checked={checked}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
});
