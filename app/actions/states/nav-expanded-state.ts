import { NAV_IS_EXPANDED_COOKIE_NAME } from "@/lib/constants"
import { cookies } from "next/headers"

export function getNavExpandedState() {
  return cookies().get(NAV_IS_EXPANDED_COOKIE_NAME)?.value === 'true'
}
