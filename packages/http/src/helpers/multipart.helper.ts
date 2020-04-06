export const processMultipartBody = (body: string, boundary: string) => {
  body.split(boundary);
  throw new Error('Multipart response parsing is not implemented yet.');
};

export const getBoundaryFromContentTypeHeader = (header: string[]) => {
  const boundary = header.find(element => element.startsWith('boundary='))?.replace('boundary=', '');
  if (!boundary) {
    throw new Error('Could not find multipart boundary in Content-Type header.');
  }
  return boundary;
};
