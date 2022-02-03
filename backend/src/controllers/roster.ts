import { RequestHandler } from "express"
import sqlite from 'sqlite'
import { open } from "sqlite"

export const getFromRoster: RequestHandler = async (req, res, next) => {
    const db = await open({
        filename: '../../db/roster.db',
        driver: sqlite.Database
    });

    await db.migrate();
    res.status(200).json({"success": true, "message": "Table creation successful"});
};

export const addToRoster: RequestHandler = (req, res, next) => {
    const x = 1 + 1;
    res.status(200).json({"success": true, "message": "Table creation successful"});
};

export const updateRoster: RequestHandler = (req, res, next) => {
    console.log("Hello!");
    res.status(200).json({"success": true, "message": "Table creation successful"});
};

export const removeFromRoster: RequestHandler = (req, res, next) => {
    console.log("Hello!");
    res.status(200).json({"success": true, "message": "Table creation successful"});
};