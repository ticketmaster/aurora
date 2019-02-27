### Range Slider

```table
span: 6
rows:
  - Prop: defaultValue
    Type: Array of numbers
    Default: '[0, 100]'
    Notes: Defines initial values of left and right handle. Please use 0 as the first array element in case of a single slider.
  - Prop: value
    Type: Array of numbers
    Default: "null"
    Notes: Sets the value of the left and right handle and turns the slider into controlled element. Please use 0 as the first array element in case of a single slider.
  - Prop: single
    Type: boolean
    Default: "false"
    Notes: Set to `true` to get a slider with a single knob.
  - Prop: disabled
    Type: boolean
    Default: "false"
    Notes: When true disables the slider.
  - Prop: min
    Type: number
    Default: 0
    Notes: Sets slider min value
  - Prop: max
    Type: number
    Default: 100
    Notes: Sets slider max value
  - Prop: step
    Type: number
    Default: 1
    Notes: Sets slider step
  - Prop: onChange
    Type: function
    Default: noop
    Notes: Called on slider value change
  - Prop: onBeforeChange
    Type: function
    Default: noop
    Notes: Called on mouse down or touch start
  - Prop: onAfterChange
    Type: function
    Default: noop
    Notes: Called on mouse up or touch end
  - Prop: onFocus
    Type: function
    Default: noop
    Notes: Called on slider focus
  - Prop: onBlur
    Type: function
    Default: noop
    Notes: Called on slide blur
  - Prop: className
    Type: string
    Default: ""
    Notes: Adds class to slider container
  - Prop: threshold
    Type: number
    Default: 0
    Notes: Defines the minimum difference between left and right handle values
```

```react
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column small={2}/>
            <Column small={8}>
                <RangeSlider />
            </Column>
            <Column small={2}/>
        </Row>
        <Row>
            <Column small={2}/>
            <Column small={8}>
                <RangeSlider disabled/>
            </Column>
            <Column small={2}/>
        </Row>
        <Row>
            <Column small={2}/>
            <Column small={8}>
                <RangeSlider single/>
            </Column>
            <Column small={2}/>
        </Row>
    </Container>
</ThemeProvider>
```
