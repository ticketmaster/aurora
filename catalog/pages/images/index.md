### Image

Image component with a customizable, responsive aspect ratio and internal img tag for SEO purposes.

### Props

```table
span: 6
rows:
  - Prop: loader
    Type: boolean
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
    Notes: Not measured in pixels. Used with width to calculate aspect ratio
  - Prop: width
    Type: number
    Default: 1
    Notes: Not measured in pixels. Used with height to calculate aspect ratio
```

### Image with loader prop

```react
responsive: true
---
<Image loader={<Loader />} />
```

### Wide Image (16:9)

```react
responsive: true
---
<Image
    src="http://placekitten.com/g/826/465"
    alt="Test Kitten"
    height={9}
    width={16}
    loader={null}
/>
```

### Square Image (1:1)

```react
responsive: true
---
<Image
    src="http://placekitten.com/g/400/400"
    alt="Test Kitten"
    height={1}
    width={1}
    loader={null}
/>
```
