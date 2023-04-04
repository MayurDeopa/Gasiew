import React, { useRef, useEffect, ReactNode } from 'react';

interface ClickAwayListenerProps {
  children: ReactNode;
  onClickAway: ()=>void;
}

const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({ children, onClickAway }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    };

    document.addEventListener('click', handleClickAway);

    return () => {
      document.removeEventListener('click', handleClickAway);
    };
  }, [onClickAway]);

  return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;
