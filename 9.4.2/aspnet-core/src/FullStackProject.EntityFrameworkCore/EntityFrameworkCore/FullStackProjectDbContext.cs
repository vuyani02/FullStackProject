using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using FullStackProject.Authorization.Roles;
using FullStackProject.Authorization.Users;
using FullStackProject.MultiTenancy;
using FullStackProject.Domains.RepoGuardian;

namespace FullStackProject.EntityFrameworkCore
{
    public class FullStackProjectDbContext : AbpZeroDbContext<Tenant, Role, User, FullStackProjectDbContext>
    {
        public DbSet<GithubRepository> GithubRepositories { get; set; }
        public DbSet<ScanRun> ScanRuns { get; set; }
        public DbSet<RuleResult> RuleResults { get; set; }
        public DbSet<ComplianceScore> ComplianceScores { get; set; }
        public DbSet<Recommendation> Recommendations { get; set; }

        public FullStackProjectDbContext(DbContextOptions<FullStackProjectDbContext> options)
            : base(options)
        {
        }
    }
}
