import express from 'express'
import { getAllCollabPending, getAllCollaboratorPending, getCollaborator, getCollaboratorApprove, getCollaboratorDeny, getCollaboratorPending, getCountDeny, getCountFoodApprove, getCountFoodPending, postInsertCollaborator } from '../Controller/collaboratorController.js'

export const insertCollaboratorRouter = express.Router()
export const getCollaboratorRouter = express.Router()

export const getAllCollaborator = express.Router()

export const getAllCollabRouter = express.Router()

insertCollaboratorRouter.post('/InsertCollaborator', postInsertCollaborator)
getCollaboratorRouter.get('/Collaborator/:username', getCollaborator)

getCollaboratorRouter.get('/CollaboratorDeny/:username', getCollaboratorDeny)
getCollaboratorRouter.get('/CollaboratorPending/:username', getCollaboratorPending)
getCollaboratorRouter.get('/CollaboratorApprove/:username', getCollaboratorApprove)




getAllCollaborator.get('/collaborator/allpending', getAllCollaboratorPending)

getAllCollabRouter.get('/allcollab', getAllCollabPending)

getCollaboratorRouter.get('/foodpendingcount/:macb', getCountFoodPending)

getCollaboratorRouter.get('/foodapprovecount/:macb', getCountFoodApprove)

getAllCollabRouter.get('/fooddenycount/:macb', getCountDeny)