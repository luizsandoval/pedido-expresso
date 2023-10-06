import { Apis } from '@/constants/apis';
import { User } from '@/models/user';

import { BaseService } from './base';

export const { get } = BaseService<User>(Apis.Users);
