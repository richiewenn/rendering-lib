import Component from "./Component";

export default class Vasific {
  static app: Component;
  static rootElement: Element;

  static render(app?: Component, renderSelector?: String): void {
    if(arguments.length >= 2) {
      Vasific.app = app;
      Vasific.rootElement = document.querySelector(renderSelector);
      return;
    }
    if(Vasific.rootElement && Vasific.app) {
      Vasific.rootElement.innerHTML = app.render();
      return;
    }
  }
}