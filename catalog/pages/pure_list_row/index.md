### PureListRow

### Props

```table
span: 6
rows:
  - Prop: index
    Type: number
    Notes: Required
  - Prop: onOverflowClick
    Type: func
    Notes: Required
  - Prop: children
    Type: node
    Notes: Optional. Default is null.
  - Prop: onExpandShow
    Type: one of either "title" or "subTitle"
    Notes: Optional. Default is "subTitles"
  - Prop: rowTriggerPosition
    Type: one of either "right" or "left"
    Notes: Optional. Default is "right"
  - Prop: onExpandItem
    Type: "func({ index: number }): void"
    Notes: Optional. This is called when a user clicks "expand row" chevron
  - Prop: onCollapseItem
    Type: "func({ index: number }): void"
    Notes: Optional. This is called when a user clicks "collapse row" chevron
```

### ListContainer

Container Component which contains all the PureListRows and is responsible for managing the expand or collapse state for the row.

### Props

```table
span: 6
rows:
  - Prop: children
    Type: node
    Notes: Optional. Default is null.
  - Prop: onRowCollapse
    Type: func
    Notes: Optional.
  - Prop: rowTriggerPosition
    Type: one of either "right" or "left"
    Notes: Optional. Default is "right"
  - Prop: onModalClose
    Type: func
    Notes: Optional.
  - Prop: expandMultiple
    Type: boolean
    Notes: Optional. If true, multiple list rows can be expanded simultaneously. If false, only a single list row can be expanded at one time. Default is false.
```

### PureListRow

PureListRow Component with a standard variant. Behavior is inherited from List Row component

### Multiple Pure List Row with row trigger position on the right

```react
responsive: true
---
<div style={{padding: '10px', background: '#fff'}}>
<ListContainer expandMultiple={true}>
  <PureListRow
    index={0}
    rowTriggerPosition="right"
    onOverflowClick={()=>{}}
    header={listItems[0].header}
  >
    <ListRowOverflow>
      <Section title={sections[0].title} medium={MAX_COLUMNS / sections.length} key={sections[0].key}>
          {sections[0].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
      <Section title={sections[1].title} medium={MAX_COLUMNS / sections.length} key={sections[1].key}>
          {sections[1].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
    </ListRowOverflow>
 </PureListRow>

  <PureListRow
    index={1}
    rowTriggerPosition="right"
    onOverflowClick={()=>{}}
    header={listItems[1].header}
   >
    <ListRowOverflow>
      <Section title={sections[0].title} medium={MAX_COLUMNS / sections.length} key={sections[0].key}>
            {sections[0].items.map(item =>
            <SectionItem item={item} key={item.title}/>)}
        </Section>
         <Section title={sections[1].title} medium={MAX_COLUMNS / sections.length} key={sections[1].key}>
            {sections[1].items.map(item =>
            <SectionItem item={item} key={item.title}/>)}
        </Section>
        <Section title={sections[2].title} medium={MAX_COLUMNS / sections.length} key={sections[2].key}>
            {sections[2].items.map(item =>
            <SectionItem item={item} key={item.title}/>)}
        </Section>
    </ListRowOverflow>
  </PureListRow>


  <PureListRow
    index={2}
    onOverflowClick={()=>{}}
    header={listItems[2].header}
  >
    <ListRowOverflow>
     <Section title={sections[0].title} medium={MAX_COLUMNS / sections.length} key={sections[0].key}>
           {sections[0].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
        <Section title={sections[1].title} medium={MAX_COLUMNS / sections.length} key={sections[1].key}>
           {sections[1].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
       <Section title={sections[2].title} medium={MAX_COLUMNS / sections.length} key={sections[2].key}>
           {sections[2].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
    </ListRowOverflow>
  </PureListRow>

  <PureListRow
    index={3}
    onOverflowClick={()=>{}}
    header={listItems[0].header}
  >
    <ListRowOverflow>
     <Section title={sections[0].title} medium={MAX_COLUMNS / sections.length} key={sections[0].key}>
           {sections[0].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
        <Section title={sections[1].title} medium={MAX_COLUMNS / sections.length} key={sections[1].key}>
           {sections[1].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
       <Section title={sections[2].title} medium={MAX_COLUMNS / sections.length} key={sections[2].key}>
           {sections[2].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
    </ListRowOverflow>
  </PureListRow>

</ListContainer>
</div>
;
```

### Multiple Pure List Row with row trigger position on the left

```react
responsive: true
---
<div style={{padding: '10px', background: '#fff'}}>
<ListContainer expandMultiple={true}>
  <PureListRow
    index={0}
    rowTriggerPosition="left"
    onOverflowClick={()=>{}}
    header={listItems[0].header}
  >
    <ListRowOverflow>
      <Section title={sections[0].title} medium={MAX_COLUMNS / sections.length} key={sections[0].key}>
          {sections[0].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
      <Section title={sections[1].title} medium={MAX_COLUMNS / sections.length} key={sections[1].key}>
          {sections[1].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
    </ListRowOverflow>
 </PureListRow>

  <PureListRow
    index={1}
    rowTriggerPosition="left"
    onOverflowClick={()=>{}}
    header={listItems[1].header}
   >
    <ListRowOverflow>
      <Section title={sections[0].title} medium={MAX_COLUMNS / sections.length} key={sections[0].key}>
            {sections[0].items.map(item =>
            <SectionItem item={item} key={item.title}/>)}
        </Section>
         <Section title={sections[1].title} medium={MAX_COLUMNS / sections.length} key={sections[1].key}>
            {sections[1].items.map(item =>
            <SectionItem item={item} key={item.title}/>)}
        </Section>
        <Section title={sections[2].title} medium={MAX_COLUMNS / sections.length} key={sections[2].key}>
            {sections[2].items.map(item =>
            <SectionItem item={item} key={item.title}/>)}
        </Section>
    </ListRowOverflow>
  </PureListRow>


  <PureListRow
    index={2}
    rowTriggerPosition="left"
    onOverflowClick={()=>{}}
    header={listItems[2].header}
  >
    <ListRowOverflow>
     <Section title={sections[0].title} medium={MAX_COLUMNS / sections.length} key={sections[0].key}>
           {sections[0].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
        <Section title={sections[1].title} medium={MAX_COLUMNS / sections.length} key={sections[1].key}>
           {sections[1].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
       <Section title={sections[2].title} medium={MAX_COLUMNS / sections.length} key={sections[2].key}>
           {sections[2].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
    </ListRowOverflow>
  </PureListRow>

  <PureListRow
    index={3}
    rowTriggerPosition="left"
    onOverflowClick={()=>{}}
    header={listItems[0].header}
  >
    <ListRowOverflow>
     <Section title={sections[0].title} medium={MAX_COLUMNS / sections.length} key={sections[0].key}>
           {sections[0].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
        <Section title={sections[1].title} medium={MAX_COLUMNS / sections.length} key={sections[1].key}>
           {sections[1].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
       <Section title={sections[2].title} medium={MAX_COLUMNS / sections.length} key={sections[2].key}>
           {sections[2].items.map(item =>
           <SectionItem item={item} key={item.title}/>)}
       </Section>
    </ListRowOverflow>
  </PureListRow>

</ListContainer>
</div>
;
```
