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
  <StatusBadgeDemo variant="light" />
</div>
```

```table
span: 4
rows:
  - Prop: color
    Type: String color value
    Default: null
  - Prop: label
    Type: String, text presented to the user.
    Default: null
  - Prop: variant
    Type: String - one of 'light', 'dark'.
    Default: dark
    Notes: Changes front color and Badge background color. DARK - font will be white with a dark background.  LIGHT - font will be black with a light background.
  
```

### Dark Status Badge

```react
---
<div>
  <StatusBadge
    color={themes.global.error.base}
    label="error"
    variant="dark"
  />
  <br />
  <StatusBadge
    color={themes.global.caution.dark}
    label="caution"
    variant="dark"
  />
  <br />
  <StatusBadge
    color={themes.global.primary.base}
    label="base"
    variant="dark"
  />
  <br />
  <StatusBadge
    color={themes.global.success.base}
    label="success"
    variant="dark"
  />
</div>
```

### Light Status Badge

```react
---
<div>
  <StatusBadge
    color={themes.global.error.light}
    label="error"
    variant="light"
  />
  <br />
  <StatusBadge
    color={themes.global.caution.light}
    label="caution"
    variant="light"
  />
  <br />
  <StatusBadge
    color={themes.global.primary.muted}
    label="base"
    variant="light"
  />
  <br />
  <StatusBadge
    color={themes.global.success.light}
    label="success"
    variant="light"
  />
</div>
```


### Event Status Badges

```react
---
<div>
  <StatusBadge
    color={themes.global.error.base}
    label="Sold Out"
    variant="dark"
  />
  <br />
  <StatusBadge
    color={themes.global.caution.dark}
    label="Post Poned"
    variant="dark"
  />
  <br />
  <StatusBadge
    color={themes.global.accent01.dark}
    label="New Date"
    variant="dark"
  />
  <br />
  <StatusBadge
    color={themes.global.success.base}
    label="On Sale: Mon • Aug 27 • 10 AM"
    variant="dark"
  />
  <br />
  <StatusBadge
    color={themes.global.onyx.light}
    label="Currently Not On Sale"
    variant="dark"
  />
  <br />
  <StatusBadge
    color={themes.global.success.base}
    label="On Sale: Mon • Aug 27 • 10 AM"
    variant="transparent"
  />
</div>
```


