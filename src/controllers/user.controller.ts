import { Request, Response } from "express";
import { userModel } from "../model/user.model";

export class user {
  async getData(req: Request, res: Response) {
    try {
      const query = await userModel.find();

      if (query) {
        return query
          ? res.status(200).json({ response: "success", data: query })
          : res.status(404).json({ responseError: "not found" });
      }
    } catch (error) {
      res.status(500).json({ responseError: error });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const {
        username,
        lastName,
        capitalPrestado,
        total,
        fechaPrestamo,
        fechaPago,
        paymentMethod,
        direccion,
        modalityPayment,
        grupo,
        totalPagado,
        pagado,
        cancelado,
        daysPayment,
        moneyToPayment,
      } = req.body;

      const dataUser = {
        username: username,
        lastName: lastName,
        capitalPrestado: capitalPrestado,
        total: total,
        fechaPrestamo: fechaPrestamo,
        fechaPago: fechaPago,
        paymentMethod: paymentMethod,
        direccion: direccion,
        modalityPayment: modalityPayment,
        grupo: grupo,
        totalPagado: totalPagado,
        pagado: pagado,
        cancelado: cancelado,
        daysPayment: daysPayment,
        moneyToPayment: moneyToPayment,
      };

      const isDataExists = await userModel.findOne({
        username: dataUser.username,
        lastName: dataUser.lastName,
      });

      if (isDataExists)
        return res.status(401).json({ response: "el usuario ya existe" });

      // todo: save user in database
      const saveData = await userModel.create(dataUser);

      return saveData
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

      res.json({
        response: "usuario eliminado correctamente",
        details: queryId,
      });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  }

  async modifyDataUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const newData = req.body;

      const query = await userModel.findOneAndUpdate(
        { _id: id },
        { $set: newData },
        { new: true }
      );

      if (query) {
        return res
          .status(200)
          .json({ response: "usuario editado", details: query });
      }
    } catch (error) {
      res.status(500).json({ response: error });
    }
  }

  async getHistoryPaymentsByUser(req: Request, res: Response) {
    try {
      const query = await userModel.find({ pagado: true });

      res.json({ response: query });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  }

  async getUsersCancelados(req: Request, res: Response) {
    try {
      const query = await userModel.find({ cancelado: true });

      res.json({ length: query.length, response: query });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const query = await userModel.findOne({ username });

      if (!query) return res.json({ response: "error" });

      return res.json({ response: "user find", details: query });
    } catch (error) {
      res.status(500).json({ response: error });
    }
  }
}
