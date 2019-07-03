/**
 * Action types
 */
export enum TemplateTypes {
  LOAD_REQUEST = '@template/LOAD_REQUEST',
  LOAD_SUCCESS = '@template/LOAD_SUCCESS',
  LOAD_FAILURE = '@template/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Template {
  id: number
  name: string
}

/**
 * State type
 */
export interface TemplateState {
  readonly data: Template[]
  readonly loading: boolean
  readonly error: boolean
}
