import type { Tree } from '@nx/devkit';
import { names, readProjectConfiguration } from '@nx/devkit';
import { determineArtifactNameAndDirectoryOptions } from '@nx/devkit/src/generators/artifact-name-and-directory-utils';
import type { NormalizedSchema, Schema } from '../schema';

export async function normalizeOptions(
  tree: Tree,
  options: Schema
): Promise<NormalizedSchema> {
  const {
    artifactName: name,
    directory,
    fileName,
    filePath,
    project: projectName,
  } = await determineArtifactNameAndDirectoryOptions(tree, {
    name: options.name,
    path: options.path,
    allowedFileExtensions: ['ts'],
    fileExtension: 'ts',
  });
  if (name.includes('/')) {
    throw new Error(
      `The component name '${name}' cannot contain a slash as it must be a valid JS symbol. Please use a different name.`
    );
  }

  const { className } = names(name);
  const symbolName = `${className}`;

  const { root, sourceRoot } = readProjectConfiguration(tree, projectName);

  return {
    ...options,
    name,
    projectName,
    directory,
    fileName,
    filePath,
    symbolName,
    projectSourceRoot: sourceRoot,
    projectRoot: root,
  };
}
