### Icons

Different icons which are generated as react components from the svg icons using pixo library.

[Pixo](https://github.com/c8r/pixo/blob/master/README.md)

```hint
To add icons to the project, use the command `npm run add-icons svgFilePath`.
```

### Props

```table
span: 6
rows:
  - Prop: size
    Type: number
    Component: OverflowIcon, UserIcon, ChevronIcon, StarIcon
    Notes: Required
  - Prop: color
    Type: string
    Component: OverflowIcon, UserIcon, ChevronIcon, StarIcon
    Notes: Required
  - Prop: direction
    Type: string
    Component: ChevronIcon
    Notes: Optional. Value is one of ["up", "down", "left", "right"]
```

```react
<Container>
<Row>
  <Column medium={3}>
    <div style={iconStyle}><ChevronIcon size={15} color="#000" direction="down" /></div>
    <div style={iconLabelStyle}>ChevronDown Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ChevronIcon size={15} color="#000" direction="up" /></div>
    <div style={iconLabelStyle}>ChevronUp Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ChevronIcon size={15} color="#000" direction="left" /></div>
    <div style={iconLabelStyle}>ChevronLeft Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ChevronIcon size={15} color="#000" direction="right" /></div>
    <div style={iconLabelStyle}>ChevronRight Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><UserIcon size={24} color="#000"/></div>
    <div style={iconLabelStyle}>ChevronDown Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><OverflowIcon size={22} color="#000"/></div>
    <div style={iconLabelStyle}>ChevronUp Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><SearchIcon size={22} color="#000"/></div>
    <div style={iconLabelStyle}>Search Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><StarIcon size={22} color="#000"/></div>
    <div style={iconLabelStyle}>Star Icon</div>
  </Column>

</Row>
</Container>
```
