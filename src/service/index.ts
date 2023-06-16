import { Request, Response } from "express";
import { repository } from "../repository/index";
import { MenuInterface, menuId } from "../interfaces/menu.interface";

class Service{
  public menu(req:Request, res:Response): Response<MenuInterface[]> {
    const findMenu: MenuInterface[] = repository.get();

    if(req.params.id === menuId.register){
      return res.json(findMenu.filter((menu: MenuInterface) => req.params.id === menu.id || menu.menuSupId !== null && menu.id !== menuId.people ));
    }else{
      return res.json(findMenu.filter((menu: MenuInterface) => req.params.id === menu.id || menu.menuSupId === req.params.id ));
    }   
  }  
}

export const service = new Service();