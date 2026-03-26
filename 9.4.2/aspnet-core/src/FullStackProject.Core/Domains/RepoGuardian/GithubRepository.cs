using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities.Auditing;

namespace FullStackProject.Domains.RepoGuardian
{
    public class GithubRepository : FullAuditedEntity<System.Guid>
    {
        [Required]
        [MaxLength(500)]
        public string GithubUrl { get; set; }

        [Required]
        [MaxLength(200)]
        public string Name { get; set; }

        [Required]
        [MaxLength(200)]
        public string Owner { get; set; }
    }
}
