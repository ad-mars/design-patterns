class Component {
  isComponent = true;
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component wrapper</div>`;
  }
}

class HigherOrderComponent {

}

class HeaderComponent extends ComponentWithTemplate {
  onInit() { }
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() { }
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is impossible');
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderComponent(component) {
  component.render();
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
