
# Python program to read
# json file

import json
import sqlite3
import random


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


    rarityColours = [
        ["Consumer Grade", "#afafaf"],
        ["Industrial Grade", "#6496e1"],
        ["Mil-Spec Grade", "#4b69cd"],
        ["Restricted", "#8847ff"],
        ["Classified", "#d32ce6"],
    ]

    priceRanges = {
        "Consumer Grade": [
            0.05,0.10
        ],
        "Industrial Grade": [
            0.50,1.00
        ],
        "Mil-Spec Grade": [
            5.00,10.00
        ],
        "Restricted": [
            50.00,100.00
        ],
        "Classified": [
            500.00,1000.00
        ],
        "Covert": [
            5000.00,10000.00
        ]
    }
    newItem.append(i["id"][5:])
    newItem.append(i["name"])
    collections = i["collections"][0]
    newItem.append(collections["name"])
    rarity = i["rarity"]
    newItem.append(rarity["name"])
    newItem.append(float(i["min_float"]))
    newItem.append(float(i["max_float"]))
    newItem.append(i["image"])

    currentRange = priceRanges[rarity["name"]]
    newItem.append(round(random.uniform(currentRange[0], currentRange[1]),2))


    print(newItem)

    itemList.append(newItem)

# Closing file
f.close()
try:
    sqliteConnection = sqlite3.connect('SkinsDB.db')
    cursor = sqliteConnection.cursor()
    print("Successfully Connected to SQLite")
    for i in itemList:

        sqlite_insert_query = f"""INSERT INTO Skins (skinID, skinName, collectionName, rarity, minfloat, maxfloat, imageUrl, price) VALUES ({i[0]},"{i[1]}","{i[2]}","{i[3]}",{i[4]}, {i[5]} ,"{i[6]}", {i[7]})"""
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