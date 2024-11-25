import { Router } from "express";
import UserController from "../controllers/userController";

const userRouter = Router();

userRouter.get('/', (req, res) => {
  const response = UserController.index();
  res.end(String(response));
});

userRouter.post('/', (req, res) => {
  const response = UserController.create(req.body);
  res.end(JSON.stringify(response));
});

userRouter.get('/:id', (req, res) => {
  const response = UserController.details(req.params.id);
  res.end(JSON.stringify(response));
});

userRouter.patch('/:id', (req, res) => {
  const response = UserController.update(req.params.id, req.body);
  res.end(JSON.stringify(response));
});

userRouter.delete('/:id', (req, res) => {
  const response = UserController.destroy(req.params.id);
  res.end(JSON.stringify(response));
});

export default userRouter;
