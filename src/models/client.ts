import { BaseResource } from './base';

export interface Client extends BaseResource {
    name: string;
    cnpj: string;
}
