namespace FullStackProject.RepoGuardian.Dto
{
    public class RuleResultDto
    {
        public string RuleId { get; set; }
        public string RuleName { get; set; }
        public string Category { get; set; }
        public bool Passed { get; set; }
        public string Details { get; set; }
    }
}
