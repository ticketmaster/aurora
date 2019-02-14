### Text

Text Component with a dark, light, and accent variants available.

This component supports both traditional color variants as well as themed color variants.

In order to access the themed color variants, please pass a valid `theme` and `themed` prop to this component and ensure that you have a properly configured `ThemeProvider` above this component in your DOM hierarchy.

### Props

```table
span: 6
rows:
  - Prop: tag
    Type: string
    Default: div
    Notes: Determines the tag of the underlying element. One of "div", "span", "p", "h3", "h4", "h5", and "h6".
  - Prop: variant
    Type: string
    Default: dark
    Notes: Determines the style of the Text. One of "dark", "light", and "accent".
  - Prop: accent
    Type: string
    Default:
    Notes: If variant equals "accent", this props determines the style of the Text. For traditional colors, this value should be one of "aquamarine", "azure", "alert", "caution", "cruz", "heliotrope", "positive", "summerSky", or "turquoise". For themed colors, this value should be one of "brand", "primary", "special", "accent01", "accent02", "accent03", "accent04", "gray01", "gray02", "gray03", "gray04", "gray05", "error", "caution", "success", or "transparent".
  - Prop: size
    Type: string
    Default: hecto
    Notes: Determines the font-size of the Text. One of "mini", "uno", "hecto", "kilo", "giga", "tera", "zetta", "giga", and "tera".
  - Prop: responsiveSize
    Type: object
    Default: "{ xSmall: null, small: null, medium: null, large: null, xLarge: null }"
    Notes: Determines the font-size of the Text at a given viewport size. If no viewport-specific font-size is provided, this prop will default to the next largest viewport-specific font-size provided or the size prop.
  - Prop: weight
    Type: string
    Default: regular
    Notes: Determines the font-weight of the Text. One of "regular" and "semiBold".
  - Prop: primary
    Type: boolean
    Default: "false"
    Notes: Determines if the base hue of the font-color should be used.
  - Prop: secondary
    Type: boolean
    Default: "false"
    Notes: Determines if the light hue of the font-color should be used.
  - Prop: disabled
    Type: boolean
    Default: "false"
    Notes: Determines if the muted hue of the font-color should be used.
  - Prop: theme
    Type: object
    Default: "{ themeName: 'tm' }"
    Notes: Determines which theme, if any, should be used to style this component.
  - Prop: themed
    Type: boolean
    Default: "false"
    Notes: Determines if context of the ThemeProvider should be used to style this component.
  - Prop: children
    Type: node
    Default: "null"
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
    <Column medium={2}>Responsive Size</Column>
    <Column medium={6}>
        <Text responsiveSize={{ xSmall: "uno", small: "hecto", medium: "kilo", large: "giga", xLarge: "tera" }}>{str}</Text>
    </Column>
</Row>
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

### Ticketmaster Themed Text Accents

```react
const str = "Better is together";
<ThemeProvider theme={{ themeName: "tm"}}>
    <Container>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} size="giga">Accent</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} primary={true} size="giga">Primary</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} secondary={true} size="giga">Secondary</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} disabled={true} size="giga">Disabled</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="brand" size="kilo">Brand</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="brand" primary={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="primary" primary={true} size="kilo">Primary</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="primary" primary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="primary" secondary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="primary" disabled={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="special" primary={true} size="kilo">Special</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="special" primary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="special" secondary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="special" disabled={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="accent01" primary={true} size="kilo">Accent 1</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent01" primary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent01" secondary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent01" disabled={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="accent02" primary={true} size="kilo">Accent 2</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent02" primary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent02" secondary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent02" disabled={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="accent03" primary={true} size="kilo">Accent 3</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent03" primary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent03" secondary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent03" disabled={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="accent04" primary={true} size="kilo">Accent 4</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="accent04" primary={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="gray01" primary={true} size="kilo">Gray 1</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="gray01" primary={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="gray02" primary={true} size="kilo">Gray 2</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="gray02" primary={true} size="kilo">{str}</Text>
            </Column>
        </Row>
                <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="gray03" primary={true} size="kilo">Gray 3</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="gray03" primary={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="gray04" primary={true} size="kilo">Gray 4</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="gray04" primary={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="gray05" primary={true} size="kilo">Gray 5</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="gray05" primary={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="error" primary={true} size="kilo">Error</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="error" primary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="error" secondary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="error" disabled={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="caution" primary={true} size="kilo">Caution</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="caution" primary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="caution" secondary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="caution" disabled={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="success" primary={true} size="kilo">Success</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="success" primary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="success" secondary={true} size="kilo">{str}</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="success" disabled={true} size="kilo">{str}</Text>
            </Column>
        </Row>
        <Row style={fontSizeRowStyle}>
            <Column medium={2} >
                <Text themed={true} variant="accent" accent="transparent" primary={true} size="kilo">Transparent</Text>
            </Column>
            <Column medium={3} >
                <Text themed={true} variant="accent" accent="transparent" primary={true} size="kilo">{str}</Text>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
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
