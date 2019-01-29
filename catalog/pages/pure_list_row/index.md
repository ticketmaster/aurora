### PureListRow

ListRow Component with a standard variant and a variant with the link as shown below.

### Multiple List Row with the Container

```react
responsive: true
---
<div style={{padding: '10px', background: '#fff'}}>
<ListContainer expandMultiple={true}>
  <PureListRow
    index={0}
    rowTriggerPosition="right"
    onOverflowClick={()=>{}}
    header={listItems[0].header}
  >
    <ListRowOverflow>
      <div>custom content 1</div>
    </ListRowOverflow>
 </PureListRow>

  <PureListRow
    index={1}
    rowTriggerPosition="right"
    onOverflowClick={()=>{}}
    header={listItems[1].header}
   >
    <ListRowOverflow>
      <div>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      custom content 2<br/>
      </div>
    </ListRowOverflow>
  </PureListRow>


  <PureListRow
    index={2}
    onOverflowClick={()=>{}}
    header={listItems[2].header}
  >
    <ListRowOverflow>
     <div>custom content 3</div>
    </ListRowOverflow>
  </PureListRow>

  <PureListRow
  rowTriggerPosition="left"
    index={3}
    onOverflowClick={()=>{}}
    header={listItems[0].header}
  >
    <ListRowOverflow>
     <div>custom content 4</div>
    </ListRowOverflow>
  </PureListRow>

</ListContainer>
</div>
;
```
