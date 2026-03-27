using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace FullStackProject.Domains.RepoGuardian
{
    public class RuleResult : FullAuditedEntity<Guid>
    {
        public Guid ScanRunId { get; set; }

        [ForeignKey("ScanRunId")]
        public ScanRun ScanRun { get; set; }

        [Required]
        [MaxLength(100)]
        public string RuleId { get; set; }

        [Required]
        [MaxLength(200)]
        public string RuleName { get; set; }

        public RuleCategory Category { get; set; }

        public bool Passed { get; set; }

        [MaxLength(1000)]
        public string Details { get; set; }
    }
}
