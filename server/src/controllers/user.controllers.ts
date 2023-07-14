import User, { IUser } from '../models/user.model';
import { Request, Response } from 'express';

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();

    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addSingleUser = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const user = new User(data);
    const userSaved = await user.save();

    if (userSaved) {
      res.status(201).json({ message: 'User has been saved', userSaved });
    } else {
      res.status(404).json({ message: 'User was not saved' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const putSingleUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    if (updatedUser) {
      res.status(200).json({ message: 'User has been updated', updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteSingleUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json({ message: 'User has been deleted', deletedUser });
    } else {
      res.status(404).json({ message: 'User was not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};
