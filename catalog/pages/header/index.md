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
  - Prop: backgroundImage
    Type: string
    Default:
    Notes: Uses an image as background instead of a gradient
  - Prop: children
    Type: node
    Notes: Children to render inside of inner Row component
  - Prop: className
    Type: string
    Notes: Class to pass to HeaderGradient component
  - Prop: style
    Type: object
    Notes: Styles object to pass to HeaderGradient component
  - Prop: withOverlay
    Type: boolean
    Notes: Applies a dark gradient to header
  - Prop: withSpotLight
    type: boolean
    Notes: Applies a "spotlight" gradient to header
```

### HeaderWithImage Props

```table
span: 6
rows:
  - Prop: deg
    Type: object
    Default: small = 76deg, medium = 80deg, large  = 81
    Notes: Sets the gradient rotation per breakpoint
  - Prop: stops
    Type: array
    Default:
    Notes: [Starting gradient color, Ending gradient color]
  - Prop: backgroundImage
    Type: string
    Default:
    Notes: Uses an image as background instead of a gradient.
  - Prop: backgroundImageProps
    Type: string
    Default:
    Notes: Props to be passed to ImageBackground component.
  - Prop: withOverlay
    Type: boolean
    Notes: Applies a dark gradient to header
  - Prop: withUnderlay
    Type: boolean
    Notes: Applies an underlaid gradient to header
  - Prop: withOverlayShadow
    Type: boolean
    Notes: Applies a shadowy overlaid gradient to header
  - Prop: withSpotLight
    type: boolean
    Notes: Applies a "spotlight" gradient to header
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
<Header
  withSpotLight
>
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
<ThemeProvider theme={{ themeName: "tm"}}>
  <React.Fragment>
  <HeaderWithImage
    withSpotLight
  >
    <Column medium={7} large={8}>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item position="1" href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item position="2" href="/concerts">Concert Tickets</Breadcrumb.Item>
          <Breadcrumb.Item position="3">Rock</Breadcrumb.Item>
        </Breadcrumb>
        <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>
            4.8
        </RatingBadge>
      </Row>
      <Heading level={1}>
          <Heading.Strong>Generic</Heading.Strong>
          {" "}
          <Heading.Span>Header</Heading.Span>
      </Heading>
    </Column>
    <Column medium={5} large={4}>
      <HeaderWithImage.ImageWrapper>
        <ImageCard src="https://placekitten.com/g/400/242" />
      </HeaderWithImage.ImageWrapper>
    </Column>
  </HeaderWithImage>
  <div>Some other content</div>
  </React.Fragment>
</ThemeProvider>
```

### Image Header with Image Background

```react
responsive: true
---
<ThemeProvider theme={{ themeName: "tm"}}>
<React.Fragment>
  <HeaderWithImage
    withOverlay
    backgroundImage="https://www.ticketmaster.com/new/compressedimages/dam/a/03e/154a8956-41a7-4508-a320-95f43764a03e_690051_TABLET_LANDSCAPE_16_9.jpg?width=2&height=1&fit=crop"
  >
    <Column medium={7} large={8}>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item position="1" href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item position="2" href="/concerts">Concert Tickets</Breadcrumb.Item>
          <Breadcrumb.Item position="3">Rock</Breadcrumb.Item>
        </Breadcrumb>
        <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>
            4.8
        </RatingBadge>
      </Row>
      <Heading level={1}>
          <Heading.Strong>Generic</Heading.Strong>
          {" "}
          <Heading.Span>Header</Heading.Span>
      </Heading>
    </Column>
    <Column medium={5} large={4}>
      <HeaderWithImage.ImageWrapper>
        <ImageCard
          src="https://www.ticketmaster.com/new/compressedimages/dam/a/03e/154a8956-41a7-4508-a320-95f43764a03e_690051_TABLET_LANDSCAPE_16_9.jpg?width=448&height=252&fit=crop"
          withOverlay={false}
        />
      </HeaderWithImage.ImageWrapper>
    </Column>
  </HeaderWithImage>
  <div>Some other content</div>
  </React.Fragment>
</ThemeProvider>
```

### Image Header with Overlaid Shadow Image Background

```react
responsive: true
---
<ThemeProvider theme={{ themeName: "tm"}}>
<React.Fragment>
  <HeaderWithImage
    withOverlay={false}
    withOverlayShadow={true}
    backgroundImage="https://s1.ticketm.net/tm/en-us/img/static/usopentennis/bg_header.jpg"
    backgroundImageProps={{ deg: OVERLAY_SHADOW_DEG, stops: OVERLAY_SHADOW_STOPS, style: { backgroundPosition: "center" }}}
  >
    <Column medium={7} large={8}>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item position="1" href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item position="2" href="/concerts">Concert Tickets</Breadcrumb.Item>
          <Breadcrumb.Item position="3">Rock</Breadcrumb.Item>
        </Breadcrumb>
        <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>
            4.8
        </RatingBadge>
      </Row>
      <Heading level={1}>
          <Heading.Strong>Generic</Heading.Strong>
          {" "}
          <Heading.Span>Header</Heading.Span>
      </Heading>
    </Column>
  </HeaderWithImage>
  <div>Some other content</div>
  </React.Fragment>
</ThemeProvider>
```

### Lazy Image Header with Underlaid Image Background

```react
responsive: true
---
<React.Fragment>
  <LazyHeaderWithImageExample
    withUnderlay={true}
    backgroundImage="https://beta.tmol.co/s3images/City/losangeles_889.jpg"
    backgroundImageProps=/\{\{/ deg: { small: "40deg", medium: "39deg", large: "25deg" }, stops: [themes.tm.primary.base, themes.tm.accent01.base ], style: { backgroundPosition: "center" } /\}\}/
    height={350}
    width={650}
  >
    <Column medium={7} large={8}>
      <Heading level={1}>
          <Heading.Strong>City</Heading.Strong>
          {" "}
          <Heading.Span>Header</Heading.Span>
      </Heading>
    </Column>
  </LazyHeaderWithImageExample>
</React.Fragment>
```

### Image Header with Underlaid Image Background and Spotlight

```react
responsive: true
---
<React.Fragment>
  <HeaderWithImage
    withUnderlay={true}
    withSpotLight={true}
    backgroundImage="https://beta.tmol.co/s3images/City/losangeles_889.jpg"
  >
    <Column medium={7} large={8}>
      <Heading level={1}>
          <Heading.Strong>City</Heading.Strong>
          {" "}
          <Heading.Span>Header</Heading.Span>
      </Heading>
    </Column>
  </HeaderWithImage>
  <div>Some other content</div>
</React.Fragment>
```
