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
  - Prop: variant
    Type: light, dark, accent, none
    Default: light
    Notes:
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
  - Prop: size
    Type: mini, uno, hecto, kilo, giga, tera, zetta
    Default: uno
    Notes: font size
  - Prop: weight
    Type: regular, semiBold
    Default: semiBold
    Notes: font weight
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying div, or in the case of an href prop being passed, anchor, element
```

### Breadcrumb with Breadcrumb.Items

```react
dark: true
---
<ThemeProvider theme={{ themeName: "tm"}}>
  <Breadcrumb>
      <Breadcrumb.Item position="1" role="link" ariaLabel="Home" href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item position="2" ariaLabel="Breadcrumbs">Breadcrumbs</Breadcrumb.Item>
  </Breadcrumb>
</ThemeProvider>
```

### Breadcrumb with Truncated Breadcrumb.Items

```react
dark: true
---
<ThemeProvider theme={{ themeName: "tm"}}>
  <Breadcrumb>
      <Breadcrumb.Item position="1" ariaLabel="Lorem ipsum dolor sit amet, consectetur adipiscing elit">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Breadcrumb.Item>
      <Breadcrumb.Item position="2" ariaLabel="Pellentesque ornare nibh sed urna tincidunt, non bibendum enim porttitor.">Pellentesque ornare nibh sed urna tincidunt, non bibendum enim porttitor.
  </Breadcrumb.Item>
      <Breadcrumb.Item position="3" ariaLabel="Cras vulputate nibh in lectus mollis, vel posuere est tincidunt.">Cras vulputate nibh in lectus mollis, vel posuere est tincidunt.
  </Breadcrumb.Item>
  </Breadcrumb>
</ThemeProvider>
```
