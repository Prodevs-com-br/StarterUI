import Keycloak from "keycloak-js"

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KC_URL || "https://auth.seu-dominio.com",
  realm: "prodevs",
  clientId: "medsafe-web",
})
