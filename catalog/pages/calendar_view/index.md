There are few composable components available for constructing the Calendar View

### DayTile

### Props

```table
span: 6
rows:
  - Prop: noBorderRadius
    Type: boolean
    Default: '`false`'
    Notes: Determines whether the DayTile container needs a border-radius
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying HTML element
```

```react
---
<Container>
  <Row>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile />
      </Spacing>
    </Column>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile noBorderRadius />
      </Spacing>
    </Column>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                  <DayTileItem.Label variant="positive">
                    ON SALE: TUE • JAN 29 • 5 PM
                  </DayTileItem.Label>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```

### DayTileDate

`<DayTile.Header />` is recommended to use as a wrapper for the `<DayTileDate />` to achieve proper styling of the `<DayTile />`'s header content

### Props

```table
span: 6
rows:
  - Prop: accent
    Type: boolean
    Default: '`false`'
    Notes: Determines the styling of the underlying `<Text />` component. Can be used in order to bring user's attention to the `<DayTile />`'s content
```

```react
---
<Container>
  <Row>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
          <DayTileDate>10</DayTileDate>
      </Spacing>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
          <DayTileDate accent>10</DayTileDate>
      </Spacing>
    </Column>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate>10</DayTileDate>
          </DayTile.Header>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```

### DayTileItem

`<DayTileItem.Group />` is recommended for use to wrap one or multiple `<DayTileItem />`s together

Use `<DayTileItem.Header />` with `<DayTileOverflowButton />` in order to achieve proper layout when no thumbnail available. Otherwise move the `<DayTileOverflowButton />` inside the `<DayTileItem.Content />` next to the `<DayTileItem.ContentColumn />`.

### Props

```table
span: 6
rows:
  - Prop: highlighted
    Type: boolean
    Default: '`false`'
    Notes: Determines whether the DayTileItem needs to be highlighted
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying HTML element
```

```react
---
<Container>
  <Row>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTileItem.Group>
          <DayTileItem>
            <DayTileItem.Header>
              <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
            </DayTileItem.Header>
            <DayTileItem.Content>
              <DayTileItem.ContentColumn>
                <DayTileItem.Title>
                  Henderson, NV — Sunset Station Outdoor Amphitheater
                </DayTileItem.Title>
              </DayTileItem.ContentColumn>
            </DayTileItem.Content>
            <DayTileItem.Footer>
              <DayTileButton.Group>
                <DayTileButton href="#">2:00 pm</DayTileButton>
                <DayTileButton href="#">6:00 pm</DayTileButton>
              </DayTileButton.Group>
              <DayTileMoreButton
                role="button"
                onClick={() => {
                  alert('More Button Clicked');
                }}
              >
                +4 More
              </DayTileMoreButton>
            </DayTileItem.Footer>
          </DayTileItem>
        </DayTileItem.Group>
      </Spacing>
    </Column>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem highlighted>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
            <DayTileItem>
              <ResponsiveImage
                src="https://www.ticketmaster.com/new/compressedimages/dam/a/ba0/2b25e192-d7cb-4987-b7ce-aca1638a5ba0_818611_TABLET_LANDSCAPE_16_9.jpg?width=320&height=180&fit=crop"
                width={320}
                height={180}
                alt="Talib Kweli"
              />
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Talib Kweli
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    Hip-Hop/Rap
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```

### DayTileButton

`<DayTileButton.Group />` is recommended for use to wrap one or multiple `<DayTileButton />`s together.

### Props

```table
span: 6
rows:
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying `<Button />`
```

```react
---
<Container>
  <Row>
    <Column medium={6}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTileButton.Group>
          <DayTileButton href="#">2:00 pm</DayTileButton>
          <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>
        </DayTileButton.Group>
      </Spacing>
    </Column>
    <Column medium={6}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```

### DayTileMoreButton

### Props

```table
span: 6
rows:
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying `<Link />`
```

```react
---
<Container>
  <Row>
    <Column medium={6}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTileMoreButton
          role="button"
          onClick={() => alert('More Button clicked')}
        >
          + 4 More
        </DayTileMoreButton>
      </Spacing>
    </Column>
    <Column medium={6}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => alert('More Button clicked')}
                >
                  + 4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```

### DayTileOverflowButton

### Props

```table
span: 6
rows:
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying `<IconButton />`
```

```react
---
<Container>
  <Row>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button clicked')} />
      </Spacing>
    </Column>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button clicked')} />
              </DayTileItem.Header>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={4}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <ResponsiveImage
                src="https://www.ticketmaster.com/new/compressedimages/dam/a/1ba/522a6d18-d42a-4cbd-a716-e763e5d261ba_549571_TABLET_LANDSCAPE_16_9.jpg?width=320&height=180&fit=crop"
                width={320}
                height={180}
                alt="Dallas Cowboys"
              />
              <DayTileItem.Content>
                <DayTileItem.ContentColumn />
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Content>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```

### DayTile variations

```react
---
<Container>
  <Row>
    <Column medium={3}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate>10</DayTileDate>
          </DayTile.Header>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "cozy" }} bottom={{xSmall: "cozy" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    On Sale: Fri, 08/17/18 10:00 AM
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton variant="outline" href="#">2:00 pm</DayTileButton>
                  <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```

### DayTile (with image)

```react
---
<Container>
  <Row>
    <Column medium={3}>
      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <ResponsiveImage
                src="https://www.ticketmaster.com/new/compressedimages/dam/a/1ba/522a6d18-d42a-4cbd-a716-e763e5d261ba_549571_TABLET_LANDSCAPE_16_9.jpg?width=320&height=180&fit=crop"
                width={320}
                height={180}
                alt="Dallas Cowboys"
              />
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    vs. Dallas Cowboys
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    Away
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <ResponsiveImage
                src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"
                width={320}
                height={180}
                alt="Hard Rock Rocksino Northfield Park Hard Rock Live"
              />
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Ms. Lauryn Hill and Dave Chappelle
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    R&B
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <ResponsiveImage
                src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"
                width={320}
                height={180}
                alt="Hard Rock Rocksino Northfield Park Hard Rock Live"
              />
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Ms. Lauryn Hill and Dave Chappelle
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    R&B
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <ResponsiveImage
                src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"
                width={320}
                height={180}
                alt="Hard Rock Rocksino Northfield Park Hard Rock Live"
              />
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Ms. Lauryn Hill and Dave Chappelle
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    R&B
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton variant="outline" href="#">2:00 pm</DayTileButton>
                  <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```

### DayTile (multiple items)

```react
---
<Container>
  <Row>
    <Column medium={3}>
      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    On Sale: Fri, 08/17/18 10:00 AM
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton variant="outline" href="#">2:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
    <Column medium={3}>
      <Spacing top={{xSmall: "moderate" }} bottom={{xSmall: "moderate" }} style={{ maxWidth: "160px", margin: "auto" }}>
        <DayTile>
          <DayTile.Header>
            <DayTileDate accent>10</DayTileDate>
          </DayTile.Header>
          <DayTileItem.Group>
            <DayTileItem>
              <ResponsiveImage
                src="https://www.ticketmaster.com/new/compressedimages/dam/a/236/d7f508af-2b7f-49f0-b496-75ab6917b236_715161_RETINA_PORTRAIT_16_9.jpg?width=320&height=180&fit=crop"
                width={320}
                height={180}
                alt="Hard Rock Rocksino Northfield Park Hard Rock Live"
              />
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Ms. Lauryn Hill and Dave Chappelle
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    R&B
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton variant="outline" href="#">2:00 pm</DayTileButton>
                  <DayTileButton variant="outline" href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
            <DayTileItem>
              <ResponsiveImage
                src="https://www.ticketmaster.com/new/compressedimages/dam/a/ba0/2b25e192-d7cb-4987-b7ce-aca1638a5ba0_818611_TABLET_LANDSCAPE_16_9.jpg?width=320&height=180&fit=crop"
                width={320}
                height={180}
                alt="Talib Kweli"
              />
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Talib Kweli
                  </DayTileItem.Title>
                  <DayTileItem.SubTitle>
                    Hip-Hop/Rap
                  </DayTileItem.SubTitle>
                </DayTileItem.ContentColumn>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                </DayTileButton.Group>
              </DayTileItem.Footer>
            </DayTileItem>
            <DayTileItem>
              <DayTileItem.Header>
                <DayTileOverflowButton aria-label="More Info" onClick={() => alert('Overflow Button Clicked')} />
              </DayTileItem.Header>
              <DayTileItem.Content>
                <DayTileItem.ContentColumn>
                  <DayTileItem.Title>
                    Henderson, NV — Sunset Station Outdoor Amphitheater
                  </DayTileItem.Title>
                </DayTileItem.ContentColumn>
              </DayTileItem.Content>
              <DayTileItem.Footer>
                <DayTileButton.Group>
                  <DayTileButton href="#">2:00 pm</DayTileButton>
                  <DayTileButton href="#">6:00 pm</DayTileButton>
                </DayTileButton.Group>
                <DayTileMoreButton
                  role="button"
                  onClick={() => {
                    alert('More Button Clicked');
                  }}
                >
                  +4 More
                </DayTileMoreButton>
              </DayTileItem.Footer>
            </DayTileItem>
          </DayTileItem.Group>
        </DayTile>
      </Spacing>
    </Column>
  </Row>
</Container>
```
