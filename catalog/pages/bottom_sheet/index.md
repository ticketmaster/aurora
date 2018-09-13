### BottomSheet

```react
responsive: true
---

<ReactCSSTransitionGroup
    transitionName="bottom-sheet"
    component={Backdrop}
    transitionAppear
    transitionAppearTimeout={300}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
              >
    <BottomSheet>
     <ListRowOverflow>
      {sections.map(section =>
        <Section title={section.title} noOfColumns={MAX_COLUMNS / sections.length} key={section.key}>
          {section.items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
        </Section>
        )}
    </ListRowOverflow>

  </BottomSheet>
</ReactCSSTransitionGroup>
```
