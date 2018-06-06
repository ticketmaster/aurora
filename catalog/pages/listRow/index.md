### ListRow

ListRow Component with a standard variant and a variant with the link as shown below.

### Props

```table
span: 6
rows:
  - Prop: title
    Type: String
    Notes: Required
  - Prop: subTitle
    Type: String
    Notes: Required
  - Prop: dateTitle
    Type: String
    Notes: Required
  - Prop: dateSubTitle
    Type: String
    Notes: Required
  - Prop: buttonText
    Type: String
    Notes: Required
  - Prop: variant
    Type: String
    Notes: Required. Value is one of ["standard", "withLink"]
  - Prop: linkTitle
    Type: String
    Notes: Optional. Default is ""
  - Prop: linkUrl
    Type: String
    Notes: Optional. Default is ""
  - Prop: coloredDate
    Type: boolean
    Notes: Optional. Default is false
  - Prop: onClick
    Type: func
    Notes: Required
  - Prop: onOverflowClick
    Type: func
    Notes: Required
  - Prop: expandedSections
    Type: Array of object with item attribute where each item is a node
    Notes: Required
```

### Standard List Row

```react
responsive: true
---

 <ListRow
    rowId="567"
    title="Del Mar Fairgrounds"
    subTitle="Del Mar Fairgrounds"
    dateTitle="apr 23"
    dateSubTitle="Thu, 8:00 PM"
    buttonText="See Tickets"
    variant="standard"
    onClick={() => {}}
    onOverflowClick={() => {}}
    expandedSections={sections}
    onExpandOrCollapseClick={() => {}}
    />
```

### Multiple List Row with the Container

```react
responsive: true
---

<ListContainer listItems={listItems} />;
```

### Standard expanded List Row

```react
responsive: true
---

<ListRow
    rowId="567"
    title="Del Mar Fairgrounds"
    subTitle="Del Mar Fairgrounds"
    dateTitle="apr 23"
    dateSubTitle="Thu, 8:00 PM"
    buttonText="See Tickets"
    variant="standard"
    onClick={() => {}}
    onOverflowClick={() => {}}
    expandedSections={sections}
    onExpandOrCollapseClick={() => {}}
    />
```

### List Row with Link

```react
responsive: true
---

<ListRow
    rowId="567"
    title="Del Mar Fairgrounds"
    subTitle="Del Mar Fairgrounds"
    dateTitle="apr 23"
    dateSubTitle="Thu, 8:00 PM"
    buttonText="See Tickets"
    variant="withLink"
    linkTitle="Ticket Options Available"
    linkUrl=""
    linkSubTitle="on Partner Site"
    onClick={() => {}}
    onOverflowClick={() => {}}
    expandedSections={sections}
    onExpandOrCollapseClick={() => {}}
    />
```

### List Row with Colored Date

```react
responsive: true
---

<ListRow
    rowId="567"
    title="Del Mar Fairgrounds"
    subTitle="Del Mar Fairgrounds"
    dateTitle="apr 23"
    dateSubTitle="Thu, 8:00 PM"
    buttonText="See Tickets"
    variant="standard"
    coloredDate
    onClick={() => {}}
    onOverflowClick={() => {}}
    expandedSections={sections}
    onExpandOrCollapseClick={() => {}}
    />
```
