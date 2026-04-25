const clients = new Map();
let nextClientId = 1;
const heartbeatMs = 20000;

function writeEvent(response, payload) {
  response.write(`data: ${JSON.stringify({ ...payload, sentAt: new Date().toISOString() })}\n\n`);
}

export function registerLiveClient(user, response) {
  const clientId = nextClientId;
  nextClientId += 1;

  const heartbeat = setInterval(() => {
    if (!response.writableEnded) {
      writeEvent(response, { type: "ping" });
    }
  }, heartbeatMs);

  clients.set(clientId, {
    id: clientId,
    userId: user.id,
    role: user.role,
    response,
    heartbeat,
  });

  writeEvent(response, { type: "connected", userId: user.id, role: user.role });

  return () => {
    const client = clients.get(clientId);
    if (!client) return;
    clearInterval(client.heartbeat);
    clients.delete(clientId);
    if (!response.writableEnded) {
      response.end();
    }
  };
}

export function broadcastLiveEvent(payload) {
  for (const client of clients.values()) {
    try {
      writeEvent(client.response, payload);
    } catch {
      clearInterval(client.heartbeat);
      clients.delete(client.id);
    }
  }
}
