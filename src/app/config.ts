import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export const BASE_URL = environment.base_url;
export const BASE_URL_TOKEN = new InjectionToken('BASE_URL');
