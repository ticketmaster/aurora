import React from "react";
import renderer from "react-test-renderer";

import {
  CallUsIcon,
  CartIcon,
  CheckingAccountIcon,
  CompressIcon,
  CreateNewIcon,
  EmailIcon,
  ExchangeTicketsIcon,
  ExpandIcon,
  FAQIcon,
  FavoriteIcon,
  GetHelpIcon,
  GiftCardIcon,
  MinusIcon,
  MobileDeviceIcon,
  MobileTicketIcon,
  PauseIcon,
  PhoneSupportIcon,
  PlayIcon,
  PlusIcon,
  SellTicketsIcon,
  ShareIcon,
  StandardMailIcon,
  TransferTicketIcon,
  UpgradeTicketIcon,
  VolumeHighIcon,
  VolumeLowIcon,
  VolumeMediumIcon,
  VolumeMuteIcon,
  WillCallIcon
} from "../index";

describe("icons", () => {
  const children = <title>Test Data</title>;

  it("CallUsIcon should match snapshot", () => {
    const tree = renderer.create(<CallUsIcon>{children}</CallUsIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("CartIcon should match snapshot", () => {
    const tree = renderer.create(<CartIcon>{children}</CartIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("CheckingAccountIcon should match snapshot", () => {
    const tree = renderer
      .create(<CheckingAccountIcon>{children}</CheckingAccountIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("CompressIcon should match snapshot", () => {
    const tree = renderer
      .create(<CompressIcon>{children}</CompressIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("CreateNewIcon should match snapshot", () => {
    const tree = renderer
      .create(<CreateNewIcon>{children}</CreateNewIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("EmailIcon large should match snapshot", () => {
    const tree = renderer.create(<EmailIcon>{children}</EmailIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("EmailIcon small should match snapshot", () => {
    const tree = renderer
      .create(<EmailIcon size="small">{children}</EmailIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("ExchangeTicketsIcon should match snapshot", () => {
    const tree = renderer
      .create(<ExchangeTicketsIcon>{children}</ExchangeTicketsIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("ExpandIcon should match snapshot", () => {
    const tree = renderer.create(<ExpandIcon>{children}</ExpandIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("FAQIcon should match snapshot", () => {
    const tree = renderer.create(<FAQIcon>{children}</FAQIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("FavoriteIcon should match snapshot", () => {
    const tree = renderer
      .create(<FavoriteIcon>{children}</FavoriteIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("GetHelpIcon should match snapshot", () => {
    const tree = renderer
      .create(<GetHelpIcon>{children}</GetHelpIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("GiftCardIcon should match snapshot", () => {
    const tree = renderer
      .create(<GiftCardIcon>{children}</GiftCardIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("MinusIcon should match snapshot", () => {
    const tree = renderer.create(<MinusIcon>{children}</MinusIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("MobileDeviceIcon should match snapshot", () => {
    const tree = renderer
      .create(<MobileDeviceIcon>{children}</MobileDeviceIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("MobileTicketIcon should match snapshot", () => {
    const tree = renderer
      .create(<MobileTicketIcon>{children}</MobileTicketIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("PauseIcon should match snapshot", () => {
    const tree = renderer.create(<PauseIcon>{children}</PauseIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("PhoneSupportIcon should match snapshot", () => {
    const tree = renderer
      .create(<PhoneSupportIcon>{children}</PhoneSupportIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("PlayIcon should match snapshot", () => {
    const tree = renderer.create(<PlayIcon>{children}</PlayIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("PlusIcon should match snapshot", () => {
    const tree = renderer.create(<PlusIcon>{children}</PlusIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("SellTicketsIcon should match snapshot", () => {
    const tree = renderer
      .create(<SellTicketsIcon>{children}</SellTicketsIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("ShareIcon should match snapshot", () => {
    const tree = renderer.create(<ShareIcon>{children}</ShareIcon>).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("StandardMailIcon should match snapshot", () => {
    const tree = renderer
      .create(<StandardMailIcon>{children}</StandardMailIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("TransferTicketIcon should match snapshot", () => {
    const tree = renderer
      .create(<TransferTicketIcon>{children}</TransferTicketIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("UpgradeTicketIcon should match snapshot", () => {
    const tree = renderer
      .create(<UpgradeTicketIcon>{children}</UpgradeTicketIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("VolumeHighIcon should match snapshot", () => {
    const tree = renderer
      .create(<VolumeHighIcon>{children}</VolumeHighIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("VolumeLowIcon should match snapshot", () => {
    const tree = renderer
      .create(<VolumeLowIcon>{children}</VolumeLowIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("VolumeMediumIcon should match snapshot", () => {
    const tree = renderer
      .create(<VolumeMediumIcon>{children}</VolumeMediumIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("VolumeMuteIcon should match snapshot", () => {
    const tree = renderer
      .create(<VolumeMuteIcon>{children}</VolumeMuteIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("WillCallIcon should match snapshot", () => {
    const tree = renderer
      .create(<WillCallIcon>{children}</WillCallIcon>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
