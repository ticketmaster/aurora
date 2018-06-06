### Expanded List Row

Displays the expanded portion of the listrow divided into several sections.

### Props

```table
span: 6
rows:
  - Prop: sections
    Type: Array of section. Each section consists of an array of items. Each item is a node to be displayed.
    Default:
    Notes: Required attribute
  - Prop: buttonText
    Type: string
    Default: ""
    Notes: Optional attribute. Represents the text to display on the button on mobile.
  - Prop: onButtonClick
    Type: function
    Default: No operation
    Notes: Optional attribute. Represents the action to do when the button is clicked.
```

```react
responsive: true
---

<ExpandedRow sections={sections} buttonText="See Tickets" />
```
