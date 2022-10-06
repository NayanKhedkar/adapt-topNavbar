import Adapt from 'core/js/adapt';
import device from 'core/js/device';
import drawer from 'core/js/drawer';
import TopNavbarIconView from './TopNavbarIconView';

class TopNavbar extends Backbone.Controller {

  initialize() {
    this.extensionList = [];
    this.listenToOnce(Adapt, 'adapt:start', this.onStart);
    this.listenTo(Adapt, {
      'router:location': this.onNavigationStart,
      'device:resize device:changed': this.deviceChange,
      'drawer:openedCustomView': this.updateDrawerBackButton
    });
  }

  onStart() {
    this.extensionList = Adapt.course.get('_topNavbar');
    this.extensionList.forEach(obj => {
      const extObj = Object.assign(obj, this.getExtObj(obj.extension));
      if (obj.addTo == 'navbar' && extObj._isEnabled) {
        this.addToNavBar(extObj);
      } else if (obj.addTo == 'drawer' && extObj._isEnabled) {
        this.addToDrawer(extObj);
      }
    });
    this.listenClick();
  }

  addToDrawer(extObj) {
    const drawerObject = {
      title: extObj.title,
      description: extObj.description,
      className: extObj.className,
      drawerOrder: extObj._drawerOrder
    };
    drawer.addItem(drawerObject, extObj._trigger);
  }

  addToNavBar(model) {
    const topNavbarView = new TopNavbarIconView({
      model: new Backbone.Model(model),
      attributes: {
        'aria-label': `${model.ariaLabel}`,
        'aria-expanded': false,
        'data-order': model?._drawerOrder || 0
      },
      className: `btn-icon nav__btn topnavbar nav_${model.extension?.toLowerCase()}-btn`
    });
    topNavbarView.$el.appendTo('.nav__inner');
  }

  deviceChange() {
    this.onNavigationStart();
  }

  onNavigationStart() {
    $('.js-nav-drawer-btn').toggle(this.isSmall);
    _.delay(() => {
      this.extensionList.forEach(({ extension }) => {
        $(`.nav_${extension.toLowerCase()}-btn`).toggle(!this.isSmall);
      });
    }, 10);
  }

  updateDrawerBackButton() {
    $(`.drawer__back`).toggleClass('u-display-none', !this.isSmall);
  }

  getExtObj(extension) {
    return Adapt.course.get(`${extension}`);
  }

  listenClick() {
    this.extensionList.forEach(({ _trigger, addTo, extension }) => {
      if (addTo == 'drawer') {
        this.listenTo(Adapt, `${_trigger}`, () => {
          $(`.nav_${extension.toLowerCase()}-btn`).click();
        });
      }
    });
  }

  get isSmall() {
    return device.screenSize == 'small';
  }

}

export default new TopNavbar();
