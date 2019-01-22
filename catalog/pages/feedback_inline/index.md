# Feedback banner

## Props

```table
span: 6
rows:
  - Prop: isExpanded
    Type: boolean
    Default: "false"
    Notes: Allows to open feedback already expanded.
  - Prop: heading
    Type: string
    Default: none
    Notes: Heading text. Required prop.
  - Prop: content
    Type: string
    Default: none
    Notes: Content text. If `content` is passed `expandedText` and `collapsedText` should be passed as well.
  - Prop: onButtonClick
    Type: function
    Default: none
    Notes: A callback function which gets executed when the expand/collapse button is clicked.
  - Prop: expandedText
    Type: string
    Default: none
    Notes: Expanded state control button text. Should be used with `collapsedText` and `content` props.
  - Prop: collapsedText
    Type: string
    Default: none
    Notes: Collapsed state control button text. Should be used with `expandedText` and `content` props.
  - Prop: buttonProps
    Type: object
    Default: none
    Notes: Expand/collapse button props.
  - Prop: variant
    Type: string
    Default: none
    Notes: Defines feedback variant. Can be one of `error`, `success`, `alert`. If variant is not passed then icon should be passed and styles set manually.
  - Prop: icon
    Type: node
    Default: none
    Notes: Allows to pass a custom Icon
```

```react
---
<div>
  <FeedbackInline
    heading="Customer data is not available."
    content="As a result, Audiences and other customer-related features in Fan are not    available. We are working to restore it as soon as possible. You can still work with Pixels and CFCs during this time. Now is the time for all great men to come to  the aid of their party."
    expandedText="expandedText"
    collapsedText="collapsedText"
    onButtonClick={() => {
      console.log('onControlClick');
    }}
    icon={
      <ClearIcon size="large">
        <title>Home Icon</title>
      </ClearIcon>
    }
  />
  <Spacing bottom={{small: "moderate"}}/>
  <FeedbackInline
    heading="Customer data is not available."
    content="As a result, Audiences and other customer-related features in Fan are not    available. We are working to restore it as soon as possible. You can still work      with Pixels and CFCs during this time. Now is the time for all great men to come to  the aid of their party."
    onButtonClick={() => {
      console.log('onControlClick');
    }}
    expandedText="expandedText"
    collapsedText="collapsedText"
    variant="error"
    isExpanded
  />
  <Spacing bottom={{small: "moderate"}}/>
  <FeedbackInline
    heading="Customer data is delayed."
    content="As a result, Audiences and other customer-related features in Fan are   not    available. We are working to restore it as soon as possible. You can    still work      with Pixels and CFCs during this time. Now is the time for     all great men to come to  the aid of their party."
    expandedText="expandedText"
    collapsedText="collapsedText"
    onButtonClick={() => {
      console.log('onControlClick');
    }}
    variant="alert"
  />
  <Spacing bottom={{small: "moderate"}}/>
  <FeedbackInline
    heading="Customer data is up-to-date."
    content="As a result, Audiences and other customer-related features in Fan are   not    available. We are working to restore it as soon as possible. You can    still work      with Pixels and CFCs during this time. Now is the time for     all great men to come to  the aid of their party."
    expandedText="expandedText"
    collapsedText="collapsedText"
    onButtonClick={() => {
      console.log('onControlClick');
    }}
    variant="success"
  />
  <Spacing bottom={{small: "moderate"}}/>
</div>
```
