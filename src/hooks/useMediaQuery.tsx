import { useEffect, useState } from 'react';

export default function useMediaQuery(minWidth: Number): Boolean {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<boolean>(false);

  useEffect(() => {
    const queryMinWidth = () => {
      if (window.innerWidth > minWidth) {
        setIsBelowBreakpoint(true);
      } else {
        setIsBelowBreakpoint(false);
      }
    };

    window.addEventListener('resize', queryMinWidth);
    return () => window.removeEventListener('resize', queryMinWidth);
  }, [minWidth]);

  return isBelowBreakpoint;
}
