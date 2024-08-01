
# Python program to read
# json file

import json
import sqlite3



# Opening JSON file
f = open('./Jsons/collections.json', encoding="utf8")

# returns JSON object as 
# a dictionary
data = json.load(f)

# Iterating through the json
# list

allCollections = []

for i in data:

    newCollection = []

    print(i["id"])
    print(i["name"])
    print(i["image"])

    newCollection = [i["id"], i["name"], i["image"]]

    allCollections.append(newCollection)


collectionNames = set()

import sqlite3

def readSqliteTable():
    try:
        sqliteConnection = sqlite3.connect('SkinsDB.db')
        cursor = sqliteConnection.cursor()
        print("Connected to SQLite")

        sqlite_select_query = """SELECT collectionName from Skins"""
        cursor.execute(sqlite_select_query)
        records = cursor.fetchall()
        print("Total rows are:  ", len(records))
        print("Printing each row")
        for row in records:
            collectionNames.add(row[0])
            print(row[0])


        cursor.close()

    except sqlite3.Error as error:
        print("Failed to read data from sqlite table", error)
    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("The SQLite connection is closed")

readSqliteTable()
skinCollections = []

for collection in allCollections:
    if collection[1] in collectionNames:


        skinCollections.append(collection)

print(len(allCollections))
print(skinCollections[0])
print(len(skinCollections))

f.close()

try:
    sqliteConnection = sqlite3.connect('SkinsDB.db')
    cursor = sqliteConnection.cursor()
    print("Successfully Connected to SQLite")
    for i in skinCollections:

        sqlite_insert_query = f"""INSERT INTO Collections (CollectionName, ImageURL) VALUES ("{i[1]}","{i[2]}")"""
        print(sqlite_insert_query)
        count = cursor.execute(sqlite_insert_query)
        


    sqliteConnection.commit()
    print("Records inserted successfully into SqliteDb_developers table ", cursor.rowcount)
    cursor.close()

except sqlite3.Error as error:
    print("Failed to insert data into sqlite table", error)
finally:
    if sqliteConnection:
        sqliteConnection.close()
        print("The SQLite connection is closed")