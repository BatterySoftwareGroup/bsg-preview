// Publication order: newest year first; within a year, the order the papers are listed in
// src/data/publications.yaml (getCollection returns them sorted by id, which looks random).
import raw from './data/publications.yaml?raw';

const rank = new Map([...raw.matchAll(/^- id: (\S+)/gm)].map((m, i) => [m[1], i]));

export const sortPubs = <T extends { id: string; data: { year: number } }>(list: T[]) =>
  [...list].sort((a, b) => b.data.year - a.data.year || (rank.get(a.id) ?? 0) - (rank.get(b.id) ?? 0));
