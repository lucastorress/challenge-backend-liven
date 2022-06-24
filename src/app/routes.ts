import { Router as RouterExpress } from 'express';

class Router {
  private static _instance: Router;
  private routes: RouterExpress;

  constructor(readonly Router: RouterExpress) {
    this.routes = Router;
  }

  public static getInstance(): Router {
    if (!this._instance) {
      this._instance = new Router(RouterExpress());
    }
    return this._instance;
  }

  public getRoutes(): RouterExpress {
    return this.routes;
  }

  public createRoutes(): void {
    Router.getInstance().getRoutes();
  }
}

export default Router;
