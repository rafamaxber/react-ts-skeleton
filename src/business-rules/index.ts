import { TemplateRepositoryType, TemplateDomainType } from './types';
import createTemplateRepository from './repositories/template';
import createTemplateDomain from './domains/template';

const templateRepository: TemplateRepositoryType = createTemplateRepository();
const templateDomain: TemplateDomainType = createTemplateDomain({ templateRepository });

export default {
  templateDomain,
};
