# Feature: Setup Auth + Branding + Cleanup (Web)

Este pacote inclui:
- `apps/web/tailwind.config.ts` com cores da marca (brand #2C2377, secondary #77FF88)
- Auth via Keycloak: `apps/web/src/auth/{keycloak.ts, KCProvider.tsx, Protected.tsx}`
- `apps/web/public/silent-check-sso.html`
- `apps/web/src/pages/SignInRedirect.tsx` (ajuda a redirecionar botão / rota de login para o KC)
- Script de limpeza e movimentação de branding: `scripts/cleanup_elstar.sh`

## Como aplicar

1) Criar branch e extrair o zip na raiz do repositório:
```
git checkout -b feature/setup-auth-branding
unzip -o setup-auth-branding-clean.zip -d .
```

2) Executar o cleanup e mover branding:
```
bash scripts/cleanup_elstar.sh
```

3) Ajustar providers no `apps/web/src/main.tsx` (ou arquivo equivalente onde o App é renderizado):
```tsx
import { createRoot } from "react-dom/client"
import App from "./App"
import { KCProvider } from "@/auth/KCProvider"

createRoot(document.getElementById("root")!).render(
  <KCProvider>
    <App />
  </KCProvider>
)
```

4) Ajustar rota/página de login para usar o Keycloak:
- Opção A: o botão de login chama `keycloak.login()`.
- Opção B: mapear a rota `/sign-in` para `pages/SignInRedirect`:

```tsx
import SignInRedirect from "@/pages/SignInRedirect"
{ path: "/sign-in", element: <SignInRedirect /> }
```

5) `Forgot password` / `Reset password`:
- Direcionar o link para:
`https://SEU_AUTH/realms/prodevs/login-actions/reset-credentials`

6) Configurar variáveis de ambiente (apps/web/.env):
```
VITE_KC_URL=https://SEU_AUTH
VITE_KC_REALM=prodevs
VITE_KC_CLIENT=medsafe-web
VITE_API_BASE=/api
```

7) Commit e push:
```
git add .
git commit -m "feat: cleanup Elstar, branding and Keycloak auth setup"
git push origin feature/setup-auth-branding
```

> Depois, abra a Pull Request no GitHub.
