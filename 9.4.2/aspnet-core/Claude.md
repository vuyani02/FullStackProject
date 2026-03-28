@BACKEND_STRUCTURE.md

## C# Coding Standards

### Comments
- Every class must have a `///` summary comment describing its purpose, unless it would be self-evident to a junior developer new to the project.
- Every public method must have a `///` summary comment describing what it does.
- Any non-obvious logic or assumption inside a method must be preceded by an inline comment explaining it.
- Never write comments that just restate the code (e.g., `// increment i`).

### Class and Method Size
- Classes: max **350 lines**. Anything longer is likely violating Single Responsibility — extract a domain service or helper.
- Methods: if you have to scroll vertically to see the full method, it is too long. Extract named sub-methods. Sub-methods called exclusively by one parent method should be placed immediately after that parent method in the file.

### Member Ordering
Arrange class members logically so a reader does not have to jump around:
- Group related properties together; most significant ones at the top.
- If methods are intended to be called in a certain order, their order in the class should mirror that sequence.
- Sub-methods that are only called by one parent method go immediately after that parent method.
- Use `#region` to group sub-methods on longer classes.

### Guard Clauses
Use guard clauses at the top of methods to fail fast. Prefer `Ardalis.GuardClauses`:
```csharp
Guard.Against.NullOrWhiteSpace(request.GithubUrl, nameof(request.GithubUrl));
Guard.Against.Null(repository, nameof(repository));
```
Avoid deeply nested `if/else` trees — invert conditions and return/throw early.

### Nesting
If you are nesting three levels deep or more, refactor. Extract the nested block into a named private method or apply the early-return principle.

### Naming
Use clear, correctly spelled variable and method names that convey intent. Take time to find the right name — it pays dividends in readability. Be consistent with existing conventions in the codebase.

### Magic Numbers
Replace magic numbers with named constants or enums. Never embed unexplained numeric or string literals in logic.

### DRY / KISS
- Do not repeat yourself — if similar logic appears in three or more places, extract it into a reusable method.
- Keep code as simple as possible. Fewer lines is better, but not at the cost of readability (avoid cramming too many conditions into one LINQ statement).

### Dead Code
Delete code that is no longer used. Do not leave commented-out blocks or unused methods in the codebase. If it is gone from the logic, it should be gone from the file.

### Performance
- No N+1 queries — never call the database inside a loop.
- Use `GetAllListAsync` with a predicate rather than loading all rows and filtering in memory.
- Prefer `FirstOrDefaultAsync` over `GetAllListAsync` when you only need one record.

### Common Mistakes to Avoid
| Mistake | Correct approach |
|---------|-----------------|
| Domain logic in `AppService` | Move to the domain service (`RepoGuardianManager`) |
| DTOs defined in the domain/Core layer | DTOs belong in `Application` only |
| Using `Microsoft.Extensions.Logging.ILogger` | Use `Castle.Core.Logging.ILogger` (ABP convention) |
| `var result = repo.GetAll().ToList()` then LINQ filter | Filter inside `GetAllListAsync(predicate)` |
| DTO class named `XxxDto` for request bodies | Name request DTOs `{EndpointName}Request` (e.g., `AddRepositoryRequest`) |
| Magic numbers in logic | Extract to a named `const` or `enum` |
| Leaving dead/commented-out code | Delete it |

## Logging

ABP automatically provides a `Logger` property on classes that extend `ApplicationService`, `AbpController`, or other ABP base classes — use it directly without injecting anything.

For classes that do **not** extend an ABP base class (e.g., standalone domain services, background jobs, custom helpers), inject `ILogger` from `Castle.Core.Logging` — **never** use `Microsoft.Extensions.Logging.ILogger` directly:

```csharp
using Castle.Core.Logging;

public class MyService
{
    public ILogger Logger { get; set; } = NullLogger.Instance;
}
```

ABP's Castle Windsor container will inject the logger automatically via property injection.

## Testing

After every change that introduces business logic, add tests using **xUnit**. Tests live in `test/FullStackProject.Tests/`.

- Domain services (e.g., `RepoGuardianManager`) → unit tests, mock repositories with a mocking library (e.g., `NSubstitute` or `Moq`)
- Application services → integration tests using ABP's built-in test base (`FullStackProjectTestBase`)
- Pure logic (e.g., rule checks, score calculation, URL parsing) → unit tests, no mocks needed

Do not add tests for ABP/EF plumbing (entity definitions, DbSets, migrations) — only test code that contains real logic.