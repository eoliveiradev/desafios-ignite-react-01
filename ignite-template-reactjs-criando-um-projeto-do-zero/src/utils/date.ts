import { format } from 'date-fns';

export const formatDate = (date: string | Date): string => {
  const dateObject = new Date(date);

  return format(dateObject, 'dd MMM yyyy');
};
