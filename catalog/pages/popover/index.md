### PopOver

PopOver Component

### Props

```table
span: 6
rows:
  - Prop: children
    Type: node
    Default:
    Notes: Render as the PopOver's children
  - Prop: isVisible
    Type: boolean
    Default: false
    Notes: Show/hide popover
  - Prop: inlineWithTarget
    Type: boolean
    Default: false
    Notes: Indicates if PopOver should be placed right near toggle
  - Prop: noBorders
    Type: boolean
    Default: false
    Notes: Hides borders when set in true
  - Prop: reduceTop
    Type: number
    Default: 0
    Notes: Scrinks viewport from the top in case of sticky header
  - Prop: reduceBottom
    Type: number
    Default: 0
    Notes: Scrinks viewport from the bottom in case of sticky footer
  - Prop: position
    Type: Object
    Default: all props are 0
    Notes: This prop is generated from PopOver.getDimensionsFromEvent(e, parent = {}) static function. The function should recieve the event that triggers the PopOver (usually click). The secondary parameter is optional and if passed it should be html element in which boundaries the popover should appear.
```

```react
---
<PopOverDemo withinContainer />
```

### Inline with target and without borders

```react
---
<PopOverDemo withinContainer inlineWithTarget noBorders/>
```
