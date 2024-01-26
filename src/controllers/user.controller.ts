import { Request, Response } from "express";
import { userModel } from "../model/user.model";

export class user {
  async getData(req: Request, res: Response) {
    try {
      const query = await userModel.find();

      return query
        ? res.status(200).json({ response: "success", data: query })
        : res.status(404).json({ responseError: "not found" });
    } catch (error) {
      res.status(500).json({ responseError: error });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const {
        username,
        lastName,
        city,
        mountPrestamo,
        totalInteres,
        totalSumadoInteres,
        mount,
      } = req.body;

      const dataUser = {
        username: username,
        lastName: lastName,
        city: city,
        mountPrestamo: mountPrestamo,
        totalInteres: totalInteres,
        totalSumadoInteres: totalSumadoInteres,
        mount: mount,
      };

      const isDataExists = await userModel.find({
        username: username,
        lastName: lastName,
      });

      if (isDataExists)
        return res.status(401).json({ response: "el usuario ya existe" });

      // todo: save user in database
      const saveData = await userModel.create(dataUser);

      saveData
        ? res
            .status(200)
            .json({ response: "usuario guardado", details: saveData })
        : res.status(500).json({ response: "error" });
    } catch (error) {
      res.status(500).json({ responseError: error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // todo: find id to delete
      const queryId = await userModel.findByIdAndDelete(id);
    } catch (error) {
      res.status(500).json({ response: error });
    }
  }
}
