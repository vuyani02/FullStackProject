using Abp.UI;
using FullStackProject.Domains.RepoGuardian;
using Shouldly;
using Xunit;

namespace FullStackProject.Tests.RepoGuardian
{
    /// <summary>
    /// Unit tests for RepoGuardianManager.ParseGithubUrl. No mocks needed — pure URL parsing logic.
    /// </summary>
    public class RepoGuardianManager_ParseUrl_Tests
    {
        private readonly RepoGuardianManager _manager;

        public RepoGuardianManager_ParseUrl_Tests()
        {
            _manager = new RepoGuardianManager(null, null, null, null, null, null);
        }

        [Fact]
        public void ParseGithubUrl_Should_Return_Owner_And_Name()
        {
            var (owner, name) = _manager.ParseGithubUrl("https://github.com/vuyani02/RepoGuardian");
            owner.ShouldBe("vuyani02");
            name.ShouldBe("RepoGuardian");
        }

        [Fact]
        public void ParseGithubUrl_Should_Strip_Trailing_Slash()
        {
            var (owner, name) = _manager.ParseGithubUrl("https://github.com/vuyani02/RepoGuardian/");
            owner.ShouldBe("vuyani02");
            name.ShouldBe("RepoGuardian");
        }

        [Fact]
        public void ParseGithubUrl_Should_Strip_Git_Suffix()
        {
            var (owner, name) = _manager.ParseGithubUrl("https://github.com/vuyani02/RepoGuardian.git");
            owner.ShouldBe("vuyani02");
            name.ShouldBe("RepoGuardian");
        }

        [Fact]
        public void ParseGithubUrl_Should_Throw_On_Invalid_Url()
        {
            Should.Throw<UserFriendlyException>(() =>
                _manager.ParseGithubUrl("https://github.com/vuyani02"));
        }
    }
}
