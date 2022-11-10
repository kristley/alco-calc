import React from 'react';
import TestRenderer from 'react-test-renderer';
import AddBeverageView from './AddBeverageView';
import App from '../App';

describe('', () => {
  it('has 1 child', () => {
    const tree = TestRenderer.create(<AddBeverageView />).toJSON();
    expect(tree.children.length).toBe(4);
  });
});