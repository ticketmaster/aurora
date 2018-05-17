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
    <Column medium={2} >12 px</Column>
    <Column medium={6} style={{fontSize: "12px"}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>14 px</Column>
    <Column medium={6} style={{fontSize: "14px"}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>16 px</Column>
    <Column medium={6} style={{fontSize: "16px"}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>20 px</Column>
    <Column medium={6} style={{fontSize: "20px"}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>24 px</Column>
    <Column medium={6} style={{fontSize: "24px"}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>32 px</Column>
    <Column medium={6} style={{fontSize: "32px"}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>46 px</Column>
    <Column medium={6} style={{fontSize: "42px"}}>{str}</Column>
</Row>

</Container>
```

### Text Variations

```react
const str = "Better is together";
<Container>
<Row style={fontSizeRowStyle}>
    <Column medium={2} >Primary</Column>
    <Column medium={6} style={{color: colors.onyx.base}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Seconday</Column>
    <Column medium={6} style={{color: colors.onyx.light}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Disabled</Column>
    <Column medium={6} style={{color: colors.onyx.muted}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Alert</Column>
    <Column medium={6} style={{color: colors.alert.base}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Caution</Column>
    <Column medium={6} style={{color: colors.caution.base}}>{str}</Column>
</Row>
<Row style={fontSizeRowStyle}>
    <Column medium={2}>Affirming</Column>
    <Column medium={6} style={{color: colors.positive.base}}>{str}</Column>
</Row>

</Container>
```
