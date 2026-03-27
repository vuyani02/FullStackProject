using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Abp.Dependency;
using Abp.UI;

namespace FullStackProject.RepoGuardian.GitHub
{
    /// <summary>
    /// Fetches repository file tree metadata from the GitHub API.
    /// </summary>
    public class GithubService : ITransientDependency
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public GithubService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        private async Task<string> GetDefaultBranchAsync(HttpClient client, string owner, string repo)
        {
            var response = await client.GetAsync($"repos/{owner}/{repo}");

            if (response.StatusCode == System.Net.HttpStatusCode.NotFound)
                throw new UserFriendlyException($"Repository '{owner}/{repo}' not found. It may be private or does not exist.");

            if (!response.IsSuccessStatusCode)
                throw new UserFriendlyException($"GitHub API error ({(int)response.StatusCode}) while accessing '{owner}/{repo}'.");

            var json = await response.Content.ReadAsStringAsync();
            return JsonDocument.Parse(json).RootElement.GetProperty("default_branch").GetString();
        }
    }
}
