#!/usr/bin/env bash
# Avoid EMFILE (too many open files) so the dev server can discover routes and avoid 404.
# Option 1: use polling watcher (fewer file descriptors)
# Option 2: raise limit first: ulimit -n 65536
export CHOKIDAR_USEPOLLING=1
ulimit -n 65536 2>/dev/null || true
exec npm run dev
