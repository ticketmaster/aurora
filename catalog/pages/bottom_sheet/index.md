### BottomSheet

```react
responsive: true
state: {visible:  true}
---

<Backdrop>
    <BottomSheet>
     <ListRowOverflow>
      {sections.map(section =>
        <Section title={section.title} totalSections={4} key={section.key}>
          {section.items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
        </Section>
        )}
    </ListRowOverflow>

  </BottomSheet>
</Backdrop>
```
