### Thumbnail Image component

### Props

```table
span: 6
rows:
  - Prop: size
    Type: Number
    Notes: Required
  - Prop: src
    Type: String
    Notes: Required
  - Prop: alt
    Type: String
    Notes: Required
```

### ThumbNail Image

```react
<ThumbnailCircleImage size={40} src="https://placekitten.com/g/512/288" alt="thumbnailCircleImage"/>
```

### ThumbNail with Lazy loaded Image

```react
<ThumbnailCircleImage image={<img size={40} style={{width: "100%", height: "100%"}}src="https://placekitten.com/g/512/288" alt="thumbnailCircleImage" />} />
```
