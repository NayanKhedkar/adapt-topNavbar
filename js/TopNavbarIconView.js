import Adapt from 'core/js/adapt';
import { templates } from 'core/js/reactHelpers';
import React from 'react';
import ReactDOM from 'react-dom';

export default class TopNavbarIconView extends Backbone.View {

  get tagName() { return 'button' }

  initialize() {
    this.listenTo(Adapt, 'remove', this.remove);
    this.render();
  }

  events() {
    return {
      click: 'onClick'
    };
  }

  render() {
    const data = this.model.toJSON();
    const Template = templates[this.template];
    ReactDOM.render(<Template {...data} />, this.el);
    return this;
  }

  onClick(e) {
    Adapt.trigger(`${this.model.get('_trigger')}`);
  }

  remove() {
    //console.log("Removed call");
  }

  get template() {
    return 'topNavbarIcon';
  }
}
