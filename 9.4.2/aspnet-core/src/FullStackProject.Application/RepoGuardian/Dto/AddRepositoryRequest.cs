using System.ComponentModel.DataAnnotations;

namespace FullStackProject.RepoGuardian.Dto
{
    public class AddRepositoryRequest
    {
        [Required]
        public string GithubUrl { get; set; }

        /// <summary>
        /// When true, silently returns the existing repository if the URL is already registered.
        /// When false (default), throws a UserFriendlyException if the URL already exists.
        /// </summary>
        public bool AllowExisting { get; set; } = false;
    }
}
