import express from "express";
import { router } from "./router";

class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }
}

export const app = new App(); 