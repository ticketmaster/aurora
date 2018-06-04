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
```

### Standard List Row

```react
responsive: true
---
 <ListRow
      title="Del Mar Fairgrounds"
      subTitle="KABOO 3-Day Pass"
      dateTitle="apr 23"
      dateSubTitle="Thu, 8:00 PM"
      buttonText="See Tickets"
      variant="standard"
      onClick={()=>{}}
      onOverflowClick={()=>{}}
    />
```

### Multiple List Row with the Container

```react
responsive: true
---
<Container>
 <ListRow
      title="Del Mar Fairgrounds"
      subTitle="KABOO 3-Day Pass"
      dateTitle="apr 23"
      dateSubTitle="Thu, 8:00 PM"
      buttonText="See Tickets"
      variant="standard"
      onClick={()=>{}}
      onOverflowClick={()=>{}}
    />
     <ListRow
      title="Inglewood, CA - The Forum"
      subTitle="The Weezer Tour"
      dateTitle="apr 26"
      dateSubTitle="Sun, 8:00 PM"
      buttonText="See Tickets"
      variant="standard"
      onClick={()=>{}}
      onOverflowClick={()=>{}}
    />
      <ListRow
      title="Inglewood, CA - The Forum"
      subTitle="The Weezer Tour"
      dateTitle="apr 27"
      dateSubTitle="Thu, 8:00 PM"
      buttonText="See Tickets"
      variant="standard"
      onClick={()=>{}}
      onOverflowClick={()=>{}}
    />
</Container>
```

### List Row with Link

```react
responsive: true
---

<ListRow
      dateTitle="apr 23"
      dateSubTitle="Thu, 8:00 PM"
      title="Del Mar Fairgrounds"
      subTitle="KABOO 3-Day Pass"
      buttonText="See Tickets"
      variant="withLink"
      linkTitle="Ticket Options Available"
      linkUrl=""
      linkSubTitle="on Partner Site"
      onClick={()=>{}}
      onOverflowClick={()=>{}}
    />
```

### List Row with Colored Date

```react
responsive: true
---

<ListRow
      dateTitle="apr 23"
      dateSubTitle="Thu, 8:00 PM"List
      title="Del Mar Fairgrounds"
      subTitle="KABOO 3-Day Pass"
      buttonText="See Tickets"
      variant="withLink"
      linkTitle="Ticket Options Available"
      linkUrl=""
      coloredDate
      onClick={()=>{}}
      onOverflowClick={()=>{}}
    />
```
