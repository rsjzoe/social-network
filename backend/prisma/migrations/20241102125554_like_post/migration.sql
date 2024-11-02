-- CreateTable
CREATE TABLE "_PublicationsLiked" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PublicationsLiked_A_fkey" FOREIGN KEY ("A") REFERENCES "Publication" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PublicationsLiked_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PublicationsLiked_AB_unique" ON "_PublicationsLiked"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicationsLiked_B_index" ON "_PublicationsLiked"("B");
