FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

# Copy csproj files and restore
COPY ["src/FullStackProject.Web.Host/FullStackProject.Web.Host.csproj", "src/FullStackProject.Web.Host/"]
COPY ["src/FullStackProject.Web.Core/FullStackProject.Web.Core.csproj", "src/FullStackProject.Web.Core/"]
COPY ["src/FullStackProject.Application/FullStackProject.Application.csproj", "src/FullStackProject.Application/"]
COPY ["src/FullStackProject.Core/FullStackProject.Core.csproj", "src/FullStackProject.Core/"]
COPY ["src/FullStackProject.EntityFrameworkCore/FullStackProject.EntityFrameworkCore.csproj", "src/FullStackProject.EntityFrameworkCore/"]
COPY ["src/FullStackProject.Migrator/FullStackProject.Migrator.csproj", "src/FullStackProject.Migrator/"]
RUN dotnet restore \
    src/FullStackProject.Web.Host/FullStackProject.Web.Host.csproj
RUN dotnet restore \
    src/FullStackProject.Migrator/FullStackProject.Migrator.csproj

# Copy source and publish
COPY src/ src/
RUN dotnet publish src/FullStackProject.Web.Host/FullStackProject.Web.Host.csproj -c Release -o /publish/app --no-restore
RUN dotnet publish src/FullStackProject.Migrator/FullStackProject.Migrator.csproj -c Release -o /publish/migrator --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 10000

WORKDIR /app
COPY --from=build /publish/app .

WORKDIR /migrator
COPY --from=build /publish/migrator .

COPY src/FullStackProject.Web.Host/entrypoint.sh /entrypoint.sh
COPY src/FullStackProject.Web.Host/log4net.Production.config /app/log4net.Production.config
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
