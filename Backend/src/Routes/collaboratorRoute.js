import express from 'express'
import { getCollaborator, postInsertCollaborator } from '../Controller/collaboratorController.js'

export const insertCollaboratorRouter = express.Router()
export const getCollaboratorRouter = express.Router()


insertCollaboratorRouter.post('/InsertCollaborator', postInsertCollaborator)
getCollaboratorRouter.get('/Collaborator/:username', getCollaborator)