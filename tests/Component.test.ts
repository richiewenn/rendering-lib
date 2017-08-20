import 'mocha';
import { expect } from 'chai';

import Component from '../src/Component';


describe('Component', () => {
  it('should render empty string', () => {
    const result = new Component().render();
    expect(result).to.be.empty
  });
  it('should have empty state', () => {
    const result = (<any>new Component()).state;
    expect(result).to.be.empty
  });
  it('should have empty props', () => {
    const result = (<any>new Component()).props;
    expect(result).to.be.empty
  });
  it('should have same props as passed in', () => {
    const props = {
      foo: 'foo'
    };
    const result = (<any>new Component(props)).props;
    expect(result).to.deep.eq(props);
  });
  it('should change its state', () => {
    const state = {
      foo: 'foo'
    };
    const component = new Component();

    component.setState(state);
    const result = (<any>component).state;

    expect(result).to.deep.eq(state)
  });
});
