using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace FullStackProject.Domains.RepoGuardian
{
    public class Recommendation : FullAuditedEntity<Guid>
    {
        public Guid RuleResultId { get; set; }

        [ForeignKey("RuleResultId")]
        public RuleResult RuleResult { get; set; }

        [Required]
        [MaxLength(500)]
        public string IssueDescription { get; set; }

        [MaxLength(2000)]
        public string Explanation { get; set; }

        [MaxLength(2000)]
        public string SuggestedFix { get; set; }
    }
}
