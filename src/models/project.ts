export interface ProjectsInteface {
  id          : string;
  url         : string;
  name        : string;
  slug        : string[];
  image       : string;
  github?     : string;
  description?: string;
}
