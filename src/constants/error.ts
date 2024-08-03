import { SnackMessage } from '../interfaces/snack-message.intrface';

export const UNKNOW_ERROR_MESSAGE = 'Unknow error. Please try again later.';

export const UNKNOWN_ERROR_SNACK_MESSAGE: SnackMessage = {
  message: UNKNOW_ERROR_MESSAGE,
  type: 'error',
};
