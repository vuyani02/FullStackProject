using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace FullStackProject.EntityFrameworkCore
{
    public static class FullStackProjectDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<FullStackProjectDbContext> builder, string connectionString)
        {
            builder.UseNpgsql(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<FullStackProjectDbContext> builder, DbConnection connection)
        {
            builder.UseNpgsql(connection);
        }
    }
}
