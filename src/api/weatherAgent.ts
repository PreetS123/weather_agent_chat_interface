const API_URL =
  "https://millions-screeching-vultur.mastra.cloud/api/agents/weatherAgent/stream";

export async function sendMessage(
  threadId: string,
  content: string
): Promise<ReadableStream<Uint8Array>> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "x-mastra-dev-playground": "true",
    },
    body: JSON.stringify({
      messages: [{ role: "user", content }],
      runId: "weatherAgent",
      maxRetries: 22,
      maxSteps: 55,
      temperature: 0.5,
      topP: 1,
      runtimeContext: {},
      threadId: threadId,
      resourceId: "weatherAgent",
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.body!;
}
