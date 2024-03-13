type File = Blob & {
  readonly lastModified: number;
  readonly name: string;
};
type AudioFile = File & {
  readonly type: 'audio/mp3' | 'audio/aac';
};

export type Track = {
  name: string;
  label: string;
  feat: string;
  cover: File;
  audio: AudioFile;
};
