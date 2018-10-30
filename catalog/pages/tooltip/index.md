### Tooltip

Tooltip Component

### Props

```table
span: 6
rows:
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Tooltip's children
  - Prop: isVisible
    Type: boolean
    Default: false
    Notes: Show/hide tooltip
  - Prop: variant
    Type: one of 'dark', 'light'
    Default: 'light'
    Notes: Changes tooltip color scheme
  - Prop: position
    Type: Object
    Default: all props are 0
    Notes: This prop is generated from Tooltip.getDimensionsFromEvent(e) static function. The function should recieve the event that triggers the Tooltip (usually hover).
```

```react
---
<div>
  <TooltipDemo />
  <TooltipDemo variant="dark" />
</div>
```

### Seat Tooltip

Seat Tooltip Component

### Props

```table
span: 6
rows:
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Seat Tooltip's children
  - Prop: isVisible
    Type: boolean
    Default: false
    Notes: Show/hide tooltip
  - Prop: variant
    Type: one of 'dark', 'light'
    Default: 'light'
    Notes: Changes tooltip color scheme
  - Prop: size
    Type: one of 'small', 'large'
    Default: 'large'
    Notes: Changes tooltip width
  - Prop: section
    Type: string or number
    Default: n/a
    Notes: Required field. Shows the section in seat data
  - Prop: row
    Type: string or number
    Default: n/a
    Notes: Required field. Shows the row in seat data
  - Prop: seat
    Type: string or number
    Default: n/a
    Notes: Required field. Shows the seat in seat data
  - Prop: position
    Type: Object
    Default: all props are 0
    Notes: This prop is generated from Tooltip.getDimensionsFromEvent(e) static function. The function should recieve the event that triggers the Tooltip (usually hover).
```

```react
---
<div>
  <SeatTooltipDemo />
  <SeatTooltipDemo size="small" variant="dark" />
</div>
```
