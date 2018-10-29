### Text

Text Component with a dark, light, and accent variants available.

### Props

```table
span: 6
rows:
  - Prop: tag
    Type: string
    Default: div
    Notes: Determines the tag of the underlying element. One of "div", "span" and "p".
  - Prop: variant
    Type: string
    Default: dark
    Notes: Determines the style of the Text. One of "dark", "light", and "accent".
  - Prop: accent
    Type: string
    Default:
    Notes: If variant equals "accent", this props determines the style of the Text. One of "aquamarine", "azure", "alert", "caution", "cruz", "heliotrope", "positive", "summerSky", and "turquoise".
  - Prop: size
    Type: string
    Default: hecto
    Notes: Determines the font-size of the Text. One of "uno", "hecto", "kilo", "giga", and "tera".
  - Prop: weight
    Type: string
    Default: regular
    Notes: Determines the font-weight of the Text. One of "regular" and "semiBold".
  - Prop: primary
    Type: boolean
    Default: false
    Notes: Determines if the base hue of the font-color should be used.
  - Prop: secondary
    Type: boolean
    Default: false
    Notes: Determines if the light hue of the font-color should be used.
  - Prop: disabled
    Type: boolean
    Default: false
    Notes: Determines if the muted hue of the font-color should be used.
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Text's children
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying div, or in the case of a different tag prop being passed, other element
```

### Font Weights

```react
<Container>
<Row>
  <Column medium={3}>
    <div style={getFontWeightTextStyle({fontWeight: typography.weight.light})}>Aa</div>
    <div style={fontWeightLabelStyle}>Light</div>
  </Column>

  <Column medium={3}>
    <div style={getFontWeightTextStyle({fontWeight: typography.weight.regular})}>Aa</div>
    <div style={fontWeightLabelStyle}>Regular</div>
  </Column>

  <Column medium={3}>
    <div style={getFontWeightTextStyle({fontWeight: typography.weight.semiBold})}>Aa</div>
    <div style={fontWeightLabelStyle}>Semi Bold</div>
  </Column>

  <Column medium={3}>
     <div style={getFontWeightTextStyle({fontWeight: typography.weight.extraBold})}>Aa</div>
    <div style={fontWeightLabelStyle}>Extra Bold</div>
  </Column>
</Row>

</Container>
```

### Font Sizes

```react
const str = "Better is together";
<Container>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Uno - 12 px</Column>
    <Column medium={6}>
        <Text size="uno">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Hecto - 14 px</Column>
    <Column medium={6}>
        <Text size="hecto">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Kilo - 16 px</Column>
    <Column medium={6}>
        <Text size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Giga - 20 px</Column>
    <Column medium={6}>
        <Text size="giga">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Tera - 24 px</Column>
    <Column medium={6}>
        <Text size="tera">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Zetta - 32 px</Column>
    <Column medium={6} tyle={{fontSize: "32px"}}>
        {str}
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Bronto - 46 px</Column>
    <Column medium={6} style={{fontSize: "46px"}}>
        {str}
    </Column>
</Row>

</Container>
```

### Text Variants

```react
const str = "Better is together";
<Container>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text size="giga">Variant</Text>
    </Column>
    <Column medium={3} >
        <Text primary={true} size="giga">Primary</Text>
    </Column>
    <Column medium={3} >
        <Text secondary={true} size="giga">Secondary</Text>
    </Column>
    <Column medium={3} >
        <Text disabled={true} size="giga">Disabled</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text size="kilo">Dark</Text>
    </Column>
    <Column medium={3} >
        <Text primary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text secondary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text disabled={true} size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyleDark}>
    <Column medium={2} >
        <Text primary={true} variant="light"co size="kilo">Light</Text>
    </Column>
    <Column medium={3} >
        <Text primary={true} variant="light" size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text secondary={true} variant="light" size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text disabled={true} variant="light" size="kilo">{str}</Text>
    </Column>
</Row>
</Container>
```

### Text Accents

```react
const str = "Better is together";
<Container>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text size="giga">Accent</Text>
    </Column>
    <Column medium={3} >
        <Text primary={true} size="giga">Primary</Text>
    </Column>
    <Column medium={3} >
        <Text secondary={true} size="giga">Secondary</Text>
    </Column>
    <Column medium={3} >
        <Text disabled={true} size="giga">Disabled</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="aquamarine" size="kilo">Aquamarine</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="aquamarine" primary={true} size="kilo">{str}</Text>
    </Column>

</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="azure" primary={true} size="kilo">Azure</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="azure" primary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="azure" secondary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="azure" disabled={true} size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="alert" primary={true} size="kilo">Alert</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="alert" primary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="alert" secondary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="alert" disabled={true} size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="caution" primary={true} size="kilo">Caution</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="caution" primary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="caution" secondary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="caution" disabled={true} size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="cruz" primary={true} size="kilo">Cruz</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="cruz" primary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="cruz" secondary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="cruz" disabled={true} size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="heliotrope" primary={true} size="kilo">Heliotrope</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="heliotrope" primary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="heliotrope" secondary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="heliotrope" disabled={true} size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="positive" primary={true} size="kilo">Positive</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="positive" primary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="positive" secondary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="positive" disabled={true} size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="summerSky" primary={true} size="kilo">Summer Sky</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="summerSky" primary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="summerSky" secondary={true} size="kilo">{str}</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="summerSky" disabled={true} size="kilo">{str}</Text>
    </Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >
        <Text variant="accent" accent="turquoise" primary={true} size="kilo">Turquoise</Text>
    </Column>
    <Column medium={3} >
        <Text variant="accent" accent="turquoise" primary={true} size="kilo">{str}</Text>
    </Column>
</Row>
</Container>
```

### Link Props

```table
span: 6
rows:
  - Prop: href
    Type: string
    Default: null
    Notes: When not provided the component falls back to span or button
  - Prop: onClick
    Type: function
    Default: null
    Notes: When not provided the component falls back to button only if href is absent
  - Prop: size
    Type: string
    Default: hecto
    Notes: Determines the font-size of the Text. One of "uno", "hecto", "kilo", "giga", and "tera".
  - Prop: weight
    Type: string
    Default: regular
    Notes: Determines the font-weight of the Text. One of "regular" and "semiBold".
  - Prop: primary
    Type: boolean
    Default: false
    Notes: Determines if the base hue of the font-color should be used.
  - Prop: secondary
    Type: boolean
    Default: false
    Notes: Determines if the light hue of the font-color should be used.
  - Prop: disabled
    Type: boolean
    Default: false
    Notes: Determines if the muted hue of the font-color should be used.
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Text's children
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying element.
```

### Link

```react
const str = "Better is together";
<Container>
    <Row style={fontSizeRowStyle}>
        <Column medium={6}>
            <Link href="#">{str}</Link>
        </Column>
        <Column medium={6}>
            <Link href="#" weight="semiBold">{str}</Link>
        </Column>
    </Row>
</Container>
```
