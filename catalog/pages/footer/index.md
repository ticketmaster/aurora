### Footer

```react
 <Footer>
  <Row>
      {sections &&
        sections.slice(0, 4).map(section => (
          <Section
            title={section.title}
            titleStyle={{
              color: colors.white.base,
              textTransform: 'capitalize',
            }}
            noOfColumns={2}
            key={section.id}
          >
            {section.items.map(
              item =>
                item && (
                  <SectionItem
                    className="section-item"
                    item={item}
                    titleStyle={{ color: colors.white.light }}
                    key={item.title}
                  />
                )
            )}
          </Section>
        ))}
      {sections &&
        sections.slice(4, 5).map(section => (
          <Section
            title={section.title}
            titleStyle={{
              color: colors.white.base,
              textTransform: 'capitalize',
            }}
            noOfColumns={4}
            key={section.id}
          >
            {section.items.map(
              item =>
                item && (
                  <SectionItem
                    item={item}
                    titleStyle={{ color: colors.white.light }}
                    key={item.title}
                  />
                )
            )}
          </Section>
        ))}
    </Row>

    <Row style={{marginTop: "32px"}}>
      <PrivacyPolicySection
        title="By continuing past this page, you agree to our "
        link={{
          linkTitle: "Terms of Use",
          linkUrl: "/",
          onClick: ()=>{},
        }}
        subTitle="© 1999-2018 Ticketmaster. All rights reserved."
      />
    </Row>
 </Footer>
```

### Privacy Policy Section

```react
<div style={{backgroundColor: colors.blackPearl, padding: "10px 0"}}>
  <PrivacyPolicySection
      title="By continuing past this page, you agree to our "
      link={{
        linkTitle: "Terms of Use",
        linkUrl: "/",
        onClick: ()=>{},
      }}
      subTitle="© 1999-2018 Ticketmaster. All rights reserved."
    />
</div>
```
