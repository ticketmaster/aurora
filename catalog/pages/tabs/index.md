### Tabs

```table
span: 6
rows:
  - Prop: items
    Type: [node]
    Default:
    Notes: Required. Array of tab items.
  - Prop: index
    Type: number
    Default: -1
    Notes: Optional. Index of currently selected item.
  - Prop: onClick
    Type: func(index)
    Default: ()=>{}
    Notes: Optional. Function that handles onclick event on item and takes index of item as an argument.
  - Prop: variant
    Type: bool
    Default: dark
    Notes: Optional. Determines the style of the Text. One of “dark”, “light”, and “accent”
  - Prop: accent
    Type: string
    Default:
    Notes: Optional. If variant equals “accent”, this props determines the style of the Text. One of “aquamarine”, “azure”, “alert”, “caution”, “cruz”, “heliotrope”, “positive”, “summerSky”, and “turquoise”.
  - Prop: weight
    Type: string
    Default: regular
    Notes: Optional. Determines the font-weight of the Text. One of “regular” and “semiBold”.
  - Prop: underlineColor
    Type: string
    Default: rgba(2,108,223,1)(colors.azure.base)
    Notes: Optional. Determines underline color of selected item.
```

## TabsProvider, TabsConsumer

Provide child component with tabIndex and onChangeTabIndex;

**tabIndex** - Represents index of currently selected tab.
**onChangeTabIndex** - Function, that can be invoked to create event hanler to change the value of tabIndex. Optionaly takes callback function, that will be called with new tabIndex as an argument. Returns a function, that takes one argument: new value of tabIndex to set or event object (requires evet target to have data-index attribute).

### Usage of Tabs with TabsProvider and TabsConsumer components

```react
responsive: true
---
<div style={{
  padding: '16px'
}}>
<TabsProvider>
    <TabsConsumer>
      {({ tabIndex, onChangeTabIndex }) => (
        <React.Fragment>
        <Tabs
          items={['first tab', 'second tab', 'third tab', 'fourth tab', 'fifth tab', 'sixth tab']}
          index={tabIndex}
          onClick={onChangeTabIndex()}
        />
        <Column>
        <Text weight="semiBold">Content for tab #{tabIndex + 1}</Text>
        <Button onClick={()=>{onChangeTabIndex()(5)}}>Go To Tab #6</Button>
        </Column>
        </React.Fragment>
      )}
    </TabsConsumer>
</TabsProvider>
</div>
```
