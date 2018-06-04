### Header Props

```table
span: 6
rows:
  - Prop: deg
    Type: object
    Default: small = 76deg, medium = 80deg, large  = 81
    Notes: Sets the gradient rotation per breakpoint
  - Prop: from
    Type: string
    Default:
    Notes: Starting gradient color
  - Prop: to
    Type: string
    Default:
    Notes: Ending gradient color
```

### Heading Props

```table
span: 6
rows:
  - Prop: level
    Type: number
    Default: 2
    Notes: Renders the appropriate h tag at level in number
```

```react
responsive: true
---
<Header>
    <Heading level={1}>
        <Heading.Strong>Generic</Heading.Strong>
        {" "}
        <Heading.Span>Header</Heading.Span>
    </Heading>
</Header>
```

### Image Header

```react
responsive: true
---
<HeaderWithImage>
  <Column medium={8}>
    <Row>
    <Breadcrumb delimiter=" / " style={breadcrumbStyles}>
      <Breadcrumb.Item position="1" href="/home" style={breadcrumbStyles}>Home</Breadcrumb.Item>
      <Breadcrumb.Item position="2" href="/concerts" style={breadcrumbStyles}>Concert Tickets</Breadcrumb.Item>
      <Breadcrumb.Item position="3" href="/concerts/rock" style={breadcrumbStyles}>Rock</Breadcrumb.Item>
    </Breadcrumb>
    <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>
        <StarIcon size={12} color={colors.white.base} style={starIconStyles} />
        4.8
    </RatingBadge>
    </Row>
    <Heading level={1}>
        <Heading.Strong>Generic</Heading.Strong>
        {" "}
        <Heading.Span>Header</Heading.Span>
    </Heading>
  </Column>
  <Column medium={4}>
    <HeaderWithImage.ImageWrapper>
      <ImageCard src="https://placekitten.com/g/400/242" />
    </HeaderWithImage.ImageWrapper>
  </Column>
</HeaderWithImage>
```
