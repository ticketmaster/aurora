### ListRow

ListRow Component with a standard variant and a variant with the link as shown below.

### Props

```table
span: 6
rows:
  - Prop: rowItem
    Type: object
    Notes: Required
  - Prop: index
    Type: number
    Notes: Required
  - Prop: onOverflowClick
    Type: func
    Notes: Required
  - Prop: children
    Type: node
    Notes: Optional. Default is null.
```

### ListContainer

Container Component which contians all the ListRows and is responsible for managing the expand or collapse state for the row.

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
```

### RowItem Prop Table

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
  - Prop: url
    Type: String
    Notes: optional. Default is "".
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
  - Prop: dateColor
    Type: String
    Notes: Optional. Default is "#262626"
  - Prop: onClick
    Type: func
    Notes: Required
```

### Standard List Row

```react
responsive: true
---
<ListContainer>
  <ListRow rowItem={listItems[0]} index={0} onOverflowClick={() => {}}/>
 </ListContainer>
```

### Multiple List Row with the Container

```react
responsive: true
---

<ListContainer>
  <ListRow rowItem={listItems[0]} index={0} onOverflowClick={()=>{}}>
    <ListRowOverflow>
    {sections.map(section =>
        <Section title={section.title} totalSections={4} key={section.key}>
          {section.items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
        </Section>
        )}
    </ListRowOverflow>
 </ListRow>

  <ListRow rowItem={listItems[1]} index={1} onOverflowClick={()=>{}}>
    <ListRowOverflow>
      <Section title={sections[0].title} totalSections={2} key={sections[0].key}>
          {sections[0].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
       <Section title={sections[1].title} totalSections={2} key={sections[1].key}>
          {sections[1].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
    </ListRowOverflow>
  </ListRow>


  <ListRow rowItem={listItems[2]} index={2} onOverflowClick={()=>{}}>
    <ListRowOverflow>
     <Section title={sections[0].title} totalSections={3} key={sections[0].key}>
          {sections[0].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
       <Section title={sections[1].title} totalSections={3} key={sections[1].key}>
          {sections[1].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
      <Section title={sections[2].title} totalSections={3} key={sections[2].key}>
          {sections[2].items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
      </Section>
    </ListRowOverflow>
  </ListRow>

</ListContainer>
;
```

### Standard expanded List Row

```react
responsive: true
---
<ListContainer>
 <ListRow rowItem={listItems[0]} index={0} onOverflowClick={()=>{}}>
 <ListRowOverflow>
 {sections.map(section =>
    <Section title={section.title} totalSections={4} key={section.key}>
      {section.items.map(item =>
      <SectionItem item={item} key={item.title}/>)}
    </Section>
    )}
</ListRowOverflow>
 </ListRow>
 </ListContainer>
```

### List Row with Link

```react
responsive: true
---
<ListContainer>
 <ListRow
         rowItem={{
           ...listItems[0],
           variant: "withLink",
           linkTitle: "Ticket Options Available",
           linkUrl: "",
           linkSubTitle: "on Partner Site"
         }}
         index={0}
         onOverflowClick={()=>{}}
       />
 </ListContainer>
```

### List Row with Colored Date

```react
responsive: true
---

<ListContainer>
<ListRow
        rowItem={{
          ...listItems[0],
          variant: "standard",
          dateColor: "#C56BFF",
        }}
        index={0}
        onOverflowClick={()=>{}}
      />
</ListContainer>
```
