get requests:

    getDrinks(date)
        return a list af all beverages stored on a specific date
        if the date doesnt exist in the database, it returns an empty list

    getPrefabs()
        return a list of all registered prefabs

    getDates()
        return a sorted list of all dates stored in the database

post requests:

    createDay(date, drink)
        sends drink data for a new day

put requests:

    (TODO: kommer ikke på noen scenarioer hvor vi trenger en put request)

patch requests:

    addDrink(date, drink)
        sends a drink data for an existing day

    removeDrink(date, drink)
        removes a specific drink from current day (current day rule could be enforced client side only, for simplicity)

    addPrefab(prefab)
        adds a prefab to the prefabs file

    removePrefab(prefab)
        removes a prefab from the prefab file

delete requests:

    deleteDay(date)
        deletes a specific date

FileStructure:
json/
prefabs.json

        days/
            12112022.json
            13112022.json
            14112022.json
            ...
