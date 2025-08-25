#!/usr/bin/env bash
set -e

echo ">> Moving branding images (if any) from repo root ./images to apps/web/src/assets/branding ..."
mkdir -p apps/web/src/assets/branding
if [ -d images ]; then
  cp -R images/* apps/web/src/assets/branding/ 2>/dev/null || true
fi

echo ">> Removing Elstar demo content ..."
rm -rf apps/web/src/views/demo || true
rm -rf apps/web/src/views/apps || true
rm -rf apps/web/src/mock || true
rm -f apps/web/src/configs/navigation.demo.json || true

echo ">> Done. Now update your routes to use pages/SignInRedirect for /sign-in, and wrap your App with KCProvider."
