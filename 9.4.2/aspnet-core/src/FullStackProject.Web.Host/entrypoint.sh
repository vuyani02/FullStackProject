#!/bin/sh
set -e

# Convert Render's DATABASE_URL (postgresql://user:pass@host:port/db)
# to Npgsql connection string format and expose as env var for both
# the Migrator and the Web Host (AppConfigurations reads env vars).
if [ -n "$DATABASE_URL" ]; then
  # Strip the scheme
  rest="${DATABASE_URL#postgresql://}"
  rest="${rest#postgres://}"

  userinfo="${rest%%@*}"
  hostdb="${rest#*@}"

  DB_USER="${userinfo%%:*}"
  DB_PASS="${userinfo#*:}"
  hostport="${hostdb%%/*}"
  DB_NAME="${hostdb#*/}"
  DB_NAME="${DB_NAME%%\?*}"
  case "$hostport" in
    *:*) DB_HOST="${hostport%%:*}"; DB_PORT="${hostport##*:}" ;;
    *)   DB_HOST="${hostport}"; DB_PORT="5432" ;;
  esac

  export ConnectionStrings__Default="Host=${DB_HOST};Port=${DB_PORT};Database=${DB_NAME};Username=${DB_USER};Password=${DB_PASS};SSL Mode=Require;Trust Server Certificate=true"
fi

echo "Running database migrations..."
dotnet /migrator/FullStackProject.Migrator.dll -q

echo "Starting application..."
cd /app && exec dotnet FullStackProject.Web.Host.dll
