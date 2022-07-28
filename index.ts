import { readFileSync } from 'node:fs';
import { fileTypeFromBuffer, FileTypeResult } from 'file-type';

printFileType();

async function printFileType() {
  const file = readFileSync('random.zip');
  const type: FileTypeResult = await fileTypeFromBuffer(file);
  console.log(type);
}
