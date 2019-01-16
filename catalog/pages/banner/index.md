# Feedback banner

## Props

```table
span: 6
rows:
  - Prop: isOpen
    Type: boolean
    Default: "false"
    Notes: Defines if banner is open or not. Required prop.
  - Prop: isExpanded
    Type: boolean
    Default: "false"
    Notes: Allows to open banner already expanded.
  - Prop: onRequestClose
    Type: function
    Default: none
    Notes: A callback function which gets executed when the close button is pressed.  No close button would be visible if this prop is not passed.
  - Prop: heading
    Type: string
    Default: none
    Notes: Heading text. Required prop.
  - Prop: content
    Type: string
    Default: none
    Notes: Content text
  - Prop: linkText
    Type: string
    Default: none
    Notes: Link text. Should be used with href.
  - Prop: href
    Type: string
    Default: none
    Notes: Specifies the URL of the page the link goes to. When `href` passed control element is an anchor element otherwise it is the expand/collapse button. Should NOT be used with onButtonClick, expandedText or collapsedText. Should be used with linkText
  - Prop: linkProps
    Type: object
    Default: none
    Notes: Link props when link control element is used. e.g. `target`
  - Prop: onButtonClick
    Type: function
    Default: none
    Notes: A callback function which gets executed when the expand/collapse button is clicked. This prop should NOT be used with href or linkText and should be passed when expand/collapse button is needed.
  - Prop: expandedText
    Type: string
    Default: none
    Notes: Expanded state control button text. Should be used with collapsedText and onButtonClick.
  - Prop: collapsedText
    Type: string
    Default: none
    Notes: Collapsed state control button text. Should be used with expandedText and onButtonClick.
  - Prop: buttonProps
    Type: object
    Default: none
    Notes: Expand/collapse button props when button control element is used.
  - Prop: variant
    Type: string
    Default: none
    Notes: Defines banner varian. Can be one of `error`, `success`, `alert`, `info`. If variant is not passed then icon should be passed and styles set manually.
  - Prop: icon
    Type: node
    Default: none
    Notes: Allows to pass a custom Icon
```

```react
---
<div>
  <Banner
    heading="This is your primary message text."
    content="As a result, Audiences and other customer-related features in Fan are not    available. We are working to restore it as soon as possible. You can still work      with Pixels and CFCs during this time. Now is the time for all great men to come to  the aid of their party."
    expandedText="expandedText"
    collapsedText="collapsedText"
    onButtonClick={() => {
      console.log('onControlClick');
    }}
    isOpen
    onRequestClose={() => {
      console.log('onRequestClose');
    }}
    icon={
      <ClearIcon size="large">
        <title>Home Icon</title>
      </ClearIcon>
    }
  />
  <Spacing bottom={{small: "moderate"}}/>
  <Banner
    heading="This is your primary message text."
    content="As a result, Audiences and other customer-related features in Fan are not    available. We are working to restore it as soon as possible. You can still work      with Pixels and CFCs during this time. Now is the time for all great men to come to  the aid of their party."
    onButtonClick={() => {
      console.log('onControlClick');
    }}
    isOpen
    expandedText="expandedText"
    collapsedText="collapsedText"
    variant="error"
    isExpanded
  />
  <Spacing bottom={{small: "moderate"}}/>
  <Banner
    heading="This is your primary message text."
    linkText="Link"
    href="https://www.ticketmaster.com/"
    linkProps={{ target: '_blank' }}
    isOpen
    variant="success"
    onRequestClose={() => {
      console.log('onRequestClose');
    }}
  />
  <Spacing bottom={{small: "moderate"}}/>
  <Banner
    heading="This is your primary message text."
    linkText="Link"
    href="https://www.ticketmaster.com/"
    linkProps={{ target: '_blank' }}
    isOpen
    variant="alert"
  />
  <Spacing bottom={{small: "moderate"}}/>
  <Banner
    heading="This is your primary message text."
    linkText="Link"
    href="https://www.ticketmaster.com/"
    linkProps={{ target: '_blank' }}
    isOpen
    variant="info"
    onRequestClose={() => {
      console.log('onRequestClose');
    }}
  />
</div>
```
