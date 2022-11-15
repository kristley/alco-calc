import React from 'react';
import TestRenderer from 'react-test-renderer';
import AddBeverageView from './AddBeverageView';

describe('AddBeverageView', () => {
  describe('When rendered', () => {
    it('has 1 child', () => {
      const tree = TestRenderer.create(<AddBeverageView />).toJSON();
      expect(tree.children.length).toBe(4);
    });
  })

  describe('Adds beverage to list', () => {
    it('adds beverage to list', () => {
      const tree = TestRenderer.create(<AddBeverageView />).toJSON();
      expect(tree.children.length).toBe(5);
    });
  })

  describe('Bad inputs are not allowed', () => {

  })

  describe('Fills in from prefab', () => {

  })
});