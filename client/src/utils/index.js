import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  try {
    // Convert the photo to a Blob or ArrayBuffer if it's not already
    const response = await fetch(photo);
    const blob = await response.blob();

    // Use FileSaver to save the Blob as a file
    FileSaver.saveAs(blob, `download-${_id}.jpg`);
  } catch (error) {
    console.error('Error downloading image:', error);
  }
}
