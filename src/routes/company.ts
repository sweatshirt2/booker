import { Router } from "express";
import { CompanyController } from "../controllers/companyController";

const companyRouter = Router();

companyRouter.get('/', async (req, res) => {
  const response = await CompanyController.index();
  res.json(response);
});

companyRouter.post('/', async (req, res) => {
  const response = await CompanyController.create(req.body);
  res.json({ ...response, message: "Company Created Successfully" });
});

companyRouter.get('/:id', async (req, res) => {
  const response = await CompanyController.details(req.params.id);
  res.json(response);
});

companyRouter.patch('/:id', (req, res) => {
  const response = CompanyController.update(req.params.id, req.body);
  res.json(response);
});

companyRouter.delete('/:id', (req, res) => {
  const response = CompanyController.destroy(req.params.id);
  res.json(response);
});

export default companyRouter;
