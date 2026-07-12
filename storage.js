// Simple localStorage helpers
const PROFILE_KEY = 'cq_profile';
const LOGS_KEY = 'cq_logs';
const WEIGHT_KEY = 'cq_weights';

function getProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) || null; } catch { return null; }
}

function saveProfile(data) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify({ ...getProfile(), ...data, updatedAt: Date.now() }));
}

function getLogs(date) {
  try {
    const all = JSON.parse(localStorage.getItem(LOGS_KEY)) || [];
    return date ? all.filter(l => l.date === date) : all;
  } catch { return []; }
}

function addLog(entry) {
  const all = getLogs();
  entry.id = Date.now() + Math.random();
  entry.ts = Date.now();
  all.push(entry);
  localStorage.setItem(LOGS_KEY, JSON.stringify(all));
}

function removeLog(id) {
  const all = getLogs().filter(l => l.id !== id);
  localStorage.setItem(LOGS_KEY, JSON.stringify(all));
}

function getWeightLogs() {
  try { return JSON.parse(localStorage.getItem(WEIGHT_KEY)) || []; } catch { return []; }
}

function addWeightLog(weight) {
  const all = getWeightLogs();
  all.push({ weight, date: new Date().toISOString().slice(0, 10), ts: Date.now() });
  localStorage.setItem(WEIGHT_KEY, JSON.stringify(all));
}
