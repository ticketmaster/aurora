### Icons

Different icons which are generated as react components from the svg icons using pixo library.

[Pixo](https://github.com/c8r/pixo/blob/master/README.md)

```hint
To add icons to the project, use the command `npm run add-icons svgFilePath`.
```

### Props

```table
span: 6
rows:
  - Prop: size
    Type: number
    Component: CampsiteIcon, ChevronIcon, ClubIcon, CrossIcon, DonationIcon, GeneralIcon, OverflowIcon, ParkingIcon, SpecialIcon, StarIcon, TicketIcon, UserIcon, VenueIcon, VipIcon
    Notes: Required
  - Prop: color
    Type: string
    Component: CampsiteIcon, ChevronIcon, ClubIcon, CrossIcon, DonationIcon, GeneralIcon, OverflowIcon, ParkingIcon, SpecialIcon, StarIcon, TicketIcon, UserIcon, VenueIcon, VipIcon
    Notes: Optional
  - Prop: children
    Type: node
    Component: CampsiteIcon, ChevronIcon, ClubIcon, CrossIcon, DonationIcon, GeneralIcon, OverflowIcon, ParkingIcon, SpecialIcon, StarIcon, TicketIcon, UserIcon, VenueIcon, VipIcon
    Notes: Optional
  - Prop: direction
    Type: string
    Component: ChevronIcon
    Notes: Optional. Value is one of ["up", "down", "left", "right"]
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
    <div style={iconStyle}><DonationIcon size={26} color="#262626" /></div>
    <div style={iconLabelStyle}>Donation Icon</div>
  </Column>
</Row>

<Row>
  <Column medium={3}>
    <div style={iconStyle}><GeneralIcon size={26} color="#262626" /></div>
    <div style={iconLabelStyle}>General Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><OverflowIcon size={22} color="#000"><title>Overflow Icon</title></OverflowIcon></div>
    <div style={iconLabelStyle}>Overflow Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><ParkingIcon size={26} color="#262626" /></div>
    <div style={iconLabelStyle}>Parking Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><SearchIcon size={22} color="#000"><title>Search Icon</title></SearchIcon></div>
    <div style={iconLabelStyle}>Search Icon</div>
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

  <Column medium={3}>
    <div style={iconStyle}><TicketIcon size={26} color="#262626"><title>Ticket Icon</title></TicketIcon></div>
    <div style={iconLabelStyle}>Ticket Icon</div>
  </Column>

  <Column medium={3}>
    <div style={iconStyle}><UserIcon size={24} color="#000"><title>User Icon</title></UserIcon></div>
    <div style={iconLabelStyle}>User Icon</div>
  </Column>
</Row>

<Row>
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
</Container>
```
