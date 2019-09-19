### Button

Button Component with a standard, outline, and transparent variants available.

### Props

```table
span: 6
rows:
  - Prop: variant
    Type: string
    Default: '`standard`'
    Notes: Determines style variant. Possible variants are `standard`, `special`, `outline`, `transparent`
  - Prop: size
    Type: string
    Default: '`regular`'
    Notes: Determines button size. Possible sizes are `small`, `regular`, `large`
  - Prop: isLoading
    Type: bool
    Default: '`false`'
    Notes: Determines the button loading state. Possible states are `true`, `false`
  - Prop: href
    Type: string
    Notes: Determines wether underlying HTML element should be an `a`
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Button's children
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying button, or in the case of an href prop being passed, anchor, element
```

### Standard button

```react
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column small={3}/>
            <Column small={6}>
                <Button size="small">My cool button</Button>
                <Spacing top={{small: "moderate"}}>
                    <Button>My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button size="large">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button size="large" isLoading>My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button size="large" disabled>My cool button</Button>
                </Spacing>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

### Special button

```react
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column small={3}/>
            <Column small={6}>
                <Button variant="special" size="small">My cool button</Button>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="special">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="special" size="large">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="special" size="large" isLoading>My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="special" size="large" disabled>My cool button</Button>
                </Spacing>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

### Outline button

```react
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column small={3}/>
            <Column small={6}>
                <Button variant="outline" size="small">My cool button</Button>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="outline">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="outline" size="large">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="outline" size="large" isLoading>My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="outline" size="large" disabled>My cool button</Button>
                </Spacing>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

### OutlineGray button

```react
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column small={3}/>
            <Column small={6}>
                <Button variant="outlineGray" size="small">My cool button</Button>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="outlineGray">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="outlineGray" size="large">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="outlineGray" size="large" isLoading>My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="outlineGray" size="large" disabled>My cool button</Button>
                </Spacing>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

### Transparent button

```react
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column small={3}/>
            <Column small={6}>
                <Button variant="transparent" size="small">My cool button</Button>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="transparent">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="transparent" size="large">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="transparent" size="large" isLoading>My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button variant="transparent" size="large" disabled>My cool button</Button>
                </Spacing>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

### Linked button

```react
---
<ThemeProvider theme={{ themeName: 'tm' }}>
    <Container>
        <Row>
            <Column small={3}/>
            <Column small={6}>
                <Button size="small" href="#">My cool button</Button>
                <Spacing top={{small: "moderate"}}>
                    <Button href="#">My cool button</Button>
                </Spacing>
                <Spacing top={{small: "moderate"}}>
                    <Button size="large" href="#">My cool button</Button>
                </Spacing>
            </Column>
        </Row>
    </Container>
</ThemeProvider>
```

### Badge

Badge Component with a standard, outline, and transparent variants available.

### Props

```table
span: 6
rows:
  - Prop: variant
    Type: string
    Default:
    Notes: Determines style variant
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Badge's children
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying button, or in the case of an href prop being passed, anchor, element
```

### Badge Standard

```react
<Badge variant="standard">
    <ChevronIcon size={12} color={themes.global.white.base} direction="left" />
    /
    <ChevronIcon size={12} color={themes.global.white.base} direction="right" />
</Badge>
```

### Badge Standard Disabled

```react
<Badge variant="standard" disabled>
    <ChevronIcon size={12} color={themes.global.white.base} direction="left" />
    /
    <ChevronIcon size={12} color={themes.global.white.base} direction="right" />
</Badge>
```

### Badge Outline

```react
<Badge variant="outline">
    <ChevronIcon size={12} color={themes.tm.primary.base} direction="left" />
    /
    <ChevronIcon size={12} color={themes.tm.primary.base} direction="right" />
</Badge>
```

### Badge Outline Disabled

```react
<Badge variant="outline" disabled>
    <ChevronIcon size={12} color={colors.azure.light} direction="left" />
    /
    <ChevronIcon size={12} color={colors.azure.light} direction="right" /></Badge>
```

### Badge Transparent

```react
<Badge variant="transparent">
    <ChevronIcon size={12} color={themes.global.white.base} direction="left" />
    /
    <ChevronIcon size={12} color={themes.global.white.base} direction="right" /></Badge>
```

### Badge Transparent Disabled

```react
<Badge variant="transparent" disabled>
    <ChevronIcon size={12} color={themes.global.white.light} direction="left" />
    /
    <ChevronIcon size={12} color={themes.global.white.light} direction="right" />
</Badge>
```

### RatingBadge

RatingBadge Component with a standard, outline, and transparent variants available. RatingBadge should be passed relevant metadata as props to populate the AggregateRating Schema.org entity. Please visit the [AggregateRating documentation page](https://schema.org/AggregateRating) and view the required props below for more details.

### Props

```table
span: 6
rows:
  - Prop: variant
    Type: string
    Default:
    Notes: Determines style variant
  - Prop: children
    Type: node
    Default: standard
    Notes: Render as the RatingBadge's children
  - Prop: ratingValue
    Type: string
    Default:
    Notes: The rating for the content
  - Prop: bestRating
    Type: string
    Default: "5"
    Notes: The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed
  - Prop: ratingCount
    Type: string
    Default:
    Notes: The count of total number of ratings
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying button, or in the case of an href prop being passed, anchor, element
```

### RatingBadge Standard

```react
<RatingBadge variant="standard" ratingValue="4.8" bestRating="5" ratingCount="20">
    4.8
</RatingBadge>
```

### RatingBadge Standard Disabled

```react
<RatingBadge variant="standard" disabled ratingValue="4.8" bestRating="5" ratingCount="20">
    4.8
</RatingBadge>
```

### RatingBadge Outline

```react
<RatingBadge variant="outline" ratingValue="4.8" bestRating="5" ratingCount="20">
    4.8
</RatingBadge>
```

### RatingBadge Outline Disabled

```react
<RatingBadge variant="outline" disabled ratingValue="4.8" bestRating="5" ratingCount="20">
    4.8
</RatingBadge>
```

### RatingBadge Transparent

```react
<RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20">
    4.8
</RatingBadge>
```

### RatingBadge Transparent Disabled

```react
<RatingBadge variant="transparent" disabled ratingValue="4.8" bestRating="5" ratingCount="20">
    4.8
</RatingBadge>
```
