### Breadcrumb

Breadcrumb Component to assist the user in visualizing site navigation hierarchically. Breadcrumb contains relevant metadata to populate the BreadcrumbList Schema.org entity. Please visit the [BreadcrumbList documentation page](https://schema.org/BreadcrumbList) for more details.

### Props

```table
span: 6
rows:
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Breadcrumb's children
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying button, or in the case of an href prop being passed, anchor, element
```

### Breadcrumb.Item

Breadcrumb.Item Component to serve as children of the Breadcrumb. Breadcrumb.Item contains relevant metadata as props to populate the BreadcrumbList Schema.org entity. Please visit the [BreadcrumbList documentation page](https://schema.org/BreadcrumbList) and view the required props below for more details.

### Props

```table
span: 6
rows:
  - Prop: position
    Type: string
    Default:
    Notes: Used to reconstruct the order of the items in a Breadcrumb
  - Prop: href
    Type: string
    Default: ""
    Notes: URL to pass to underlying anchor element
  - Prop: children
    Type: node
    Default:
    Notes: Render as the Breadcrumb's children
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying div, or in the case of an href prop being passed, anchor, element
```

### Breadcrumb with Breadcrumb.Items

```react
<Breadcrumb style={breadcrumbStyles}>
    <Breadcrumb.Item position="1" href="/" style={breadcrumbStyles}>Home</Breadcrumb.Item>
    <Breadcrumb.Item position="2" style={breadcrumbStyles}>Breadcrumbs</Breadcrumb.Item>
</Breadcrumb>
```
