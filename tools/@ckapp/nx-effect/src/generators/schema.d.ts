export interface Schema {
  path: string;
  name: string;
  skipTests?: boolean;
  skipFormat?: boolean;
}

export interface NormalizedSchema extends Schema {
  directory: string;
  filePath: string;
  projectName: string;
  projectSourceRoot: string | undefined;
  projectRoot: string;

  fileName: string;
  symbolName: string;
}