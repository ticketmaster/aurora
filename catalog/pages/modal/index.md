### Modal

```react
responsive: true
---

<ReactCSSTransitionGroup
        transitionName="modal"
        component={Backdrop}
        transitionAppear
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={100}>
    <Modal>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
    </Modal>
</ReactCSSTransitionGroup>
```

### Modal without close icon

```react
responsive: true
---

<ReactCSSTransitionGroup
        transitionName="modal"
        component={Backdrop}
        transitionAppear
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={100}>
    <Modal noCloseIcon>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
    </Modal>
</ReactCSSTransitionGroup>
```

### Modal with custom padding

```react
responsive: true
---

<ReactCSSTransitionGroup
        transitionName="modal"
        component={Backdrop}
        transitionAppear
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={100}>
    <Modal padding="16px 40px 32px 0">
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
    </Modal>
</ReactCSSTransitionGroup>
```
