type File = Blob & {
  readonly lastModified: number;
  readonly name: string;
};

const cover: File = new File([''], 'photo.jpg', { type: 'image/jpeg' });

export type Track = {
  name: string;
  label: string;
  feat: string;
  cover: File; // Здесь изменено на тип File
};
