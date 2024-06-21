-- Create a table to keep track of the custom IDs
CREATE TABLE "CustomIdTracker" (
    "prefix" TEXT NOT NULL,
    "last_value" INTEGER NOT NULL,
    PRIMARY KEY ("prefix")
);

-- Initialize the tracker for 'M' prefix
INSERT INTO "CustomIdTracker" ("prefix", "last_value") VALUES ('M', 0);

-- CreateTable
CREATE TABLE "Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "penalizedAt" DATETIME NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- Trigger to generate custom ID
CREATE TRIGGER "generate_member_code" BEFORE INSERT ON "Member"
FOR EACH ROW
BEGIN
    UPDATE "CustomIdTracker"
    SET "last_value" = "last_value" + 1
    WHERE "prefix" = 'M';

    UPDATE "Member"
    SET "code" = (
        SELECT 'M' || printf('%03d', "last_value")
        FROM "CustomIdTracker"
        WHERE "prefix" = 'M'
    )
    WHERE "id" = NEW."id";
END;

-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BorrowedBook" (
    "id" INTEGER NOT NULL PRIMARY KEY,
    "borrowedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_getBorrowedBooks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_getBorrowedBooks_A_fkey" FOREIGN KEY ("A") REFERENCES "Book" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_getBorrowedBooks_B_fkey" FOREIGN KEY ("B") REFERENCES "BorrowedBook" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_getBorrowers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_getBorrowers_A_fkey" FOREIGN KEY ("A") REFERENCES "BorrowedBook" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_getBorrowers_B_fkey" FOREIGN KEY ("B") REFERENCES "Member" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_getBorrowedBooks_AB_unique" ON "_getBorrowedBooks"("A", "B");

-- CreateIndex
CREATE INDEX "_getBorrowedBooks_B_index" ON "_getBorrowedBooks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_getBorrowers_AB_unique" ON "_getBorrowers"("A", "B");

-- CreateIndex
CREATE INDEX "_getBorrowers_B_index" ON "_getBorrowers"("B");
