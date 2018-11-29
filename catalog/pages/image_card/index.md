### Image Card

Displays an image in a card with additional content support

### Props

```table
span: 6
rows:
  - Prop: type
    Type: string
    Default: "'full'"
    Notes: Sets the type of image card displayed. Possible values are `full`, `half`
  - Prop: src
    Type: string
    Default:
    Notes: Path or URL to image
  - Prop: alt
    Type: string
    Default:
    Notes: Alt text for image
  - Prop: title
    Type: string
    Default:
    Notes: Title text for image
  - Prop: cardTitle
    Type: ImageCard.Title, ReactElement
    Default: "null"
    Notes: Title of the card
  - Prop: cardSubtitle
    Type: ImageCard.SubTitle, ReactElement
    Default: "null"
    Notes: Subtitle of the card
  - Prop: overlayProps
    Type: object
    Default: "{ }"
    Notes: Properties applied to the `Overlay` element
  - Prop: containerProps
    Type: object
    Default: "{ }"
    Notes: Properties applied to the `Container` element
  - Prop: captionContainerProps
    Type: object
    Default: "{ }"
    Notes: Properties applied to the `CaptionContainer` element
  - Prop: children
    Type: ImageCard.Title, ImageCard.SubTitle, ReactElement
    Default: "null"
    Notes: Elements that will be placed under the image. NOTE that in case when
            `cardTitle` and `cardSubitle` prop values are NOT provided,
            the first two children will be wrapped in a caption and the remaining elements
            will be placed under the image.
```

```react
responsive: true
---
<Spacing top={{small: "normal"}} bottom={{small: "normal"}}>
    <Container>
        <Row>
            <Column medium={4}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard
                        src="https://placekitten.com/g/512/288"
                        cardTitle={<ImageCard.Title>Title</ImageCard.Title>}
                        cardSubtitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    />
                </Spacing>
            </Column>
            <Column small={6} medium={4}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard src="https://placekitten.com/g/512/288"/>
                </Spacing>
            </Column>
            <Column small={6} medium={4}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard
                        src="https://placekitten.com/g/512/288"
                        cardTitle={<ImageCard.Title>Title</ImageCard.Title>}
                        cardSubtitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    />
                </Spacing>
            </Column>
            <Column medium={6}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard
                        src="https://placekitten.com/g/512/288"
                        cardTitle={<ImageCard.Title>Title</ImageCard.Title>}
                        cardSubtitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    >
                        <div>Additional Content</div>
                    </ImageCard>
                </Spacing>
            </Column>
            <Column medium={6}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard
                        src="https://placekitten.com/g/512/288"
                        cardTitle={<ImageCard.Title>Title</ImageCard.Title>}
                        cardSubtitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    >
                        <div>Additional Content</div>
                    </ImageCard>
                </Spacing>
            </Column>
        </Row>
    </Container>
</Spacing>
```

## Image Card Half

Displays an image card in "half" mode. This mode does not support additional content

```react
responsive: true
---
<Spacing top={{small: "normal"}} bottom={{small: "normal"}}>
    <Container>
        <Row>
            <Column medium={6} large={3}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard
                        type="half"
                        src="https://placekitten.com/g/512/288"
                        cardTitle={<ImageCard.Title>Title</ImageCard.Title>}
                        cardSubtitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    />
                </Spacing>
            </Column>
            <Column medium={6} large={3}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard
                        type="half"
                        src="https://placekitten.com/g/512/288"
                        cardTitle={<ImageCard.Title>Title</ImageCard.Title>}
                        cardSubtitle={<ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>}
                    />
                </Spacing>
            </Column>
        </Row>
    </Container>
</Spacing>
```
