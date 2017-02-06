// @flow weak
/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { createShallowWithContext } from 'test/utils';
import Drawer, { styleSheet } from './Drawer';
import Slide from '../transitions/Slide';
import Modal from '../internal/Modal';
import { durations } from '../styles/transitions';

/**
 * An item that goes in lists.
 */
describe('<Drawer />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallowWithContext();
    classes = shallow.context.styleManager.render(styleSheet);
  });

  it('should render a Modal', () => {
    const wrapper = shallow(
      <Drawer />,
    );
    assert.strictEqual(wrapper.is('Modal'), true, 'should be a Modal');
  });

  it('should render Slide > Paper inside the Modal', () => {
    const wrapper = shallow(
      <Drawer />,
    );

    const slide = wrapper.childAt(0);
    assert.strictEqual(
      slide.length === 1 && slide.is(Slide),
      true,
      'immediate wrapper child should be Slide',
    );

    const paper = slide.childAt(0);
    assert.strictEqual(
      paper.length === 1 && paper.is('Paper'),
      true,
      'Slide child should be Paper',
    );

    assert.strictEqual(paper.hasClass(classes.paper), true, 'should have the paper class');
  });

  describe('enterTransitionDuration property', () => {
    const enterDuration = 854;
    const leaveDuration = 2967;

    it('default value should be from standard timings', () => {
      assert.strictEqual(Drawer.defaultProps.enterTransitionDuration, durations.enteringScreen);
    });

    it('should be passed to Slide', () => {
      const wrapper = shallow(<Drawer enterTransitionDuration={enterDuration} />);
      assert.strictEqual(wrapper.find(Slide).prop('enterTransitionDuration'), enterDuration);
    });

    it('should be passed to to Modal\'s backdropTransitionDuration when open=true', () => {
      const wrapper = shallow(<Drawer
        open
        enterTransitionDuration={enterDuration}
        leaveTransitionDuration={leaveDuration}
      />);
      assert.strictEqual(wrapper.find(Modal).prop('backdropTransitionDuration'), enterDuration);
    });
  });

  describe('leaveTransitionDuration property', () => {
    const enterDuration = 6577;
    const leaveDuration = 1889;

    it('default value should be from standard timings', () => {
      assert.strictEqual(Drawer.defaultProps.leaveTransitionDuration, durations.leavingScreen);
    });

    it('should be passed to Slide', () => {
      const wrapper = shallow(<Drawer leaveTransitionDuration={leaveDuration} />);
      assert.strictEqual(wrapper.find(Slide).prop('leaveTransitionDuration'), leaveDuration);
    });

    it('should be passed to to Modal\'s backdropTransitionDuration when open=false', () => {
      const wrapper = shallow(<Drawer
        open={false}
        enterTransitionDuration={enterDuration}
        leaveTransitionDuration={leaveDuration}
      />);
      assert.strictEqual(wrapper.find(Modal).prop('backdropTransitionDuration'), leaveDuration);
    });
  });

  it('should override Modal\'s backdropTransitionDuration from property when specified', () => {
    const duration = 335;
    const wrapper = shallow(<Drawer backdropTransitionDuration={duration} />);
    assert.strictEqual(wrapper.find(Modal).prop('backdropTransitionDuration'), duration);
  });

  it('should set the Paper className', () => {
    const wrapper = shallow(<Drawer paperClassName="woof"><h1>Hello</h1></Drawer>);
    const paper = wrapper.find('Paper');
    assert.strictEqual(paper.hasClass(classes.paper), true, 'should have the paper class');
    assert.strictEqual(paper.hasClass('woof'), true, 'should have the woof class');
  });

  it('should be closed by default', () => {
    const wrapper = shallow(<Drawer><h1>Hello</h1></Drawer>);

    const modal = wrapper;
    const slide = modal.find(Slide);

    assert.strictEqual(modal.prop('show'), false, 'should not show the modal');
    assert.strictEqual(slide.prop('in'), false, 'should not transition in');
  });

  describe('opening and closing', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(<Drawer><h1>Hello</h1></Drawer>);
    });

    it('should start closed', () => {
      assert.strictEqual(wrapper.prop('show'), false, 'should not show the modal');
      assert.strictEqual(wrapper.find(Slide).prop('in'), false, 'should not transition in');
    });

    it('should open', () => {
      wrapper.setProps({ open: true });
      assert.strictEqual(wrapper.prop('show'), true, 'should show the modal');
      assert.strictEqual(wrapper.find(Slide).prop('in'), true, 'should transition in');
    });

    it('should close', () => {
      wrapper.setProps({ open: false });
      assert.strictEqual(wrapper.prop('show'), false, 'should not show the modal');
      assert.strictEqual(wrapper.find(Slide).prop('in'), false, 'should not transition in');
    });
  });

  describe('docked', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(<Drawer docked><h1>Hello</h1></Drawer>);
    });

    it('should render a div instead of a Modal when docked', () => {
      assert.strictEqual(wrapper.is('div'), true, 'should be a div element');
      assert.strictEqual(wrapper.hasClass(classes.docked), true, 'should have the docked class');
    });

    it('should render Slide > Paper inside the div', () => {
      const slide = wrapper.childAt(0);
      assert.strictEqual(
        slide.length === 1 && slide.is(Slide),
        true,
        'immediate wrapper child should be Slide',
      );

      const paper = slide.childAt(0);
      assert.strictEqual(
        paper.length === 1 && paper.is('Paper'),
        true,
        'Slide child should be Paper',
      );
    });
  });

  describe('slide direction', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(<Drawer />);
    });

    it('should return the opposing slide direction', () => {
      wrapper.setProps({
        anchor: 'left',
      });
      assert.strictEqual(wrapper.find(Slide).props().direction, 'right');

      wrapper.setProps({
        anchor: 'right',
      });
      assert.strictEqual(wrapper.find(Slide).props().direction, 'left');

      wrapper.setProps({
        anchor: 'top',
      });
      assert.strictEqual(wrapper.find(Slide).props().direction, 'down');

      wrapper.setProps({
        anchor: 'bottom',
      });
      assert.strictEqual(wrapper.find(Slide).props().direction, 'up');
    });
  });
});
