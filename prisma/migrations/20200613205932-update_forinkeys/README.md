# Migration `20200613205932-update_forinkeys`

This migration has been generated by Iuri-Kintschev at 6/13/2020, 8:59:32 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Mensagem" (
"conversaId" INTEGER NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"pergunta" TEXT NOT NULL  ,"resposta" TEXT NOT NULL  ,FOREIGN KEY ("conversaId") REFERENCES "Conversa"("id") ON DELETE CASCADE ON UPDATE CASCADE)

CREATE TABLE "quaint"."Conversa" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"userId" INTEGER NOT NULL  ,FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE)

CREATE TABLE "quaint"."User" (
"email" TEXT NOT NULL  ,"id" INTEGER NOT NULL  ,"name" TEXT   ,"numero" TEXT NOT NULL  ,
    PRIMARY KEY ("id"))

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200613195507-mesagem_table_with_conect_to_conversa..20200613205932-update_forinkeys
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url      = "file:./database.db"
 }
 generator client {
   provider = "prisma-client-js"
@@ -12,18 +12,18 @@
 model Mensagem {
   id         Int      @default(autoincrement()) @id
   conversa   Conversa @relation(fields: [conversaId], references: [id])
-  conversaId Int      @unique
+  conversaId Int
   pergunta String
   resposta String
 }
 model Conversa {
   id       Int        @default(autoincrement()) @id
   user     User       @relation(fields: [userId], references: [id])
-  userId   Int        @unique
+  userId   Int
   Mensagem Mensagem[]
 }
 model User {
```


