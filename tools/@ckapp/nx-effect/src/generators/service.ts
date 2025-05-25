import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  joinPathFragments,
} from '@nx/devkit';
import * as path from 'path';
import { Schema } from './schema';
import { normalizeOptions } from './lib';

export async function serviceGenerator(tree: Tree, options: Schema) {
  const projectRoot = `libs/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default serviceGenerator;

export async function componentGenerator(tree: Tree, rawOptions: Schema) {
  const options = await normalizeOptions(tree, rawOptions);

  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files'),
    options.directory,
    {
      name: options.name,
      fileName: options.fileName,
      symbolName: options.symbolName,
      tpl: '',
    }
  );

  if (options.skipTests) {
    const pathToSpecFile = joinPathFragments(
      options.directory,
      `${options.fileName}.spec.ts`
    );

    tree.delete(pathToSpecFile);
  }

  if (!options.skipFormat) {
    await formatFiles(tree);
  }
}
