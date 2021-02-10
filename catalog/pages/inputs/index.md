## SearchInput

### Props

```table
span: 6
rows:
  - Prop: onBlur
    Type: function
    Default: null
    Notes: Handler function
  - Prop: onFocus
    Type: function
    Default: null
    Notes: Handler function
  - Prop: slim
    Type: boolean
    Default: "false"
    Notes: Size design variant
  - Prop: invert
    Type: boolean
    Default: N/A
    Notes: Color design variant
  - Prop: className
    Type: string
    Default: null
    Notes: Enables passing a className to the Container
  - Prop: iconProps
    Type: object
    Default: null
    Notes: Enables passing props to the SearchIcon
```

```react
responsive: true
span: 6
---
<Header>
    <Column medium={10} large={7} style={{ paddingBottom: "16px" }}>
        <Search placeholder="Enter term..." iconProps={{ color: "currentColor" }} />
    </Column>
</Header>
```

```react
responsive: true
span: 6
---
<Container>
    <Row>
        <Column medium={10} large={7} style={{ padding: "16px 0" }}>
            <Search invert placeholder="Enter term..." />
        </Column>
    </Row>
</Container>
```

## Search Slim

```react
responsive: true
span: 6
---
<Header>
    <Column medium={10} large={7} style={{ paddingBottom: "16px" }}>
        <Search slim placeholder="Enter term..." />
    </Column>
</Header>
```

```react
responsive: true
span: 6
---
<Container>
    <Row>
        <Column medium={10} large={7} style={{ padding: "16px 0" }}>
            <Search invert slim placeholder="Enter term..." />
        </Column>
    </Row>
</Container>
```

## Radio Group Button

### Props

```table
span: 6
rows:
  - Prop: value
    Type: array of strings
    Default: N/A
    Notes: Can only be one value within the array
  - Prop: onChange
    Type: Function
    Default: N/A
    Notes:
```

## Radio Button

### Props

```table
span: 6
rows:
  - Prop: size
    Type: string
    Default: small
    Notes: Can be small or large
  - Prop: name
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: isActive
    Type: boolean
    Default: "true"
    Notes: Will disable radio input
  - Prop: "value"
    Type: string
    Default: N/A
    Notes: Is required
  - Prop: index
    Type: number
    Default: N/A
    Notes: Is required for keyboard accessibility
  - Prop: isTopAligned
    Type: boolean
    Default: "false"
    Notes: Align layout to the top to handle custom component passed to the label
```

```react
span: 6
---
<Container>
    <Row>
        <Column medium={6} style={{ padding: "16px 0" }}>
          <RadioGroup aria-label="test large radio">
                <RadioButton size="large" name="example1" value="FirstButton" index={0} isTopAligned>
                    Testing One
                    <p style={{ fontSize: "12px", margin: "3px 0 0 0", color: "rgba(38, 38, 38, 0.65" }}>Testing One description</p>
                </RadioButton>
                <RadioButton size="large" name="example1" value="SecondButton" index={1}>
                    Testing Two
                </RadioButton>
                <RadioButton size="large" name="example1" value="ThirdButton" index={2}>
                    Testing Three
                </RadioButton>
          </RadioGroup>
        </Column>
        <Column medium={6} style={{ padding: "16px 0" }}>
          <RadioGroup aria-label="test small radio">
                <RadioButton size="small" name="example2" value="1" index={0}>
                    Testing One
                </RadioButton>

                <RadioButton size="small" name="example2" value="2" index={1} isTopAligned>
                    Testing Two
                    <p style={{ fontSize: "12px", margin: "3px 0 0 0", color: "rgba(38, 38, 38, 0.65" }}>Testing Two description</p>
                </RadioButton>

                <RadioButton size="small" name="example2" value="3" index={2}>
                    Testing Three
                </RadioButton>
          </RadioGroup>
        </Column>
    </Row>
</Container>
```

## Check Box Group

### Props

```table
span: 6
rows:
  - Prop: value
    Type: array of strings
    Default: N/A
    Notes: Can be many values within the array
  - Prop: onChange
    Type: Function
    Default: N/A
    Notes:
  - Prop: isTopAligned
    Type: boolean
    Default: "false"
    Notes: Align layout to the top to handle custom component passed to the label
```

```react
span: 6
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column medium={6}  style={{ padding: "16px 0" }}>
                <CheckBoxGroup value={["1","2","3"]}>
                    <CheckBoxButton isTopAligned size="large" name="Testing One"  value="1" index={0} style={{ marginBottom: '10px' }}>
                        Testing One
                        <p style={{ fontSize: "12px", margin: "3px 0 0 0", color: "rgba(38, 38, 38, 0.65" }}>Testing One description</p>
                    </CheckBoxButton>
                    <CheckBoxButton size="large" name="Testing Two" value="2" index={1} style={{ marginBottom: '10px' }}>
                        Testing Two
                    </CheckBoxButton>
                    <CheckBoxButton size="large" name="Testing Three" value="3" index={2}>
                        Testing Three
                    </CheckBoxButton>
                </CheckBoxGroup>
            </Column>
            <Column medium={6} style={{ padding: "16px 0" }}>
                <CheckBoxGroup >
                    <CheckBoxButton isTopAligned size="small" name="Testing One"  value="1" index={0} style={{ marginBottom: '10px' }}>
                        Testing One
                        <p style={{ fontSize: "12px", margin: "3px 0 0 0", color: "rgba(38, 38, 38, 0.65" }}>Testing One description</p>
                    </CheckBoxButton>
                    <CheckBoxButton size="small" name="Testing Two" value="2" index={1} style={{ marginBottom: '10px' }}>
                        Testing Two
                    </CheckBoxButton>
                    <CheckBoxButton size="small" name="Testing Three" value="3" index={2}>
                        Testing Three
                    </CheckBoxButton>
                </CheckBoxGroup>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

## Check Box Button

### Props

```table
span: 6
rows:
  - Prop: size
    Type: string
    Default: small
    Notes: Can be small or large
  - Prop: name
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: value
    Type: string
    Default: N/A
    Notes: Is Required
  - Prop: disabled
    Type: boolean
    Default: 'false'
    Notes: Will disable checkbox input
  - Prop: index
    Type: number
    Default: N/A
    Notes: Is required for keyboard accessibility (only when used with CheckBoxGroup)
  - Prop: onClick
    Type: function
    Default: N/A
    Notes: click handler (required when used without CheckBoxGroup)
  - Prop: isChecked
    Type: boolean or "indeterminate"
    Default: N/A
    Notes: defines if checked or indeterminate (required when used without CheckBoxGroup)
```

```react
span: 6
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column medium={6}  style={{ padding: "16px 0" }}>
                <CheckboxWrapperExample size="small"/>
            </Column>
            <Column medium={6}  style={{ padding: "16px 0" }}>
                <CheckboxWrapperExample size="large"/>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

## Field Input

```table
span: 6
rows:
  - Prop: labelPosition
    Type: string
    Default: top
    Notes: Can be top or left
  - Prop: placeholder
    Type: string
    Default: N/A
    Notes: Is not required
  - Prop: name
    Type: string
    Default: "null"
    Notes: Optional input name.
  - Prop: id
    Type: string
    Default: N/A
    Notes: Optional input id.
  - Prop: label
    Type: string
    Default: N/A
    Notes: Optional input label. If not passed label container will not be rendered
  - Prop: labelStyle
    Type: object
    Default: N/A
    Notes: Optional. Allows editing label style.
  - Prop: errorMessage
    Type: string
    Default: N/A
    Notes: Will present a different style when a prop is supplied
  - Prop: errorFieldProps
    Type: object
    Default: N/A
    Notes: Extra props passed to the error field
  - Prop: disabled
    Type: boolean
    Default: "false"
    Notes: Will disable text input
  - Prop: size
    Type: string
    Default: regular
    Notes: Defines the size of an input field. Can be small, regular or large
  - Prop: tag
    Type: enum("input", "textarea")
    Default: N/A
    Notes: Changes the underlying HTML Element.
```

```react
span: 6
---
<Container>
    <ThemeProvider theme={{ themeName: 'tm' }}>
        <Row>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" id="testID"  style={{ color: 'blue' }} placeholder="Hint Text" name="test1" label="First Name" size="small"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test2" label="First Name"  errorMessage="Something Went Wrong" size="small"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" hintText="Hint Text" disabled={true} name="test3" label="First Name" size="small"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test4" label="First Name"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test5" label="First Name"  errorMessage="Something Went Wrong"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" hintText="Hint Text" disabled={true} name="test6" label="First Name"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test7" label="First Name" size="large"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" placeholder="Hint Text" name="test8" label="First Name"  errorMessage="Something Went Wrong" size="large"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="top" hintText="Hint Text" disabled={true} name="test9" label="First Name" size="large"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input tag="textarea" labelPosition="top" placeholder="Hint Text" name="test111" label="Textarea" size="large"/>
                </Spacing>
            </Column>
        </Row>
    </ThemeProvider>
</Container>
```

```react
span: 6
---
<Container>
    <ThemeProvider theme={{ themeName: 'tm' }}>
        <Row>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test10" label="First Name" size="small"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test11" label="First Name"  errorMessage="Something Went Wrong" size="small"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" hintText="Hint Text" disabled={true} name="test12" label="First Name" size="small"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test13" label="First Name"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test14" label="First Name"  errorMessage="Something Went Wrong"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" hintText="Hint Text" disabled={true} name="test15" label="First Name"/>
                </Spacing>
            </Column>
            <Column medium={4}>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test16" label="First Name" size="large"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" placeholder="Hint Text" name="test17" label="First Name"  errorMessage="Something Went Wrong" size="large"/>
                </Spacing>
                <Spacing top={{small: "cozy"}}>
                    <Input labelPosition="left" hintText="Hint Text" disabled={true} name="test18" label="First Name" size="large"/>
                </Spacing>
            </Column>
        </Row>
    </ThemeProvider>
</Container>
```

## Drop Down Group

### Props

```table
span: 6
rows:
  - Prop: onChange
    Type: function
    Default: "null"
    Notes: Invoked with an array of updatedSelections when one or more option(s) is selected by the user
  - Prop: variant
    Type:
      enum(
        DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL,
        DropDownGroup.LAYOUT_VARIANTS.BORDERLESS_INNER_LABEL,
      )
    Default: DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL
    Notes: Specifies a layout variant of the DropDownGroup
  - Prop: value
    Type: array
    Default: []
    Notes: Specifies array of initial string values
  - Prop: valueOverride
    Type: array
    Default: "null"
    Notes: Specifies array of string values that override internal state
  - Prop: label
    Type: string
    Default: ""
    Notes: Visible with selected option.
  - Prop: placeholder
    Type: string
    Default: ""
    Notes: Visible instead of selected option. Overrides label. Supported in both variants.
  - Prop: hiddenLabel
    Type: boolean
    Default: "false"
    Notes: To avail proper screen reader's reading when placeholder and label can not be displayed in view. Can be used only with label.
  - Prop: isOpen
    Type: boolean
    Default: "false"
    Notes: Used to override internal isOpen state
  - Prop: keywordSearch
    Type: boolean
    Default: 'true'
    Notes: Used to override ability to use keyboard to focus on drop down option
  - Prop: withKeyboardProvider
    Type: boolean
    Default: 'true'
    Notes: Used to override inclusion of a KeyboardProvider to handle keydown events
  - Prop: shouldOpenDownward
    Type: boolean
    Default: 'true'
    Notes: Used to ensure that the DropDownGroup always opens downward
  - Prop: size
    Type: small or large
    Default: "large"
    Notes: Defines size
  - Prop: fullWidth
    Type: boolean
    Default: 'false'
    Notes: Defines if width is 100% of container
  - Prop: onDropDownToggle
    Type: function
    Default: 'null'
    Notes: Callback invoked when dropdown open/hide event fired
  - Prop: dropdownMenuOpen
    Type: function
    Default: 'null'
    Notes: Callback invoked when dropdown open event fired
  - Prop: dropdownMenuClose
    Type: function
    Default: 'null'
    Notes: Callback invoked when dropdown close event fired
  - Prop: hybrid
    Type: boolean
    Default: 'false'
    Notes: Set this to true while implementing hybrid select
  - Prop: hideDropdown
    Type: boolean
    Default: 'true'
    Notes: Use this to toggle dropdown's visiblity when `hybrid={true}`
```

## Drop Down Option

### Props

```table
span: 6
rows:
  - Prop: value
    Type: string
    Default: N/A
    Notes: Required
  - Prop: index
    Type: number
    Default: N/A
    Notes: Required
  - Prop: className
    Type: string
    Default: ""
    Notes: Passed to StyledDropDownItem
  - Prop: onClick
    Type: function
    Default: "null"
    Notes: Invoked with the synthetic event object when the DropDownOption is clicked
  - Prop: chevronVisible
    Type: bool
    Default: true
    Notes: Indicates whether show or hide right chevron icon
  - Prop: preventCloseWithKeys
    Type: bool
    Default: "false"
    Notes: It prevents dropdown menu from closing when option is selected with Enter or Space key.
  - Prop: icon
    Type: node
    Default: null
    Notes: Inserts an icon before label text
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying DropDownInput
```

```react
span: 6
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column medium={3}>
                <DropDownGroup
                  size="small"
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL}
                  placeholder="Select an option"
                  label="Selected:"
                >
                    <DropDownOption value="0" index={0}>Option One One One One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                    <DropDownOption value="5" index={5}>Option Six</DropDownOption>
                    <DropDownOption value="6" index={6}>Option Two</DropDownOption>
                    <DropDownOption value="7" index={7}>Option Three</DropDownOption>
                    <DropDownOption value="8" index={8}>Option Four</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={3}>
                <DropDownGroup
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL}
                  value={["3"]}
                  placeholder="Select an option"
                  shouldOpenDownward={false}
                >
                    <DropDownOption value="0" index={0}>Option One One One One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                    <DropDownOption value="5" index={5}>Option One One One One</DropDownOption>
                    <DropDownOption value="6" index={6}>Option Two</DropDownOption>
                    <DropDownOption value="7" index={7}>Option Three</DropDownOption>
                    <DropDownOption value="8" index={8}>Option Four</DropDownOption>
                    <DropDownOption value="9" index={9}>Option Five</DropDownOption>
                    <DropDownOption value="10" index={10}>Option One One One One</DropDownOption>
                    <DropDownOption value="11" index={11}>Option Two</DropDownOption>
                    <DropDownOption value="12" index={12}>Option Three</DropDownOption>
                    <DropDownOption value="13" index={13}>Option Four</DropDownOption>
                    <DropDownOption value="14" index={14}>Option Five</DropDownOption>
                    <DropDownOption value="15" index={15}>Option Five</DropDownOption>
                    <DropDownOption value="16" index={16}>Option Two</DropDownOption>
                    <DropDownOption value="17" index={17}>Option Three</DropDownOption>
                    <DropDownOption value="18" index={18}>Option Four</DropDownOption>
                    <DropDownOption value="19" index={19}>Option Five</DropDownOption>
                    <DropDownOption value="20" index={20}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={3}>
                <DropDownGroup
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL}
                  placeholder="Select an option"
                  disabled
                >
                    <DropDownOption value="0" index={0}>Option One One One One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={3}>
                <DropDownGroup
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL}
                  placeholder="Chevron hidden"
                  chevronVisible={false}
                >
                    <DropDownOption value="0" index={0}>Option One One One One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
        </Row>
        <Spacing top={{small: "normal"}} />
        <Row >
            <Column medium={3}>
                <DropDownGroup
                  size="small"
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERLESS_INNER_LABEL}
                  placeholder="Select an option"
                >
                    <DropDownOption value="0" index={0}>Option One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" preventCloseWithKeys={true} index={2}>Don't close on Enter</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={3}>
                <DropDownGroup
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERLESS_INNER_LABEL}
                  label="Sort By:"
                  placeholder="Select an option"
                >
                    <DropDownOption value="0" index={0}>Option One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={3}>
                <DropDownGroup
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERLESS_INNER_LABEL}
                  label="Sort By:"
                  placeholder="Select an option"
                  disabled
                >
                    <DropDownOption value="0" index={0}>Option One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={3}>
                <DropDownGroup
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL}
                  value={["all"]}
                  placeholder="date range"
                  icon={<CalendarIcon />}
                >
                    <DropDownOption value="all" index={0}>All dates</DropDownOption>
                    <DropDownOption value="this-weekend" index={1}>This weekends</DropDownOption>
                    <DropDownOption value="custom" index={2}>Date range</DropDownOption>
                </DropDownGroup>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

## Drop Down Label

### Props

```table
span: 6
rows:
  - Prop: size
    Type: small or large
    Default: "large"
    Notes: Defines size
  - Prop: disabled
    Type: bool
    Default: false
    Notes: defines if toggle is disabled
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying label element
```

```react
span: 6
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row >
            <Column medium={4}>
                <DropDownLabel id="labeltext" size="small">Label text</DropDownLabel>
                <DropDownGroup
                  size="small"
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL}
                  placeholder="Select an option"
                  aria-describedby="labeltext"
                >
                    <DropDownOption value="0" index={0}>Option One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={4}>
                <DropDownLabel id="fullwidthlabel">Full Width Drop Down</DropDownLabel>
                <DropDownGroup
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL}
                  placeholder="Select an option"
                  aria-describedby="fullwidthlabel"
                  fullWidth
                >
                    <DropDownOption value="0" index={0}>Option One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
            <Column medium={4}>
                <DropDownLabel disabled>Label text</DropDownLabel>
                <DropDownGroup
                  value={["0"]}
                  variant={DropDownGroup.LAYOUT_VARIANTS.BORDERED_INNER_LABEL}
                  placeholder="Select an option"
                  disabled
                >
                    <DropDownOption value="0" index={0}>Option One</DropDownOption>
                    <DropDownOption value="1" index={1}>Option Two</DropDownOption>
                    <DropDownOption value="2" index={2}>Option Three</DropDownOption>
                    <DropDownOption value="3" index={3}>Option Four</DropDownOption>
                    <DropDownOption value="4" index={4}>Option Five</DropDownOption>
                </DropDownGroup>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

## Select

### Props

```table
span: 6
rows:
  - Prop: variant
    Type: BORDERED_INNER_LABEL(value = 0) or BORDERLESS_INNER_LABEL(value = 1)
    Default: BORDERED_INNER_LABEL
    Notes: Specifies a layout variant of the select element
  - Prop: size
    Type: small or large
    Default: "large"
    Notes: Defines size of select element
  - Prop: disabled
    Type: boolean
    Default: 'false'
    Notes: Defines if selection is disabled
  - Prop: chevronVisible
    Type: bool
    Default: 'true'
    Notes: Indicates whether to show or hide right chevron icon
  - Prop: fullWidth
    Type: boolean
    Default: 'false'
    Notes: To set width to be 100% of container's width
  - Prop: hybrid
    Type: boolean
    Default: 'false'
    Notes: Set this to true while implementing hybrid select
  - Prop: showSelect
    Type: boolean
    Default: 'true'
    Notes: Use this to toggle select's visiblity when `hybrid={true}`
  - Prop: selectRef
    Type: ref
    Default: 'null'
    Notes: To access select's ref
  - Prop: className
    Type: string
    Default: ""
    Notes: Passed to StyledSelect
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying select element
```

```react
span: 6
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row >
            <Column medium={4}>
              <DropDownLabel htmlFor="smallSelect" size="small">Small Select</DropDownLabel>
              <Select
                id="smallSelect"
                size="small"
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
            <Column medium={4}>
              <DropDownLabel htmlFor="smallBorderless" size="small">Borderless Select</DropDownLabel>
              <Select
                id="smallBorderless"
                size="small"
                variant={1}
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
            <Column medium={4}>
              <DropDownLabel htmlFor="smallChevron" size="small">Chevron Hidden</DropDownLabel>
              <Select
                id="smallChevron"
                size="small"
                chevronVisible={false}
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
        </Row>
        <Spacing top={{small: "normal"}} />
        <Row >
            <Column medium={4}>
              <DropDownLabel htmlFor="largeSelect" size="large">Large Select</DropDownLabel>
              <Select
                id="largeSelect"
                size="large"
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
            <Column medium={4}>
              <DropDownLabel htmlFor="largeBorderless" size="large">Borderless Select</DropDownLabel>
              <Select
                id="largeBorderless"
                size="large"
                variant={1}
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
            <Column medium={4}>
              <DropDownLabel htmlFor="largeChevron" size="large">Chevron Hidden</DropDownLabel>
              <Select
                id="largeChevron"
                size="large"
                chevronVisible={false}
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
        </Row>
        <Spacing top={{small: "normal"}} />
        <Row >
            <Column medium={4}>
              <DropDownLabel htmlFor="defaultSelect" size="large">Default Select</DropDownLabel>
              <Select
                id="defaultSelect"
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
            <Column medium={4}>
              <DropDownLabel htmlFor="disabledSelect" size="large" disabled>Disabled Select</DropDownLabel>
              <Select
                id="disabledSelect"
                size="large"
                disabled={true}
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
            <Column medium={4}>
              <DropDownLabel htmlFor="fullWidthSelect" size="large">Large Full Width Select</DropDownLabel>
              <Select
                id="fullWidthSelect"
                size="large"
                fullWidth={true}
                aria-label="Select an option"
              >
                <option value="" aria-label="">Select an option </option>
                <option value="0">Option One</option>
                <option value="1">Option Two</option>
                <option value="2">Option Three</option>
                <option value="3">Option Four</option>
                <option value="4">Option Five</option>
              </Select>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

## Hybrid Select

### Props

```table
span: 6
rows:
  - Prop: value
    Type: array
    Default: "[ ]"
    Notes: Specifies array of initial string values
  - Prop: onChange
    Type: function
    Default: null
    Notes: Invoked with an array of updatedSelection when a option is selected by the user
  - Prop: placeholder
    Type: string
    Default: ""
    Notes: Shows placeholder in dropdown and adds a blank option in native select
  - Prop: showOptionPlaceholder
    Type: boolean
    Default: "`true`"
    Notes: Set this to false in order to hide blank option from native select
  - Prop: optionPlaceholderProps
    Type: object
    Default: "{ }"
    Notes: Extra props passed to the blank option in native select
  - Prop: hybridWrapperProps
    Type: object
    Default: "{ }"
    Notes: Extra props passed to the wrapper of dropdown and select
  - Prop: selectProps
    Type: object
    Default: "{ }"
    Notes: Extra props passed only to the select
  - Prop: dropdownProps
    Type: object
    Default: "{ }"
    Notes: Extra props passed only to the dropdown
```

## Hybrid Option

### Props

```table
span: 6
rows:
  - Prop: value
    Type: string
    Default: N/A
    Notes: Required
  - Prop: optionText
    Type: string
    Default: ""
    Notes: When passed this text will be used in option and children will be ignored
  - Prop: optionProps
    Type: object
    Default: "{ }"
    Notes: Extra props passed only to the options of select
  - Prop: dropdownOptionProps
    Type: object
    Default: "{ }"
    Notes: Extra props passed only to the options of dropdown
```

```react
span: 6
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row >
            <Column medium={4}>
              <HybridSelectExample />
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

## Button Group

### Props

```table
span: 6
rows:
  - Prop: title
    Type: string
    Default: N/A
    Notes: Required
  - Prop: value
    Type: object
    Default: N/A
    Notes: Specifies default active buttons. The object key is section value and the object value is array of button values
  - Prop: onChange
    Type: function
    Default: N/A
    Notes:
```

## Button Group Section

### Props

```table
span: 6
rows:
  - Prop: title
    Type: string
    Default: N/A
    Notes:
  - Prop: value
    Type: string
    Default: N/A
    Notes: Required
  - Prop: isMultiSelect
    Type: bool
    Default: 'false'
    Notes:
```

## Button Group Section Button

### Props

```table
span: 6
rows:
  - Prop: value
    Type: string
    Default: N/A
    Notes: Required
  - Prop: onClick
    Type: function
    Default: N/A
    Notes:
```

```react
responsive: true
span: 6
---
<Container>
    <Row>
        <Column medium={8} large={6} style={{ padding: "16px 0" }}>
            <ButtonGroup title="Sort by:" value={{ 0: ["0"] }}>
                <ButtonGroup.Section value="0" isMultiSelect>
                    <ButtonGroup.Button value="0">All</ButtonGroup.Button>
                    <ButtonGroup.Button value="1">Date</ButtonGroup.Button>
                    <ButtonGroup.Button value="2">Name (A-Z)</ButtonGroup.Button>
                    <ButtonGroup.Button value="3">Name (Z-A)</ButtonGroup.Button>
                </ButtonGroup.Section>
            </ButtonGroup>
            <ButtonGroup title="Filter by:" value={{ 0: ["0"], 1: ["0"] }}>
                <ButtonGroup.Section title="Category" value="0">
                    <ButtonGroup.Button value="0">All</ButtonGroup.Button>
                    <ButtonGroup.Button value="1">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="2">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="3">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="4">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="5">Button Label</ButtonGroup.Button>
                </ButtonGroup.Section>
                <ButtonGroup.Section title="Dates" value="1">
                    <ButtonGroup.Button value="0">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="1">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="2">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="3">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="4">Button Label</ButtonGroup.Button>
                    <ButtonGroup.Button value="5">Button Label</ButtonGroup.Button>
                </ButtonGroup.Section>
                <ButtonGroup.Section title="Distance (miles)" value="2">
                    <ButtonGroup.Button value="0">All</ButtonGroup.Button>
                    <ButtonGroup.Button value="1">10</ButtonGroup.Button>
                    <ButtonGroup.Button value="2">20</ButtonGroup.Button>
                    <ButtonGroup.Button value="3">30</ButtonGroup.Button>
                    <ButtonGroup.Button value="4">40</ButtonGroup.Button>
                </ButtonGroup.Section>
            </ButtonGroup>
        </Column>
    </Row>
</Container>
```

## Toggle

```table
span: 6
rows:
  - Prop: value
    Type: bool
    Default:
    Notes: defines toggle position
  - Prop: size
    Type: string
    Default:
    Notes: defines toggle size, can be one `regular` and `large`
  - Prop: disabled
    Type: bool
    Default:
    Notes: defines if toggle is disabled
  - Prop: onToggle
    Type: function
    Default:
    Notes: on toggle callback function
  - Prop: onClick
    Type: function
    Default:
    Notes: on click callback function
  - Prop: onMouseOver
    Type: function
    Default:
    Notes: on mouseOver callback function
  - Prop: onMouseOut
    Type: function
    Default:
    Notes: on mouseOut callback function
  - Prop: onBlur
    Type: function
    Default:
    Notes: on blur callback function
  - Prop: onFocus
    Type: function
    Default:
    Notes: on focus callback function
  - Prop: onKeyPress
    Type: function
    Default:
    Notes: on keyPress callback function, by default `space` is used to switch the toggle
```

```react
---
<div>
    <ToggleWrapperExample size="small"/>
    <ToggleWrapperExample value={false} size="small" disabled/>
    <ToggleWrapperExample size="large" />
    <ToggleWrapperExample size="large" disabled/>
</div>
```

## Quantity selector

```table
span: 6
rows:
  - Prop: disabled
    Type: bool
    Default:
    Notes: defines if toggle is disabled
  - Prop: min
    Type: number
    Default: 0
    Notes: defines min number. The decrement button is disabled when min value is reached.
  - Prop: max
    Type: number
    Default: 99
    Notes: defines max number. The increment button is disabled when max value is reached.
  - Prop: checkValue
    Type: function
    Default:
    Notes: call back function before value is updated. Is passed the new value and updates if the function returns true and does not if returns false.
  - Prop: handleValueUpdate
    Type: function
    Default:
    Notes: call back function after value is updated either by buttons or keyboard. Use this function instead of onChange.
  - Prop: onValueChanged
    Type: function
    Default:
    Notes: deprecated. Use handleValueUpdate instead.
  - Prop: incrementBtnLabel
    Type: string
    Default: Increase Quantity
    Notes: Aria label of the Increment button for accessibility requirement
  - Prop: decrementBtnLabel
    Type: string
    Default: Decrease Quantity
    Notes: Aria label of the Decrement button for accessibility requirement
```

It also accepts any event handlers. e.g. `onBlur`, `onFocus` etc. as well as styles object.

```react
span: 6
---
<div style={{ display: 'flex' }}>
    <div style={{ width: '30%' }}>
        <QtySelector value={50} />
    </div>
    <div style={{ width: '30%' }}>
        <QtySelector value={2} min={2} max={4}/>
    </div>
    <div style={{ width: '30%' }}>
        <QtySelector value={50} disabled/>
    </div>
</div>
```

## Search Component

```table
span: 6
rows:
  - Prop: variant
    Type: string
    Default: large
    Notes: Small 36px and large 44px
  - Prop: placeholder
    Type: string
    Default: ""
    Notes: Placeholder text
  - Prop: className
    Type: string
    Default: ""
    Notes: Additional class
  - Prop: searchBtnAreaLabel
    Type: string
    Default: 'Search button'
    Notes: For accessibility
  - Prop: clearBtnAreaLabel
    Type: string
    Default: "Clear button"
    Notes: For accessibility
  - Prop: cancelBtnAreaLabel
    Type: string
    Default: "Cancel button"
    Notes: For accessibility
  - Prop: inputAreaLabel
    Type: string
    Default: "Search input"
    Notes: For accessibility
  - Prop: value
    Type: string
    Default: ""
    Notes: Input value. A required prop
  - Prop: onChange
    Type: function
    Default: null
    Notes: Required prop. Controlled input.
  - Prop: onFocus
    Type: function
    Default: noop
    Notes: Callback when input gets focused
  - Prop: onBlur
    Type: function
    Default: noop
    Notes: Callback when input gets blurred.
  - Prop: searchIconSelect
    Type: function
    Default: noop
    Notes: Callback when search icon is clicked.
  - Prop: clearText
    Type: function
    Default: noop
    Notes: Callback when x button is clicked.
  - Prop: cancelCallback
    Type: function
    Default: noop
    Notes: Callback when cancel button is clicked.
  - Prop: hasBackground
    Type: boolean
    Default: false
    Notes: changes opacity when focused in order to get better contrast on the background.
  - Prop: iconOnly
    Type: boolean
    Default: false
    Notes: Input gets invisible when not focused. Only the icon stays as a button.
  - Prop: isSuggestOpened
    Type: boolean
    Default: false
    Notes: When true removes border radius from the input in order to fit with the search suggest.
```

```react
responsive: true
span: 6
---
<Column medium={10} large={7} style={{ paddingBottom: "16px" }}>
  <Header>
    <Column medium={10} large={7} style={{ paddingBottom: "16px" }}>
        <SearchInput hasBackground placeholder="Enter term..." onChange={()=>{}} value="asd" />
    </Column>
  </Header>
  <div style={{marginTop: "10px"}} />
  <SearchInput placeholder="Enter term..." onChange={()=>{}} value="" variant="small" />
  <div style={{marginTop: "10px"}} />
  <SearchInput placeholder="Enter term..." iconOnly onChange={()=>{}} value="" variant="small" />
  <div style={{marginTop: "10px"}} />
  <SearchInput placeholder="Enter term..." iconOnly onChange={()=>{}} value="" />
</Column>
```

## Search Input Mobile

Same props as SearchComponent. Shows on top of the screen when focused and has cancel button.

```react
responsive: true
span: 6
---
<Column medium={10} large={7} style={{ paddingBottom: "16px" }}>
  <SearchInputMobile placeholder="Enter term..." onChange={()=>{}} value="" />
</Column>
```
