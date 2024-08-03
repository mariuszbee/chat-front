import { makeVar } from '@apollo/client';
import { SnackMessage } from '../interfaces/snack-message.intrface';

export const snackVar = makeVar<SnackMessage | null>(null);
