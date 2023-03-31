import { Router, Request,Response } from 'express'
import Job, { userInput } from '../db/models/jobs'


const jobRouter = Router() 

jobRouter.post('/postjobs',async (req:Request,res:Response) => {
    try{
        const reqData = req.body
        if (!reqData.job_title || reqData.job_title.length === 0 ){
            return res.status(400).send({
                message: "Please enter a Job title"
            })  
        }
        if (!reqData.job_description || reqData.job_description.length === 0 ){
            return res.status(400).send({
                message: "Please enter a Job description"
            })  
        }
        if (!reqData.required_skill || reqData.required_skill.length === 0 ){
            return res.status(400).send({
                message: "Please enter a Required skill"
            })  
        }
        if (!reqData.location || reqData.location.length === 0 ){
            return res.status(400).send({
                message: "Please enter a Location"
            })  
        }
        if (!reqData.expericence || reqData.expericence.length === 0 ){
            return res.status(400).send({
                message: "Please Select Experience"
            })  
        }
        const createJob = {
            job_title : reqData.job_title,
            job_description : reqData.job_description,
            required_skill: reqData.required_skill,
            location: reqData.location,
            expericence: reqData.expericence
    
        }
        const newUser:userInput = await Job.create(createJob)
        return res.status(201).send({message : "Job posted successfully"})
    }
    catch(error: any){
    return res.status(500).send({message :`error in creating a new user : ${error}`})
    }
})

export default jobRouter;