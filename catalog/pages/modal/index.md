### Modal

```react
responsive: true
---
<TransitionGroup component={Backdrop} appear>
    <CSSTransition
      classNames="modal"
      timeout={{ appear: 300, enter: 300, exit: 100 }}
    >
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
    </CSSTransition>
</TransitionGroup>
```

### Modal without close icon

```react
responsive: true
---

<TransitionGroup component={Backdrop} appear>
    <CSSTransition
      classNames="modal"
      timeout={{ appear: 300, enter: 300, exit: 100 }}
    >
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
    </CSSTransition>
</TransitionGroup>
```

### Modal with custom padding on content

```react
responsive: true
---

<TransitionGroup component={Backdrop} appear>
    <CSSTransition
      classNames="modal"
      timeout={{ appear: 300, enter: 300, exit: 100 }}
    >
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
    </CSSTransition>
</TransitionGroup>
```

### Modal with custom padding on container

```react
responsive: true
---

<TransitionGroup component={Backdrop} appear>
    <CSSTransition
      classNames="modal"
      timeout={{ appear: 300, enter: 300, exit: 100 }}
    >
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
    </CSSTransition>
</TransitionGroup>
```
