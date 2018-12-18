### Responsive and Static Images

Image components with customizable, responsive aspect ratio or static sizing.

### Props

```table
span: 6
rows:
  - Prop: loader
    Type: node
    Default: null
    Notes: Loader UI to display a skeletal state for the image
  - Prop: src
    Type: string
    Default: ''
    Notes: Path or URL to image
  - Prop: alt
    Type: string
    Default: ''
    Notes: Alt text for image
  - Prop: height
    Type: number
    Default: 1
    Notes: Measured in pixels
  - Prop: width
    Type: number
    Default: 1
    Notes: Measured in pixels
  - Prop: imageRef
    Type: ref
    Default: "{ current: null }"
    Notes: React ref to pass to underlying div
  - Prop: children
    Type: node
    Default: null
    Notes: ResponsiveImage only
```

### Image with loader prop

```react
responsive: true
---
<ResponsiveImage loader={"Loading..."} />
```

### Responsive Image (16:9)

```react
responsive: true
---
<ResponsiveImage
    src="https://placekitten.com/g/826/465"
    alt="Test Kitten"
    height={465}
    width={826}
    loader={null}
/>
```

### Responsive Image (1:1)

```react
responsive: true
---
<ResponsiveImage
    src="https://placekitten.com/g/400/400"
    alt="Test Kitten"
    height={400}
    width={400}
    loader={null}
/>
```

### Static Image (16:9)

```react
responsive: true
---
<StaticImage
    src="https://placekitten.com/g/826/465"
    alt="Test Kitten"
    height={465}
    width={826}
    loader={null}
/>
```

### Static Image (1:1)

```react
responsive: true
---
<StaticImage
    src="https://placekitten.com/g/400/400"
    alt="Test Kitten"
    height={400}
    width={400}
    loader={null}
/>
```

### Thumbnail Image

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

### ThumbnailCircleImage Image

```react
<ThumbnailCircleImage size={40} src="https://placekitten.com/g/512/288" alt="thumbnailCircleImage"/>
```

### LazyLoader

The LazyLoader component utilizes the LazyLoader Context to provide developers with a simplified means to progressively load UI.

This component supports lazily loading assets for img tags via srcset and src as well as div tags via style.backgroundImage.

### Props

```table
span: 6
rows:
  - Prop: src
    Type: String
    Default: ''
    Notes: The asset's URI or path
  - Prop: height
    Type: Number
    Default: ''
    Notes: Required
  - Prop: width
    Type: Number
    Default: ''
    Notes: Required
  - Prop: style
    Type: Object
    Default: '{}'
    Notes: Optional
  - Prop: resizeFn
    Type: Function({ src, height, width }) => String
    Default: resize function
    Notes: The default resize function appends computed width, height, and fit query parameters depending on the user's device resolution.
  - Prop: children
    Type: Function({ src, style, imageRef, load }) => Node
    Default: ''
    Notes: This function will be invoked with the  LazyLoaderProvider's state, which is provided to the LazyLoaderConsumer.
```

### Arguments passed to children

```table
span: 6
rows:
  - Prop: src
    Type: String
    Notes: Initially, this argument will be a low res version of the src prop passed to the LazyLoader. Once the load argument is invoked with a value of true, a high res version of the src prop will be computed and assigned to the imageRef. This high res src will be in the correct srcset, src, or backgroundImage format depending on the element type of the imageRef and the user's browser.
  - Prop: style
    Type: Object
    Notes: Prior to loading, this style argument will be composed of the style prop merged with blur styles. Once the load argument is invoked with a value of true, the filter style attribute will be removed from the imageRef.
  - Prop: imageRef
    Type: Object (Ref)
    Notes: This argument should be passed to the img or div tag that contains the asset to be lazy loaded.
  - Prop: load
    Type: Function
    Notes: This argument should be invoked with a value of true when the imageRef is ready to be loaded. For example, you can use an IntersectionObserver to trigger this function once the imageRef enters the user's viewport.
```

### Lazy Responsive Image (1:1)

```react
responsive: true
---
<LazyResponsiveImageExample
    src="https://placekitten.com/g"
    alt="Test Kitten"
    height={400}
    width={400}
/>
```
