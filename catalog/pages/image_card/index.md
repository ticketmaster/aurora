### Image Card

Displays an image in a card with additional content support

### Props

```table
span: 6
rows:
  - Prop: type
    Type: full | half
    Default: full
    Notes: Sets the type of image card displayed
  - Prop: src
    Type: string
    Default:
    Notes: Path or URL to image
  - Prop: alt
    Type: string
    Default:
    Notes: Alt text for image
  - Prop: title
    Type: Node (e.g. ImageCard.Title, ImageCard.SubTitle, ReactElement, string, null)
    Default:
    Notes: Caption title
  - Prop: subTitle
    Type: Node (e.g. ImageCard.Title, ImageCard.SubTitle, ReactElement, string, null)
    Default:
    Notes: Caption subTitle
  - Prop: variant
    Type: string
    Default: standard
    Notes: Determines style variant (one of "standard"; "transparent")
  - Prop: children
    Type: Node (e.g. ReactElement, string, null)
    Default:
    Notes: Rendered as content under the image
```

```react
responsive: true
---
<div>
    <Container style={{ paddingBottom: "20px", paddingTop: "20px" }}>
        <Row>
            <Column medium={4} style={{marginTop: spacing.gutters.small}}>
                <ImageCard
                    src="https://placekitten.com/g/512/288"
                    title={<ImageCard.Title>Title</ImageCard.Title>}
                    subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                />
            </Column>
            <Column small={6} medium={4} style={{marginTop: spacing.gutters.small}}>
                <ImageCard src="https://placekitten.com/g/512/288" />
            </Column>
            <Column small={6} medium={4} style={{marginTop: spacing.gutters.small}}>
                <ImageCard
                    src="https://placekitten.com/g/512/288"
                    title={<ImageCard.Title>Title</ImageCard.Title>}
                    subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    variant="transparent"
                />
            </Column>
            <Column medium={6} style={{marginTop: spacing.gutters.small}}>
                <ImageCard
                    src="https://placekitten.com/g/512/288"
                    title={<ImageCard.Title>Title</ImageCard.Title>}
                    subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                >
                    <div style={additionalContentStyles}>Additional Content</div>
                </ImageCard>
            </Column>
            <Column medium={6} style={{marginTop: spacing.gutters.small}}>
                <ImageCard
                    src="https://placekitten.com/g/512/288"
                    title={<ImageCard.Title>Title</ImageCard.Title>}
                    subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    variant="transparent"
                >
                    <div style={additionalContentTransparentStyles}>Additional Content</div>
                </ImageCard>
            </Column>
        </Row>
    </Container>
</div>
```

## Image Card Half

Displays an image card in "half" mode. This mode does not support additional content

```react
responsive: true
---
<div>
    <Container style={{ paddingBottom: "20px", paddingTop: "20px" }}>
        <Row>
            <Column medium={6} large={3} style={{marginTop: spacing.gutters.small}}>
                <ImageCard
                    type="half"
                    src="https://placekitten.com/g/512/288"
                    title={<ImageCard.Title>Title</ImageCard.Title>}
                    subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                />
            </Column>
            <Column medium={6} large={3} style={{marginTop: spacing.gutters.small}}>
                <ImageCard
                    type="half"
                    src="https://placekitten.com/g/512/288"
                    title={<ImageCard.Title>Title</ImageCard.Title>}
                    subTitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    variant="transparent"
                />
            </Column>
        </Row>
    </Container>
</div>
```
