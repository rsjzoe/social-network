-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Publication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Publication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Publication" ("content", "id", "imageUrl", "title", "userId") SELECT "content", "id", "imageUrl", "title", "userId" FROM "Publication";
DROP TABLE "Publication";
ALTER TABLE "new_Publication" RENAME TO "Publication";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
