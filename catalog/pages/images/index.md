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
    src="http://placekitten.com/g/826/465"
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
    src="http://placekitten.com/g/400/400"
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
    src="http://placekitten.com/g/826/465"
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
    src="http://placekitten.com/g/400/400"
    alt="Test Kitten"
    height={400}
    width={400}
    loader={null}
/>
```
