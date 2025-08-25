import { useKeycloak } from "@react-keycloak/web"
import { Navigate } from "react-router-dom"

export function Protected({
  roles,
  children,
}: {
  roles?: string[]
  children: JSX.Element
}) {
  const { keycloak } = useKeycloak()
  if (!keycloak?.authenticated) return <Navigate to="/sign-in" replace />
  if (roles?.length && !roles.some((r) => keycloak.hasRealmRole(r)))
    return <Navigate to="/403" replace />
  return children
}
