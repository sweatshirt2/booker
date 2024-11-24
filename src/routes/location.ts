import { Router } from "express";
import LocationController from "../controllers/locationController";

const locationRouter = Router();

locationRouter.get('/', async (req, res) => {
  const locations = await LocationController.index();
  res.json(locations);
});

locationRouter.post('/', async (req, res) => {
  const location = await LocationController.create(req.body);
  res.json(location);
});

locationRouter.get('/:id', async (req, res) => {
  const location = await LocationController.details(req.params.id);
  res.json(location);
});

locationRouter.patch('/:id', async (req, res) => {
  const location = await LocationController.update(req.params.id, req.body);
  res.json(location);
});

locationRouter.delete('/:id', async (req, res) => {
  const location = await LocationController.delete(req.params.id);
  res.json(location);
});

export default locationRouter;