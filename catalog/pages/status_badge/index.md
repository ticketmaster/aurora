### Status Badge

Status Badge Component

### Props

```table
span: 4
rows:
  - Prop: variant
    Type: one of 'dark', 'light'
    Default: dark
    Notes: When 'dark' renders white text, when 'light' renders black text
  - Prop: tooltipDirection
    Type: one of 'top', 'bottom', 'left', 'right'
    Default: bottom
    Notes: Tooltip position
  - Prop: visibleBadges
    Type: Array of badges props objects - label and color
    Default: empty array []
    Notes: Badges that will be shown. Label is required and color by default is global primary color.
  - Prop: hiddenBadges
    Type: Array of badges props objects - label and color
    Default: empty array []
    Notes: Badges that will be shown. Label is required and color by default is global primary color.
```

```react
---
<div>
  <StatusBadgeDemo />
  <Spacing top={{ xSmall: 'colossal' }}/>
  <StatusBadgeDemo type="light" />
</div>
```
