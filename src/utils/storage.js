export default {
  storage(session = true) {
    return session ? window.sessionStorage : window.localStorage; 
  },
  write(key, value, session) {
    this.storage(session).setItem(key, JSON.stringify(value));
  },
  read(key, session) {
    return JSON.parse(this.storage(session).getItem(key));
  },
  remove(key, session) {
    this.storage(session).removeItem(key);
  },
  clear() {
    this.storage().clear();
    this.storage(!0).clear();
  }
}