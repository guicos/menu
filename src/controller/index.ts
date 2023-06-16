import { Request, Response } from "express";
import { service } from "../service/index";

class Controller{

  public menu(req:Request, res:Response) {
   return service.menu(req, res)
  }  
}

export const controller = new Controller();