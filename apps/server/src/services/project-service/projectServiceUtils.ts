import { MaybeString, ProjectFile } from 'ontime-types';

import { access, rename, stat } from 'fs/promises';
import { join } from 'path';

import { resolveProjectsDirectory } from '../../setup/index.js';
import { getFilesFromFolder, removeFileExtension } from '../../utils/fileManagement.js';

import { filterProjectFiles } from './projectFileUtils.js';

/**
 * Handles the upload of a new project file
 * @param filePath
 * @param name
 */
export async function handleUploaded(filePath: string, name: string) {
  const newFilePath = join(resolveProjectsDirectory, name);
  await rename(filePath, newFilePath);
}

/**
 * Asynchronously retrieves and returns an array of project files from the 'uploads' folder.
 * Each file in the 'uploads' folder is checked, and only those with a '.json' extension are processed.
 * For each qualifying file, its metadata is retrieved, including filename, creation time, and last modification time.
 *
 * @returns {Promise<Array<ProjectFile>>} A promise that resolves to an array of ProjectFile objects,
 *                                        each representing a file in the 'uploads' folder with its metadata.
 *                                        The metadata includes the filename, creation or overwriting time (updatedAt)
 *
 * @throws {Error} Throws an error if there is an issue in reading the directory or fetching file statistics.
 */
export async function getProjectFiles(): Promise<ProjectFile[]> {
  const allFiles = await getFilesFromFolder(resolveProjectsDirectory);
  const filteredFiles = filterProjectFiles(allFiles);

  const projectFiles: ProjectFile[] = [];
  for (const file of filteredFiles) {
    const filePath = join(resolveProjectsDirectory, file);
    const stats = await stat(filePath);

    projectFiles.push({
      filename: removeFileExtension(file),
      updatedAt: stats.mtime.toISOString(),
    });
  }

  return projectFiles;
}

/**
 * Checks whether a project of a given name exists
 * @param name
 */
export async function doesProjectExist(name: string): Promise<MaybeString> {
  try {
    const projectFilePath = getPathToProject(name);
    await access(projectFilePath);
    return projectFilePath;
  } catch (_) {
    return null;
  }
}

/**
 * Returns the absolute path to a project file
 */
export function getPathToProject(name: string): string {
  return join(resolveProjectsDirectory, name);
}