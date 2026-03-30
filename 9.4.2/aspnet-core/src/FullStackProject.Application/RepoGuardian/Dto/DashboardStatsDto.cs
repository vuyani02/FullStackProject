using System.Collections.Generic;

namespace FullStackProject.RepoGuardian.Dto
{
    /// <summary>Aggregated statistics shown on the dashboard for the current tenant.</summary>
    public class DashboardStatsDto
    {
        /// <summary>Total number of repositories registered under this tenant.</summary>
        public int TotalRepositories { get; set; }

        /// <summary>Total number of scan runs triggered under this tenant.</summary>
        public int TotalScans { get; set; }

        /// <summary>
        /// Average overall compliance score across all completed scans.
        /// Null when no completed scans exist yet.
        /// </summary>
        public double? AverageComplianceScore { get; set; }

        /// <summary>Per-category average scores across the filtered scans.</summary>
        public List<CategoryAverageDto> CategoryAverages { get; set; } = new();
    }
}
