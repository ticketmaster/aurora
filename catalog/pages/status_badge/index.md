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

### Dark Status Badges

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
  <br />
  <StatusBadge
    color={themes.global.onyx.light}
    label="neutral"
    variant="dark"
  />
  <br/ >
  <StatusBadge
    color={themes.global.success.base}
    label="transparent"
    variant="transparent"
  />
</div>
```

### Light Status Badges

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

### Event Status Badge Types

```react
---
<Container>
  <Row>
    <Column small={6} medium={6} large={6} xLarge={6}>
      <StatusBadge
        label="Sold Out"
        type="error"
      />
      <br />
      <StatusBadge
        label="Post Poned"
        type="caution"
      />
      <br />
      <StatusBadge
        label="New Date"
        type="default"
      />
      <br />
      <StatusBadge
        label="On Sale: Mon • Aug 27 • 10 AM"
        type="success"
      />
      <br />
      <StatusBadge
        label="Currently Not On Sale"
        type="neutral"
      />
      <br />
    </Column>
    <Column small={6} medium={6} large={6} xLarge={6}>
      <StatusBadge
        label="Sold Out"
        variant="light"
        type="error_light"
      />
      <br />
      
      <StatusBadge
        label="Post Poned"
        variant="light"
        type="caution_light"
      />
      <br />
      
      <StatusBadge
        label="New Date"
        variant="light"
        type="default_light"
      />
      <br />
      
      <StatusBadge
        label="On Sale: Mon • Aug 27 • 10 AM"
        variant="light"
        type="success_light"
      />
      <br />
      <StatusBadge
        label="On Sale: Mon • Aug 27 • 10 AM"
        variant="light"
        type="transparent"
      />
    </Column>
  </Row>
  
  
  
</Container>
```


