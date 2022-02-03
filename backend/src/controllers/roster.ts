import { RequestHandler } from "express"
import sqlite3 from 'sqlite3'
import { open } from "sqlite"

const dbPromise = open({
    filename: './db/roster.db',
    driver: sqlite3.Database
});

export const getFromRoster: RequestHandler = async (req, res, next) => {
    let db = await dbPromise;
    await db.migrate();
    const employees = await db.all('SELECT * FROM Roster');
    res.status(200).json({"success": true, "message": employees});
};

export const addToRoster: RequestHandler = async (req, res, next) => {
    let db = await dbPromise;
    let query = `INSERT INTO Roster (we_ohr, OHR, name, week_end, role,
        shift, shift_start, shift_end, offs, supervisor_1,
        supervisor_2, supervisor_3, status, status_date, email,
        department, site) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    let values: any = ['2010-02-03_750015278', 750015278, "John Doe", '2022-10-02', "REP",
        "MOR", '08:20', '15:30', 'sun-mon', 'jone jay', 'James Smith',
        'Judy Johnson', 'ATT', '2019-08-12', 'jdoe@xyz.com', 'PROD', 'GAR'
    ];
    
    try {
        await db.run(query, values);
        res.status(200).json({"success": true, "message": "Employee added to database."});
    } catch(err: any) {
        res.status(500).json({"success": false, "message": err.message})
    }
};

export const updateRoster: RequestHandler = (req, res, next) => {
    console.log("Hello!");
    res.status(200).json({"success": true, "message": "Table creation successful"});
};

export const removeFromRoster: RequestHandler = (req, res, next) => {
    console.log("Hello!");
    res.status(200).json({"success": true, "message": "Table creation successful"});
};