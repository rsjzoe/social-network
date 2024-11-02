export async function like(userId, publicationId) {
  await fetch("http://localhost:3000/like", {
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
    await fetch("http://localhost:3000/dislike", {
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