```react
const flyoutOptions = ["United States (English)", "Canada (English)",  "Canada (Francias)"];


<Flyout isOpen={true} onClose={() => {}}>
    {flyoutOptions.map((option, index) => (
        <FlyoutItem index={index} key={option}>
            {option}
        </FlyoutItem>
    ))}
</Flyout>
```
