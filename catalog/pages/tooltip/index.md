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
