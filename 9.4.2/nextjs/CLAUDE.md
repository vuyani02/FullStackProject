@AGENTS.md

### Styling

All styles use `antd-style`'s `createStyles`, co-located as `app/<route>/style.ts`:
```tsx
import { createStyles } from "antd-style";
export const useStyles = createStyles(({ token }) => ({ ... }));
```

### antd
- use ant design as much as possible.

**Forbidden patterns:**
- Multiple Axios instances
- Inline styles or non-antd-style CSS
- Provider files outside the 4-file structure
- Under app folder only folders with page.ts must exist.
- When ever you do something tell me what you are trying to do, don't just do.
