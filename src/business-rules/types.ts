// export interface RepositoryDependencies {
//  RestClient: {}
// }

export interface TemplateRepositoryType {
  fetchPosts: () => Promise<any>
}

export interface TemplateDomainType {
  fetchPosts: () => Promise<any>
}

export interface RepositoryType {
  templateRepository: TemplateRepositoryType
}

export interface DomainType {
  templateDomain: TemplateDomainType
}

export interface Injector {
  templateDomain: TemplateDomainType
}
