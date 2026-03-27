using System.ComponentModel.DataAnnotations;

namespace FullStackProject.RepoGuardian.Dto
{
    public class AddRepositoryRequest
    {
        [Required]
        public string GithubUrl { get; set; }
    }
}
