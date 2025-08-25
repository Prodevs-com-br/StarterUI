import { useEffect } from "react"
import { keycloak } from "@/auth/keycloak"

export default function SignInRedirect() {
  useEffect(() => {
    keycloak.login()
  }, [])
  return null
}
