/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom';
import Slide from './slide';

describe('Slide', () => {
  const id = 'foo';

  const mountedWrapper = mount(
    <Slide
      id={id}
      number={1}
    />,
    { wrappingComponent: BrowserRouter },
  );

  it('uses client-side routing and browser history api', () => {
    expect(mountedWrapper.find(Link)).toHaveLength(1);
  });

  it('renders a hyperlink', () => {
    expect(mountedWrapper.find('a')).toHaveLength(1);
  });

  it('updates \'id\' query string parameter', () => {
    const hyperlink = mountedWrapper.find('a').at(0);
    expect(hyperlink.props().href).toBe(`/?id=${id}`);
  });
});
