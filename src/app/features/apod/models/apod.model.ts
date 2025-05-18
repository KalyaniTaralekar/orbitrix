export interface Apod {
  date: string;
  explanation: string;
  media_type: 'image' | 'video' | 'other';
  service_version: string;
  title: string;
  url: string;
  hdurl?: string;
  copyright?: string;
}
