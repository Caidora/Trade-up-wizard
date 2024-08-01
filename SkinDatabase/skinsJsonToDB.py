
# Python program to read
# json file

import json
import sqlite3



# Opening JSON file
f = open('./Jsons/skins.json', encoding="utf8")

# returns JSON object as 
# a dictionary
data = json.load(f)

# Iterating through the json
# list

itemList = []

for i in data:

    newItem = []

    Category = i["category"]
    if(Category["name"] == "Knives" or Category["name"] ==  "Gloves" or i["name"] == "M4A4 | Howl"):
        continue

    newItem.append(i["id"][5:])
    newItem.append(i["name"])
    collections = i["collections"][0]
    newItem.append(collections["name"])
    rarity = i["rarity"]
    newItem.append(rarity["name"])
    newItem.append(float(i["min_float"]))
    newItem.append(float(i["max_float"]))
    newItem.append(i["image"])
    print(newItem)

    itemList.append(newItem)

# Closing file
f.close()
try:
    sqliteConnection = sqlite3.connect('SkinsDB.db')
    cursor = sqliteConnection.cursor()
    print("Successfully Connected to SQLite")
    for i in itemList:

        sqlite_insert_query = f"""INSERT INTO Skins (skinID, skinName, collectionName, rarity, minfloat, maxfloat, imageUrl) VALUES ({i[0]},"{i[1]}","{i[2]}","{i[3]}",{i[4]}, {i[5]} ,"{i[6]}")"""
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