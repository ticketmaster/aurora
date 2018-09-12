### DayTile

DayTile Component

### Props

```table
span: 6
rows:
  - Prop: children
    Type: node
    Default: "null"
    Notes: Optional
  - Prop: ctaButtons
    Type: element<DayTile.ButtonsGroup>
    Notes: Optional. CTA Buttons / Links corresponding to the data displayed (eg. links to EDP). Usage of <DayTile.ButtonsGroup />, <DayTile.ButtonsGroup.Item />, <DayTile.Button /> components is required in order to get proper button's style.
  - Prop: dateLabel
    Type: string
    Notes: Required. A string that contains numeric "day of month" value
  - Prop: image
    Type: node
    Default: "null"
    Notes: Optional. A thumbnail to display
  - Prop: isDisabled
    Type: boolean
    Default: "false"
    Notes: Optional. A flag that controls disabled state (eg. in case there are no events on that date)
  - Prop: isHighlighted
    Type: boolean
    Default: "false"
    Notes: Optional. A flag that controls highlighted state (eg. in case of present local events)
  - Prop: moreButton
    Type: element<DayTile.MoreButton>
    Default: "null"
    Notes: Optional. A button to use in place of More Button (eg. if more than 2 CTA buttons required, a "+X More y" label is recommended). Usage of <DayTile.MoreButton /> component is required in order to achieve proper styling.
  - Prop: onOverflowClick
    Type: function
    Notes: Optional. An `onClick` handler for the Overflow Button
  - Prop: subTitle
    Type: string
    Notes: Optional. A text that represents secondary data
  - Prop: title
    Type: string
    Notes: Optional. A text that represents primary data
  - Prop: withOverflow
    Type: boolean
    Default: "false"
    Notes: Optional. A flag that controls wether the Overflow Button will be displayed or not
  - Prop: ...props
    Type: any
    Notes: Optional. Passes through any other props to underlying DOM element.
```

### DayTile

```react
responsive: true
---
<DayTile
  dateLabel="10"
  title="Henderson, NV — Sunset Station Outdoor Amphitheater"
  subTitle="On Sale: Fri, 08/17/18 10:00 AM"
  ctaButtons={
    <DayTile.ButtonsGroup>
        <DayTile.ButtonsGroup.Item>
          <DayTile.Button>2:00 pm</DayTile.Button>
        </DayTile.ButtonsGroup.Item>
        <DayTile.ButtonsGroup.Item>
          <DayTile.Button>6:00 pm</DayTile.Button>
        </DayTile.ButtonsGroup.Item>
    </DayTile.ButtonsGroup>
  }
  moreButton={
    <DayTile.MoreButton
      onClick={() => {
        alert('More Button Clicked');
      }}
    >
      +4 More Times
    </DayTile.MoreButton>
  }
  onOverflowClick={() => {
    alert('Overflow Button Clicked');
  }}
  withOverflow
>
</DayTile>
```

### DayTile (highlighted)

```react
responsive: true
---
<DayTile
  dateLabel="10"
  title="Henderson, NV — Sunset Station Outdoor Amphitheater"
  subTitle="On Sale: Fri, 08/17/18 10:00 AM"
  ctaButtons={
    <DayTile.ButtonsGroup>
        <DayTile.ButtonsGroup.Item>
          <DayTile.Button>2:00 pm</DayTile.Button>
        </DayTile.ButtonsGroup.Item>
        <DayTile.ButtonsGroup.Item>
          <DayTile.Button>6:00 pm</DayTile.Button>
        </DayTile.ButtonsGroup.Item>
    </DayTile.ButtonsGroup>
  }
  moreButton={
    <DayTile.MoreButton
      onClick={() => {
        alert('More Button Clicked');
      }}
    >
      +4 More Times
    </DayTile.MoreButton>
  }
  onOverflowClick={() => {
    alert('Overflow Button Clicked');
  }}
  withOverflow
  isHighlighted
>
</DayTile>
```

### DayTile with image

```react
responsive: true
---
<DayTile
  dateLabel="10"
  title="Henderson, NV — Sunset Station Outdoor Amphitheater"
  subTitle="On Sale: Fri, 08/17/18 10:00 AM"
  image={
    <ResponsiveImage
      src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"
      width={360}
      height={180}
      alt="Hard Rock Rocksino Northfield Park Hard Rock Live"
    />
  }
  ctaButtons={
    <DayTile.ButtonsGroup>
        <DayTile.ButtonsGroup.Item>
          <DayTile.Button>2:00 pm</DayTile.Button>
        </DayTile.ButtonsGroup.Item>
        <DayTile.ButtonsGroup.Item>
          <DayTile.Button>6:00 pm</DayTile.Button>
        </DayTile.ButtonsGroup.Item>
    </DayTile.ButtonsGroup>
  }
  moreButton={
    <DayTile.MoreButton
      onClick={() => {
        alert('More Button Clicked');
      }}
    >
      +4 More Times
    </DayTile.MoreButton>
  }
  onOverflowClick={() => {
    alert('Overflow Button Clicked');
  }}
  withOverflow
>
</DayTile>
```

### DayTile with image (highlighted)

```react
responsive: true
---
<DayTile
  dateLabel="10"
  title="Henderson, NV — Sunset Station Outdoor Amphitheater"
  subTitle="On Sale: Fri, 08/17/18 10:00 AM"
  image={
    <ResponsiveImage
      src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"
      width={360}
      height={180}
      alt="Hard Rock Rocksino Northfield Park Hard Rock Live"
    />
  }
  ctaButtons={
    <DayTile.ButtonsGroup>
        <DayTile.ButtonsGroup.Item>
          <DayTile.Button>2:00 pm</DayTile.Button>
        </DayTile.ButtonsGroup.Item>
        <DayTile.ButtonsGroup.Item>
          <DayTile.Button>6:00 pm</DayTile.Button>
        </DayTile.ButtonsGroup.Item>
    </DayTile.ButtonsGroup>
  }
  moreButton={
    <DayTile.MoreButton
      onClick={() => {
        alert('More Button Clicked');
      }}
    >
      +4 More Times
    </DayTile.MoreButton>
  }
  withOverflow
  isHighlighted
>
</DayTile>
```

### DayTile (disabled)

```react
responsive: true
---
<DayTile
  dateLabel="10"
  isDisabled
>
</DayTile>
```
