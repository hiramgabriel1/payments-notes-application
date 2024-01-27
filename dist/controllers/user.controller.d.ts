import { Request, Response } from "express";
export declare class user {
    getData(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    createUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteUser(req: Request, res: Response): Promise<void>;
    modifyDataUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getHistoryPaymentsByUser(req: Request, res: Response): Promise<void>;
    getUsersCancelados(req: Request, res: Response): Promise<void>;
}
