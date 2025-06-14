// routeSet.js
class RouteSet {
  constructor() {
    this.routeHistory = [];
    this.syncing = false;
  }
  add(routeName) {
    if (!routeName || this.syncing) return;
    
    const existingIndex = this.routeHistory.indexOf(routeName);

    if (existingIndex !== -1) {
      const delta = this.routeHistory.length - existingIndex - 1;

      if (delta > 0) {
        this.syncing = true;
        window.history.go(-delta);
        return;
      }
    } else {
      this.routeHistory.push(routeName);
    }
  }

  sync(popStateEvent) {
    this.syncing = true;
    this.syncing = false;
  }
  get() {
    return [...this.routeHistory];
  }
  getPrevious() {
    return this.routeHistory.length > 1
    ? this.routeHistory[this.routeHistory.length - 2]: null;
  }
}

export const routeSet = new RouteSet();
window.addEventListener('popstate', (e) => {
  routeSet.sync(e);
});