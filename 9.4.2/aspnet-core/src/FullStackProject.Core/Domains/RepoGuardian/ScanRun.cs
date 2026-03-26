using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace FullStackProject.Domains.RepoGuardian
{
    public class ScanRun : FullAuditedEntity<Guid>
    {
        public Guid RepositoryId { get; set; }

        [ForeignKey("RepositoryId")]
        public GithubRepository Repository { get; set; }

        public ScanRunStatus Status { get; set; }

        public DateTime TriggeredAt { get; set; }

        public DateTime? CompletedAt { get; set; }

        [MaxLength(1000)]
        public string ErrorMessage { get; set; }

        public int? OverallScore { get; set; }
    }
}
