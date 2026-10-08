const downloadForm = document.getElementById('download-form');
const filenameInput = document.getElementById('task-filename');
const downloadButton = downloadForm.querySelector('button');
const downloadStatus = document.getElementById('download-status');
const bucket = 'giotto-events-efpl-download';

downloadForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (downloadButton.disabled) return;

  const name = filenameInput.value.trim().replace(/\.json$/i, '').trim();
  if (!name || name === '.' || name === '..' || /[\\/]/.test(name)) {
    downloadStatus.textContent = 'Enter a file name, such as team-1, rather than a URL or folder path.';
    filenameInput.focus();
    return;
  }

  const filename = `${name}.json`;
  const encodedName = encodeURIComponent(filename);
  downloadButton.disabled = true;
  downloadStatus.textContent = 'Downloading…';

  try {
    let response;
    try {
      response = await fetch(`https://storage.googleapis.com/${bucket}/${encodedName}`);
    } catch {
      // The JSON API supports CORS even when the direct object URL does not.
      response = await fetch(`https://storage.googleapis.com/download/storage/v1/b/${bucket}/o/${encodedName}?alt=media`);
    }

    if (!response.ok) {
      downloadStatus.textContent = response.status === 404
        ? 'File not found. Check the file name and try again.'
        : 'Could not download this file. Check the file name and try again.';
      return;
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    downloadStatus.textContent = `Download started: ${filename}`;
  } catch {
    downloadStatus.textContent = 'Could not download the file. Check your connection and try again.';
  } finally {
    downloadButton.disabled = false;
  }
});
