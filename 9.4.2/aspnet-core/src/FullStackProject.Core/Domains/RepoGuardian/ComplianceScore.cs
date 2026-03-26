using System;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace FullStackProject.Domains.RepoGuardian
{
    public class ComplianceScore : FullAuditedEntity<Guid>
    {
        public Guid ScanRunId { get; set; }

        [ForeignKey("ScanRunId")]
        public ScanRun ScanRun { get; set; }

        public RuleCategory Category { get; set; }

        public int Score { get; set; }
    }
}
