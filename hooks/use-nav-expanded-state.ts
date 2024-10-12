import { NAV_IS_EXPANDED_COOKIE_NAME } from "@/lib/constants";
import Cookies from 'js-cookie';
import { useCallback, useState } from "react";


export function useNavExpandedState(initialExpanded: boolean) {
  const [expanded, setExpanded] = useState(initialExpanded);

  const toggleExpanded = useCallback(() => {
    setExpanded(prev => {
      const newExpanded = !prev;
      Cookies.set(NAV_IS_EXPANDED_COOKIE_NAME, newExpanded.toString());
      return newExpanded;
    });
  }, []);

  return [expanded, toggleExpanded] as const;
}
