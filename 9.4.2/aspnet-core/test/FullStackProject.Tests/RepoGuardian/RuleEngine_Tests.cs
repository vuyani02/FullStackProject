using System;
using System.Collections.Generic;
using FullStackProject.Domains.RepoGuardian;
using FullStackProject.RepoGuardian.Rules;
using Shouldly;
using Xunit;

namespace FullStackProject.Tests.RepoGuardian
{
    /// <summary>
    /// Unit tests for RuleEngine. No mocks needed — pure file path logic.
    /// </summary>
    public class RuleEngine_Tests
    {
        private readonly RuleEngine _ruleEngine;
        private readonly Guid _scanRunId = Guid.NewGuid();

        public RuleEngine_Tests()
        {
            _ruleEngine = new RuleEngine();
        }

        // ── DOC_001 ───────────────────────────────────────────────────────────

        [Fact]
        public void DOC_001_Should_Pass_When_Readme_Exists_At_Root()
        {
            var results = Evaluate("README.md");
            RuleFor(results, "DOC_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void DOC_001_Should_Pass_When_Readme_In_Subdirectory()
        {
            var results = Evaluate("docs/README.md");
            RuleFor(results, "DOC_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void DOC_001_Should_Fail_When_No_Readme()
        {
            var results = Evaluate("src/index.ts");
            RuleFor(results, "DOC_001").Passed.ShouldBeFalse();
        }

        // ── DOC_002 ───────────────────────────────────────────────────────────

        [Fact]
        public void DOC_002_Should_Pass_When_License_Exists_At_Root()
        {
            var results = Evaluate("LICENSE");
            RuleFor(results, "DOC_002").Passed.ShouldBeTrue();
        }

        [Fact]
        public void DOC_002_Should_Pass_When_License_Md_In_Subdirectory()
        {
            var results = Evaluate("docs/LICENSE.md");
            RuleFor(results, "DOC_002").Passed.ShouldBeTrue();
        }

        [Fact]
        public void DOC_002_Should_Fail_When_No_License()
        {
            var results = Evaluate("README.md");
            RuleFor(results, "DOC_002").Passed.ShouldBeFalse();
        }

        // ── DOC_003 ───────────────────────────────────────────────────────────

        [Fact]
        public void DOC_003_Should_Pass_When_Contributing_Guide_Exists()
        {
            var results = Evaluate("CONTRIBUTING.md");
            RuleFor(results, "DOC_003").Passed.ShouldBeTrue();
        }

        [Fact]
        public void DOC_003_Should_Fail_When_No_Contributing_Guide()
        {
            var results = Evaluate("README.md");
            RuleFor(results, "DOC_003").Passed.ShouldBeFalse();
        }

        // ── TEST_001 ──────────────────────────────────────────────────────────

        [Fact]
        public void TEST_001_Should_Pass_When_Test_Directory_At_Root()
        {
            var results = Evaluate("tests/MyService.test.ts");
            RuleFor(results, "TEST_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void TEST_001_Should_Pass_When_Spec_File_Exists()
        {
            var results = Evaluate("src/app/home.component.spec.ts");
            RuleFor(results, "TEST_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void TEST_001_Should_Pass_When_Jest_Tests_Folder_Exists()
        {
            var results = Evaluate("src/__tests__/utils.test.ts");
            RuleFor(results, "TEST_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void TEST_001_Should_Fail_When_No_Test_Files()
        {
            var results = Evaluate("src/index.ts", "README.md");
            RuleFor(results, "TEST_001").Passed.ShouldBeFalse();
        }

        // ── CICD_001 ──────────────────────────────────────────────────────────

        [Fact]
        public void CICD_001_Should_Pass_When_GitHub_Actions_Workflow_Exists()
        {
            var results = Evaluate(".github/workflows/ci.yml");
            RuleFor(results, "CICD_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void CICD_001_Should_Pass_When_GitLab_CI_Exists()
        {
            var results = Evaluate(".gitlab-ci.yml");
            RuleFor(results, "CICD_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void CICD_001_Should_Fail_When_No_CI_Config()
        {
            var results = Evaluate("README.md", "src/index.ts");
            RuleFor(results, "CICD_001").Passed.ShouldBeFalse();
        }

        // ── CICD_002 ──────────────────────────────────────────────────────────

        [Fact]
        public void CICD_002_Should_Pass_When_Eslint_Flat_Config_Exists()
        {
            var results = Evaluate("eslint.config.mjs");
            RuleFor(results, "CICD_002").Passed.ShouldBeTrue();
        }

        [Fact]
        public void CICD_002_Should_Pass_When_Prettier_Config_Exists()
        {
            var results = Evaluate(".prettierrc");
            RuleFor(results, "CICD_002").Passed.ShouldBeTrue();
        }

        [Fact]
        public void CICD_002_Should_Fail_When_No_Lint_Config()
        {
            var results = Evaluate("README.md");
            RuleFor(results, "CICD_002").Passed.ShouldBeFalse();
        }

        // ── DEP_001 ───────────────────────────────────────────────────────────

        [Fact]
        public void DEP_001_Should_Pass_When_Package_Lock_At_Root()
        {
            var results = Evaluate("package-lock.json");
            RuleFor(results, "DEP_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void DEP_001_Should_Pass_When_Package_Lock_In_Subdirectory()
        {
            var results = Evaluate("nextjs/package-lock.json");
            RuleFor(results, "DEP_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void DEP_001_Should_Pass_When_Yarn_Lock_Exists()
        {
            var results = Evaluate("yarn.lock");
            RuleFor(results, "DEP_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void DEP_001_Should_Fail_When_No_Lock_File()
        {
            var results = Evaluate("package.json");
            RuleFor(results, "DEP_001").Passed.ShouldBeFalse();
        }

        // ── SEC_001 ───────────────────────────────────────────────────────────

        [Fact]
        public void SEC_001_Should_Pass_When_Gitignore_At_Root()
        {
            var results = Evaluate(".gitignore");
            RuleFor(results, "SEC_001").Passed.ShouldBeTrue();
        }

        [Fact]
        public void SEC_001_Should_Fail_When_No_Gitignore()
        {
            var results = Evaluate("README.md");
            RuleFor(results, "SEC_001").Passed.ShouldBeFalse();
        }

        // ── SEC_002 ───────────────────────────────────────────────────────────

        [Fact]
        public void SEC_002_Should_Pass_When_No_Env_Files_Present()
        {
            var results = Evaluate("README.md", ".gitignore");
            RuleFor(results, "SEC_002").Passed.ShouldBeTrue();
        }

        [Fact]
        public void SEC_002_Should_Fail_When_Env_File_Is_Committed()
        {
            var results = Evaluate(".env");
            RuleFor(results, "SEC_002").Passed.ShouldBeFalse();
        }

        [Fact]
        public void SEC_002_Should_Fail_When_Env_File_In_Subdirectory()
        {
            var results = Evaluate("nextjs/.env.local");
            RuleFor(results, "SEC_002").Passed.ShouldBeFalse();
        }

        // ── SEC_003 ───────────────────────────────────────────────────────────

        [Fact]
        public void SEC_003_Should_Pass_When_Security_Md_Exists()
        {
            var results = Evaluate("SECURITY.md");
            RuleFor(results, "SEC_003").Passed.ShouldBeTrue();
        }

        [Fact]
        public void SEC_003_Should_Pass_When_Codeowners_Exists()
        {
            var results = Evaluate(".github/CODEOWNERS");
            RuleFor(results, "SEC_003").Passed.ShouldBeTrue();
        }

        [Fact]
        public void SEC_003_Should_Fail_When_Neither_Exists()
        {
            var results = Evaluate("README.md", ".gitignore");
            RuleFor(results, "SEC_003").Passed.ShouldBeFalse();
        }

        // ── Helpers ───────────────────────────────────────────────────────────

        private List<RuleResult> Evaluate(params string[] paths)
        {
            return _ruleEngine.Evaluate(_scanRunId, new List<string>(paths));
        }

        private static RuleResult RuleFor(List<RuleResult> results, string ruleId)
        {
            return results.Find(r => r.RuleId == ruleId);
        }
    }
}
