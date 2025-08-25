import { ReactKeycloakProvider } from "@react-keycloak/web"
import { keycloak } from "./keycloak"

export function KCProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={{
        onLoad: "check-sso",
        pkceMethod: "S256",
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html",
      }}
      autoRefreshToken
    >
      {children}
    </ReactKeycloakProvider>
  )
}
