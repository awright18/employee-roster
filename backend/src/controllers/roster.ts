import { RequestHandler } from "express"
import sqlite3 from 'sqlite3'
import { open } from "sqlite"

import { Employee } from "../models/employee";


const dbPromise = open({
    filename: './db/roster.db',
    driver: sqlite3.Database
});

export const getFromRoster: RequestHandler = async (req, res, next) => {
    const db = await dbPromise;
    await db.migrate();
    const employees: Employee[] = await db.all('SELECT * FROM Roster');
    res.status(200).json({"success": true, "message": employees});
};

export const addToRoster: RequestHandler = async (req, res, next) => {

    const db = await dbPromise;
    const query = `INSERT INTO Roster (we_ohr, OHR, name, week_end, role,
        shift, shift_start, shift_end, offs, supervisor_1,
        supervisor_2, supervisor_3, status, status_date, email,
        department, site)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        let returnList: any[] = [];
        let masterStatus = "success"
        let statusCode = 200;

        for (const employee of req.body) {
            let status = "success";
            let desc = "added successfully"
                
            try {
                await db.run(query, employee);
            } catch (err: any) {
                masterStatus = "Errors found";
                statusCode = 500;
                returnList.push({
                    "success": false,
                    "desc": err.message,
                    "emp_ohr": employee[1],
                    "week_end": employee[3]
                });
                continue;
            }
            returnList.push({
                "success": true,
                "desc": "---",
                "emp_ohr": employee[1],
                "week_end": employee[3]
            })
        };
        res.status(statusCode).json({"status": masterStatus, output: returnList});
};

export const updateRoster: RequestHandler = async (req, res, next) => {
    const db = await dbPromise;
    const query = `UPDATE Roster SET we_ohr = ?, OHR = ?, name = ?,
        week_end = ?, role = ?, shift = ?, shift_start = ?, shift_end = ?,
        offs = ?, supervisor_1 = ?, supervisor_2 = ?, supervisor_3 = ?,
        status = ?, status_date = ?, email = ?, department = ?, site = ?
        WHERE (we_OHR = "${req.params.we_ohr}")`;

    try {
        await db.run(query, req.body);
        res.status(200).json({"success": true, "message": "Table creation successful"});
    } catch (err: any) {
        res.status(500).json({"success": false, "message": err.message})
    }
};

export const removeFromRoster: RequestHandler = async (req, res, next) => {
    const db = await dbPromise;
    const removeList = req.body;

    removeList.forEach(async (WE_OHR: any) => {
        const query = `DELETE FROM Roster where (we_ohr = ?)`;

        try {
            await db.run(query, WE_OHR);
        } catch (err: any) {

        }
    });

    res.status(200).json({"success": true, "message": "Table creation successful"});

};