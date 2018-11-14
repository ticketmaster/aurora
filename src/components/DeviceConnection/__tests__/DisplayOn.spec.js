import React from 'react';
import { render, cleanup } from 'react-testing-library';

import DisplayOn, { getConnName } from '../DisplayOn';

jest.mock('../Context', () => ({
  Consumer: ({ children }) => children({ '4g': true, saveData: true })
}));

describe('DisplayOn', () => {
  afterEach(() => {
    cleanup();
  });

  it('should return children when the connection prop matches connection state', () => {
    const { container } = render(<DisplayOn conn4g>Content</DisplayOn>);

    expect(container).toMatchSnapshot();
  });

  it('should return children when the connection prop equals saveData and matches connection state', () => {
    const { container } = render(
      <DisplayOn conn3g saveData>
        Content
      </DisplayOn>
    );

    expect(container).toMatchSnapshot();
  });

  it('should return null when the connection prop does not match connection state', () => {
    const { container } = render(<DisplayOn conn2g>Content</DisplayOn>);

    expect(container).toMatchSnapshot();
  });
});

describe('getConnName', () => {
  it('should return saveData when the conn argument equals saveData', () => {
    expect(getConnName('saveData')).toEqual('saveData');
  });

  it('should return conn3g when the conn argument equals 3g', () => {
    expect(getConnName('3g')).toEqual('conn3g');
  });
});
