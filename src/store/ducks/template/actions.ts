import { action } from 'typesafe-actions';
import { TemplateTypes, Template } from './types';

export const loadRequest = () => action(TemplateTypes.LOAD_REQUEST);

export const loadSuccess = (data: Template[]) => action(TemplateTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(TemplateTypes.LOAD_FAILURE);
