import { RequestHandler } from "express"
import sqlite from 'sqlite'
import { open } from "sqlite"

export const getFromRoster: RequestHandler = (req, res, next) => {
    open({
        filename: '../../db/roster.db',
        driver: sqlite.Database
    })
}

export const addToRoster: RequestHandler = (req, res, next) => {

}

export const updateRoster: RequestHandler = (req, res, next) => {

}

export const removeFromRoster: RequestHandler = (req, res, next) => {

}