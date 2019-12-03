### SectionDivider

SectionDivider Component makes bottom spacing and can divide content by section;

### Props

```table
span: 6
rows:
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Divider's children
  - Prop: top
    Type: object
    Default: null
    Notes: Set top spacing (default bottom spacing will be disabled)
  - Prop: bottom
    Type: object
    Default: null
    Notes: Set bottom spacing (default bottom spacing will be disabled)
```

### MainSectionDivider (Desktop: 88px, Tablet: 64px, Mobile: 48px)

```react
---
<MainSectionDivider>
    MainSectionDivider
</MainSectionDivider>
```

### GeneralContentSpacer (Desktop: 24px, Tablet: 24px, Mobile: 24px)

```react
---
<GeneralContentSpacer>
    GeneralContentSpacer
</GeneralContentSpacer>
```

### MainSectionHeaderSpacer (Desktop: 32px, Tablet: 32px, Mobile: 32px)

```react
---
<MainSectionHeaderSpacer>
    MainSectionHeaderSpacer
</MainSectionHeaderSpacer>
```

### SubSectionDivider (Desktop: 48px, Tablet: 48px, Mobile: 32px)

```react
---
<SubSectionDivider>
    SubSectionDivider
</SubSectionDivider>
```

### SubSectionDivider with custom spacings

```react
---
<SubSectionDivider top={{xSmall:"slim"}} bottom={{xSmall:"normal"}}>
    SubSectionDivider
</SubSectionDivider>
```
