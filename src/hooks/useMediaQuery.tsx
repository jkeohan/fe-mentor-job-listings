import React, { useEffect, useState } from 'react';


function useMediaQuery(minWidth: Number): Boolean {

    const [belowBreakpoint, setBelowBreakpoint] = useState<boolean>(false);

    useEffect(() => {

        const updateBannerImage = () => {
      if (window.innerWidth > minWidth) {
        setBelowBreakpoint(true);
      } else {
        setBelowBreakpoint(false);
      }
    };

    window.addEventListener('resize', updateBannerImage);
    return () => window.removeEventListener('resize', updateBannerImage);
  }, []);

  return belowBreakpoint
}

export default useMediaQuery