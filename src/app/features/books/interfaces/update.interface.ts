import { Budget } from './budget.class';

export interface Update {
  old: Budget;
  new: Budget;
}
