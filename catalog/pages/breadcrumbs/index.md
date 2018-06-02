### BreadcrumbList

BreadcrumbList Component to assist the user in visualizing site navigation hierarchically. BreadcrumbList contains relevant metadata to populate the BreadcrumbList Schema.org entity. Please visit the [BreadcrumbList documentation page](https://schema.org/BreadcrumbList) for more details.

### Props

```table
span: 6
rows:
  - Prop: delimiter
    Type: node
    Default:
    Notes: Delimiter to serve as an interstitial between child elements
  - Prop: children
    Type: node
    Default:
    Notes: Render as the BreadcrumbList's children
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying button, or in the case of an href prop being passed, anchor, element
```

### BreadcrumbItem

BreadcrumbItem Component to serve as children of the BreadcrumbList. BreadcrumbItem contains relevant metadata as props to populate the BreadcrumbList Schema.org entity. Please visit the [BreadcrumbList documentation page](https://schema.org/BreadcrumbList) and view the required props below for more details.

### Props

```table
span: 6
rows:
  - Prop: position
    Type: string
    Default:
    Notes: Used to reconstruct the order of the items in a BreadcrumbList
  - Prop: href
    Type: string
    Default:
    Notes: URL to pass to underlying anchor element
  - Prop: children
    Type: node
    Default:
    Notes: Render as the BreadcrumbList's children
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying anchor element
```

### BreadcrumbList with BreadcrumbItems

```react
<BreadcrumbList delimiter=" / " style={breadcrumbListStyles}>
    <BreadcrumbItem position="1" href="/" style={breadcrumbListStyles}>Home</BreadcrumbItem>
    <BreadcrumbItem position="2" href="/#/breadcrumbs" style={breadcrumbListStyles}>Breadcrumbs</BreadcrumbItem>
</BreadcrumbList>
```
