
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Check if device is mobile via media query
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Also check for touch capabilities
    const isTouchDevice = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 ||
                         (navigator.msMaxTouchPoints !== undefined && navigator.msMaxTouchPoints > 0);
    
    const checkMobile = () => {
      // Consider it mobile if either screen size is small or it's a touch device
      const isSmallScreen = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(isSmallScreen || isTouchDevice);
    }
    
    const onChange = () => {
      checkMobile();
    }
    
    mql.addEventListener("change", onChange);
    
    // Initial check
    checkMobile();
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Default to true if undefined - this ensures mobile-first approach
  return isMobile === undefined ? true : isMobile
}
