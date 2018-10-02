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
    <Modal withCloseIcon={false}>
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

### Modal with custom padding on content

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
    <Modal contentProps={{ style: { padding: "16px 40px 32px 0"}}}>
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

### Modal with custom padding on container

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
    <Modal containerProps={{ style: { padding: "50px 8px 32px 60px"}}}>
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
