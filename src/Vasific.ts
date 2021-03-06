import Component from "./Component";

export default class Vasific {
  static app: Component<any, any>;
  static rootElement: Element | null;

  static render(app?: Component<any, any>, renderSelector?: string): void {
    if(app && renderSelector) {
      Vasific.app = app;
      Vasific.rootElement = document.querySelector(renderSelector);
      Vasific.render();
      return;
    }
    if(Vasific.rootElement && Vasific.app) {
      Vasific.rootElement.innerHTML = Vasific.app.render();
      return;
    }
  }
}