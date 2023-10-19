import { notification } from 'antd';

export const handleNotiError = (error) => {
  notification.error({
    message:
      typeof error === 'string'
        ? error
        : error?.data?.error?.message || 'Internal error',
  });
};

export default handleNotiError;
