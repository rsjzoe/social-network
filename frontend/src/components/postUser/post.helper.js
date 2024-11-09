import { serverUrl } from "../../constants";

export async function like(userId, publicationId) {
  await fetch(`${serverUrl}/like`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      publicationId: publicationId,
    }),
  });
}

export async function dislike(userId, publicationId) {
    await fetch(`${serverUrl}/dislike`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        publicationId: publicationId,
      }),
    });
  }