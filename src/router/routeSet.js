import { ref } from 'vue';

class RouteSet {
  constructor() {
    this.routeHistory = ref([]);
    this.syncing = ref(false);
    this.backButtonHandler = null;
  }

  add(routeName) {
    if (!routeName || this.syncing.value) return;

    const existingIndex = this.routeHistory.value.indexOf(routeName);

    if (existingIndex !== -1) {
      const delta = this.routeHistory.value.length - existingIndex - 1;
      if (delta > 0) {
        this.syncing.value = true;
        window.history.go(-delta);
        return;
      }
    } else {
      this.routeHistory.value.push(routeName);
    }
  }

  sync(popStateEvent) {
    this.syncing.value = true;
    this.syncing.value = false;
  }

  get() {
    return [...this.routeHistory.value];
  }

  getPrevious() {
    return this.routeHistory.value.length > 1
      ? this.routeHistory.value[this.routeHistory.value.length - 2]
      : null;
  }

  handleBackButton(router) {
    if (this.routeHistory.value.length <= 1) {
      if (router.currentRoute.value.name !== 'Auth') {
        router.push('/auth');
      }
      return false;
    }
    router.back();
  }

  setupBackButtonHandler(router) {
    this.backButtonHandler = (e) => this.handleBackButton(router);
    window.addEventListener('popstate', this.backButtonHandler);
  }

  teardownBackButtonHandler() {
    if (this.backButtonHandler) {
      window.removeEventListener('popstate', this.backButtonHandler);
      this.backButtonHandler = null;
    }
  }

  get routeHistoryList() {
    return this.routeHistory.value;
  }
}

export const routeSet = new RouteSet();
window.addEventListener('popstate', (e) => {
  routeSet.sync(e);
});