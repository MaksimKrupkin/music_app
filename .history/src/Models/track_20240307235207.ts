type File = Blob & {
  readonly lastModified: number;
  readonly name: string;
};

const photoFile: File = new File([''], 'photo.jpg', { type: 'image/jpeg' });
export type User = {
  name: string;
  label: string;
  feat: string;
  role: string;
};
