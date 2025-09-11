let alertHandler = null;
let pendingAlerts = [];

export function sendAlert(type, message, completed) {
  if (alertHandler) {
    alertHandler({ type, message, completed });
  } else {
    console.warn("⚠️ Alert queued, handler not ready yet!");
    pendingAlerts.push({ type, message, completed });
  }
}

export function registerAlertHandler(handler) {
  alertHandler = handler;

  if (pendingAlerts.length > 0) {
    pendingAlerts.forEach((alert) => alertHandler(alert));
    pendingAlerts = [];
  }
}
