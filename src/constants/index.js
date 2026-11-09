import {
  BedDouble,
  Bus,
  FileCheck2,
  Headphones,
  ListChecks,
  Plane,
} from 'lucide-vue-next';

export const serviceOptions = [
  { label: 'Hotel Mekkah', icon: BedDouble },
  { label: 'Hotel Madinah', icon: BedDouble },
  { label: 'Visa', icon: FileCheck2 },
  { label: 'Transportasi', icon: Bus },
  { label: 'Handling', icon: Headphones },
  { label: 'Tiket Pesawat', icon: Plane },
  { label: 'BRN', icon: ListChecks },
];

export const servicePresets = [
  { label: 'Hotel Mekkah + Madinah', icon: BedDouble, services: ['Hotel Mekkah', 'Hotel Madinah'] },
  { label: 'Visa + handling', icon: FileCheck2, services: ['Visa', 'Handling'] },
  { label: 'Semua layanan', icon: ListChecks, services: serviceOptions.map((item) => item.label) },
];

export const paxSuggestions = [
  { label: '2', value: 2 },
  { label: '4', value: 4 },
  { label: '10+', value: 10 },
];

export const noteSuggestions = [
  'Berangkat dari Makassar',
  'Rombongan keluarga',
  'Tanggal fleksibel',
  'Butuh konsultasi',
];
