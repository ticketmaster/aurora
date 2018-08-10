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
    Type: string
    Default:
    Notes: Title text for image
  - Prop: children
    Type: ImageCard.Title, ImageCard.SubTitle, ReactElement
    Default:
    Notes: In order the first two children are wrapped in a caption,
           the remaining elements are added as additional content under the image
```

```react
responsive: true
---
<Spacing top={{small: "normal"}} bottom={{small: "normal"}}>
    <Container>
        <Row>
            <Column medium={4}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard src="https://placekitten.com/g/512/288">
                        <ImageCard.Title>Title</ImageCard.Title>
                        <ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>
                    </ImageCard>
                </Spacing>
            </Column>
            <Column small={6} medium={4}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard src="https://placekitten.com/g/512/288" />
                </Spacing>
            </Column>
            <Column small={6} medium={4}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard src="https://placekitten.com/g/512/288">
                        <ImageCard.Title>Title</ImageCard.Title>
                        <ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>
                    </ImageCard>
                </Spacing>
            </Column>
            <Column medium={6}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard src="https://placekitten.com/g/512/288">
                        <ImageCard.Title>Title</ImageCard.Title>
                        <ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>
                        <div>Additional Content</div>
                    </ImageCard>
                </Spacing>
            </Column>
            <Column medium={6}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard src="https://placekitten.com/g/512/288">
                        <ImageCard.Title>Title</ImageCard.Title>
                        <ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>
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
                    <ImageCard type="half" src="https://placekitten.com/g/512/288">
                        <ImageCard.Title>Title</ImageCard.Title>
                        <ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>
                    </ImageCard>
                </Spacing>
            </Column>
            <Column medium={6} large={3}>
                <Spacing bottom={{small: "moderate"}}>
                    <ImageCard type="half" src="https://placekitten.com/g/512/288">
                        <ImageCard.Title>Title</ImageCard.Title>
                        <ImageCard.SubTitle>Sub Title</ImageCard.SubTitle>
                    </ImageCard>
                </Spacing>
            </Column>
        </Row>
    </Container>
</Spacing>
```
