Accounts.ui.config({
  requestPermissions: {
    google: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/tasks']
  }
}, {
  requestOfflineToken: {
    google: true
  }
});
