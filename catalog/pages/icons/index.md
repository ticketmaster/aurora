### Icons

Different icons which are generated as react components from the svg icons using pixo library.

[Pixo](https://github.com/c8r/pixo/blob/master/README.md)

```hint
To add icons to the project, use the command `npm run add-icons svgFilePath`.
```

### Icons Props (Deprecated)

#### These icons are still available but will be removed soon

```table
span: 6
rows:
  - Prop: size
    Type: string
    Component: CampsiteIcon, ChevronIcon, ClubIcon, CrossIcon, DonationIcon, GeneralIcon, OverflowIcon, ParkingIcon, SpecialIcon, StarIcon, VenueIcon, VipIcon
    Notes: Required
  - Prop: color
    Type: string
    Component: CampsiteIcon, ChevronIcon, ClubIcon, CrossIcon, DonationIcon, GeneralIcon, OverflowIcon, ParkingIcon, SpecialIcon, StarIcon, VenueIcon, VipIcon
    Notes: Optional
  - Prop: children
    Type: node
    Component: CampsiteIcon, ChevronIcon, ClubIcon, CrossIcon, DonationIcon, GeneralIcon, OverflowIcon, ParkingIcon, SpecialIcon, StarIcon, VenueIcon, VipIcon
    Notes: Optional
  - Prop: direction
    Type: string
    Component: ChevronIcon
    Notes: Optional. Value is one of ["up", "down", "left", "right"]
```

### Icons Props

```table
span: 6
rows:
  - Prop: size
    Type: string
    Component: BackIcon, CalendarIcon, CloseIcon, DeleteIcon, DownIcon, ForwardIcon, HomeIcon, SearchIcon, UpIcon
    Notes: Optional. Value is one of `small`, `large`
  - Prop: size
    Type: string
    Component: ErrorIcon, InfoIcon, InfoDotIcon, SuccessIcon
    Notes: Optional. Value is one of `small`, `regular`, `large`
  - Prop: color
    Type: string
    Component: all
    Notes: Optional
  - Prop: children
    Type: node
    Component: all
    Notes: Optional
```

```react
<Container>
<Row>
  <Column medium={3}>
    <div style={iconStyle}><ChevronIcon size={15} color="#000" direction="down">
    <title>Chevron Down Icon</title></ChevronIcon></div>
    <div style={iconLabelStyle}>ChevronDown Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ChevronIcon size={15} color="#000" direction="up"><title>Chevron Up Icon</title></ChevronIcon></div>
    <div style={iconLabelStyle}>ChevronUp Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ChevronIcon size={15} color="#000" direction="left"><title>Chevron Left Icon</title></ChevronIcon></div>
    <div style={iconLabelStyle}>ChevronLeft Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ChevronIcon size={15} color="#000" direction="right"><title>Chevron Right Icon</title></ChevronIcon></div>
    <div style={iconLabelStyle}>ChevronRight Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><CampsiteIcon size={26} color="#262626" /></div>
    <div style={iconLabelStyle}>Campsite Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ClubIcon size={26} color="#262626" /></div>
    <div style={iconLabelStyle}>Club Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><CrossIcon size={20} color="#262626"><title>Cross Icon</title></CrossIcon></div>
    <div style={iconLabelStyle}>Cross Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ConcessionIcon size={26} color="#262626"><title>ConcessionIcon Icon</title></ConcessionIcon></div>
    <div style={iconLabelStyle}>Concession Icon</div>
  </Column>
</Row>

<Row>

  <Column medium={3}>
    <div style={iconStyle}><DonationIcon size={26} color="#262626" /></div>
    <div style={iconLabelStyle}>Donation Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><GeneralIcon size={26} color="#262626" /></div>
    <div style={iconLabelStyle}>General Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><HotelIcon size={26} color="#000"><title>Hotel Icon</title></HotelIcon></div>
    <div style={iconLabelStyle}>Hotel Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><MealIcon size={26} color="#000"><title>Meal Icon</title></MealIcon></div>
    <div style={iconLabelStyle}>Meal Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><MerchandiseIcon size={26} color="#000"><title>Merchandise Icon</title></MerchandiseIcon></div>
    <div style={iconLabelStyle}>Merchandise Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><MembershipIcon size={26} color="#000"><title>Membership Icon</title></MembershipIcon></div>
    <div style={iconLabelStyle}>Membership Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><OverflowIcon size={22} color="#000"><title>Overflow Icon</title></OverflowIcon></div>
    <div style={iconLabelStyle}>Overflow Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><SpecialIcon size={26} color="#262626" /></div>
    <div style={iconLabelStyle}>Special Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><StarIcon size={22} color="#000"><title>Star Icon</title></StarIcon></div>
    <div style={iconLabelStyle}>Star Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><TransportationIcon size={26} color="#262626"><title>Transportation Icon</title></TransportationIcon></div>
    <div style={iconLabelStyle}>Transportation Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><VenueIcon size={26} color="#262626"><title>Venue Icon</title></VenueIcon></div>
    <div style={iconLabelStyle}>Venue Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><VipIcon size={26} color="#262626"><title>Vip Icon</title></VipIcon></div>
    <div style={iconLabelStyle}>Vip Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><FacebookIcon size={26} color="#000"><title>Facebook Icon</title></FacebookIcon></div>
    <div style={iconLabelStyle}>Facebook Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><InstagramIcon size={26} color="#000"><title>Instagram Icon</title></InstagramIcon></div>
    <div style={iconLabelStyle}>Instagram Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><TwitterIcon size={26} color="#000"><title>Twitter Icon</title></TwitterIcon></div>
    <div style={iconLabelStyle}>Twitter Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><YoutubeIcon size={26} color="#000"><title>Youtube Icon</title></YoutubeIcon></div>
    <div style={iconLabelStyle}>Youtube Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><CAIcon height={13} width={22}><title>CA Icon</title></CAIcon></div>
    <div style={iconLabelStyle}>CA Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><USIcon height={13} width={22}><title>US Icon</title></USIcon></div>
    <div style={iconLabelStyle}>US Icon</div>
  </Column>

</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><WarningIcon height={36} width={36}><title>Warning Icon</title></WarningIcon></div>
    <div style={iconLabelStyle}>Warning Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={4}>
    <div style={iconStyle}>
      <ErrorIcon size="small">
        <title>Error Icon</title>
      </ErrorIcon>
    </div>
    <div style={iconLabelStyle}>Error icon small</div>
  </Column>

  <Column medium={4}>
    <div style={iconStyle}>
      <ErrorIcon size="regular">
        <title>Error Icon</title>
      </ErrorIcon>
    </div>
    <div style={iconLabelStyle}>Error icon regular</div>
  </Column>

  <Column medium={4}>
    <div style={iconStyle}>
      <ErrorIcon size="large">
        <title>Error Icon</title>
      </ErrorIcon>
    </div>
    <div style={iconLabelStyle}>Error icon large</div>
  </Column>
</Row>

<Row>
  <Column medium={4}>
    <div style={iconStyle}>
      <SuccessIcon size="small">
        <title>Success Icon</title>
      </SuccessIcon>
    </div>
    <div style={iconLabelStyle}>Success icon small</div>
  </Column>

  <Column medium={4}>
    <div style={iconStyle}>
      <SuccessIcon size="regular">
        <title>Success Icon</title>
      </SuccessIcon>
    </div>
    <div style={iconLabelStyle}>Success icon regular</div>
  </Column>

  <Column medium={4}>
    <div style={iconStyle}>
      <SuccessIcon size="large">
        <title>Success Icon</title>
      </SuccessIcon>
    </div>
    <div style={iconLabelStyle}>Success icon large</div>
  </Column>
</Row>
<Row>
  <Column medium={4}>
    <div style={iconStyle}>
      <InfoIcon size="small">
        <title>Info Icon</title>
      </InfoIcon>
    </div>
    <div style={iconLabelStyle}>Info icon small</div>
  </Column>

  <Column medium={4}>
    <div style={iconStyle}>
      <InfoIcon size="regular">
        <title>Info Icon</title>
      </InfoIcon>
    </div>
    <div style={iconLabelStyle}>Info icon regular</div>
  </Column>

  <Column medium={4}>
    <div style={iconStyle}>
      <InfoIcon size="large">
        <title>Info Icon</title>
      </InfoIcon>
    </div>
    <div style={iconLabelStyle}>Info icon large</div>
  </Column>
</Row>
<Row>
  <Column medium={3}>
    <div style={iconStyle}>
      <BackIcon size="small">
        <title>Back Icon</title>
      </BackIcon>
    </div>
    <div style={iconLabelStyle}>Back icon small</div>
  </Column>
  <Column medium={3}>
    <div style={iconStyle}>
      <BackIcon size="large">
        <title>Back Icon</title>
      </BackIcon>
    </div>
    <div style={iconLabelStyle}>Back icon large</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <ForwardIcon size="large">
        <title>Forward Icon</title>
      </ForwardIcon>
    </div>
    <div style={iconLabelStyle}>Forward icon large</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <ForwardIcon size="small">
        <title>Forward Icon</title>
      </ForwardIcon>
    </div>
    <div style={iconLabelStyle}>Forward icon small</div>
  </Column>
</Row>
<Row>
  <Column medium={3}>
    <div style={iconStyle}>
      <UpIcon size="small">
        <title>Up Icon</title>
      </UpIcon>
    </div>
    <div style={iconLabelStyle}>Up icon small</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <UpIcon size="large">
        <title>Up Icon</title>
      </UpIcon>
    </div>
    <div style={iconLabelStyle}>Up icon large</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <DownIcon size="small">
        <title>Down Icon</title>
      </DownIcon>
    </div>
    <div style={iconLabelStyle}>Down icon small</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <DownIcon size="large">
        <title>Down Icon</title>
      </DownIcon>
    </div>
    <div style={iconLabelStyle}>Down icon large</div>
  </Column>
</Row>
 <Row>
  <Column medium={3}>
    <div style={iconStyle}>
      <CloseIcon size="small">
        <title>Close Icon</title>
      </CloseIcon>
    </div>
    <div style={iconLabelStyle}>Close icon small</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <CloseIcon size="large">
        <title>Close Icon</title>
      </CloseIcon>
    </div>
    <div style={iconLabelStyle}>Close icon large</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <DeleteIcon size="small">
        <title>Delete Icon</title>
      </DeleteIcon>
    </div>
    <div style={iconLabelStyle}>Delete icon small</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <DeleteIcon size="large">
        <title>Delete Icon</title>
      </DeleteIcon>
    </div>
    <div style={iconLabelStyle}>Delete icon large</div>
  </Column>
</Row>
 <Row>
  <Column medium={3}>
    <div style={iconStyle}>
      <CalendarIcon size="small">
        <title>Calendar Icon</title>
      </CalendarIcon>
    </div>
    <div style={iconLabelStyle}>Calendar icon small</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <CalendarIcon size="large">
        <title>Calendar Icon</title>
      </CalendarIcon>
    </div>
    <div style={iconLabelStyle}>Calendar icon large</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <HomeIcon size="small">
        <title>Home Icon</title>
      </HomeIcon>
    </div>
    <div style={iconLabelStyle}>Home icon small</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <HomeIcon size="large">
        <title>Home Icon</title>
      </HomeIcon>
    </div>
    <div style={iconLabelStyle}>Home icon large</div>
  </Column>
</Row>
 <Row>
  <Column medium={3}>
    <div style={iconStyle}>
      <SearchIcon size="small">
        <title>Search Icon</title>
      </SearchIcon>
    </div>
    <div style={iconLabelStyle}>Search icon small</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <SearchIcon size="large">
        <title>Search Icon</title>
      </SearchIcon>
    </div>
    <div style={iconLabelStyle}>Search icon large</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <BookmarkIcon>
        <title>Bookmark Icon</title>
      </BookmarkIcon>
    </div>
    <div style={iconLabelStyle}>Bookmark icon</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <ClearIcon>
        <title>Clear Icon</title>
      </ClearIcon>
    </div>
    <div style={iconLabelStyle}>Clear icon</div>
  </Column>
 </Row>
 <Row>
  <Column medium={3}>
    <div style={iconStyle}>
      <EditIcon>
        <title>Edit Icon</title>
      </EditIcon>
    </div>
    <div style={iconLabelStyle}>Edit icon</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <FeedbackIcon>
        <title>Feedback Icon</title>
      </FeedbackIcon>
    </div>
    <div style={iconLabelStyle}>Feedback icon</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <FilterIcon>
        <title>Filter Icon</title>
      </FilterIcon>
    </div>
    <div style={iconLabelStyle}>Filter icon</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <LocationIcon>
        <title>Location Icon</title>
      </LocationIcon>
    </div>
    <div style={iconLabelStyle}>Location icon</div>
  </Column>
 </Row>
 <Row>
  <Column medium={3}>
    <div style={iconStyle}>
      <TicketIcon>
        <title>Ticket Icon</title>
      </TicketIcon>
    </div>
    <div style={iconLabelStyle}>Ticket icon</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <TicketsIcon>
        <title>Tickets Icon</title>
      </TicketsIcon>
    </div>
    <div style={iconLabelStyle}>Tickets icon</div>
  </Column>
   <Column medium={3}>
    <div style={iconStyle}>
      <UserIcon>
        <title>User Icon</title>
      </UserIcon>
    </div>
    <div style={iconLabelStyle}>User icon</div>
  </Column>
 </Row>
</Container>
```
