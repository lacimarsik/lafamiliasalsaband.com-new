export interface Concert {
  /** ISO date, or a season label for undated gigs */
  date: string;
  title: string;
  place: string;
  /** ISO 3166 country code when abroad */
  country?: 'DE';
  note?: string;
}

/**
 * Full performance history, newest first. Add upcoming gigs here too —
 * the page splits upcoming/past by comparing against the build date.
 */
export const concerts: Concert[] = [
  { date: '2026-01-24', title: 'Welcome New Year — Salsa & Bachata party', place: 'Prague' },
  { date: '2025-09-02', title: '10th Anniversary Celebration — Tančírna na Gauči by Bohemian Salsa', place: 'Prague', note: 'free entry' },
  { date: '2025-08-16', title: 'Caribbean Party — náměstí', place: 'Liberec' },
  { date: '2025-08-07', title: 'River Rink Karlín — with DJ Lole & Ksenia Motion', place: 'Prague' },
  { date: '2025-07-19', title: 'Mundo Latino — Familia duo feat. Elinor Marsi', place: 'Vratislavice nad Nisou' },
  { date: '2025-07-18', title: 'Benešov City Live festival — náměstí', place: 'Benešov' },
  { date: '2025-07-05', title: 'Baldauf Villa', place: 'Marienberg', country: 'DE' },
  { date: '2025-07-03', title: 'Sabor Latino, Náměstí Republiky — Familia duo feat. Elinor Marsi', place: 'Prague' },
  { date: '2025-06-12', title: 'River Rink Karlín — with DJ Lole & Ksenia Motion', place: 'Prague' },
  { date: '2025-05-30', title: 'Stodola Kobylisy', place: 'Prague' },
  { date: '2025-03-08', title: 'Private event', place: 'Luhačovice' },
  { date: '2025-01-25', title: 'Dame Dos Con Tres Vol. 4 — Winter Edition, Unitaria Hall', place: 'Prague' },
  { date: '2024-09-19', title: 'Live Music Party with DJ Lole — Terasa Smíchov', place: 'Prague' },
  { date: '2024-08-22', title: 'Latin Summer Parties — RiverRink Karlín, with Salsaholics, DanceDifferent, Ksenia Chkalova, DJ Lole & DJ Lusithano', place: 'Prague' },
  { date: '2024-08-17', title: 'Caribbean Party by Salsa MaJa — nám. Dr. E. Beneše', place: 'Liberec' },
  { date: '2024-06-20', title: 'Velká letní tančírna Familia y Familia — Výstaviště', place: 'Mladá Boleslav' },
  { date: '2024-04-13', title: 'Easter Party — Slovenský dům', place: 'Prague' },
  { date: '2024-02-07', title: 'Salsa & Bachata party — Café V lese', place: 'Prague' },
  { date: '2024-01-14', title: 'Dame Dos Con Tres Vol. 3 Daylight — V-Life, Opletalova', place: 'Prague' },
  { date: '2023-12-06', title: 'Cuban Salsa Musicality Workshop — DanceDifferent', place: 'Prague' },
  { date: '2023-12-01', title: '1st Advent Concert — Slovenský dům', place: 'Prague' },
  { date: '2023-08-23', title: 'Salsa & Bachata party — Kamina Boat, Dvořákovo nábřeží', place: 'Prague' },
  { date: '2023-08-19', title: 'Caribbean Party by Salsa MaJa — nám. Dr. E. Beneše', place: 'Liberec' },
  { date: '2023-07-29', title: 'Golf Sokolov', place: 'Sokolov' },
  { date: '2023-06-17', title: 'Cuban Festival — Laguna Gonzalez', place: 'Großolbersdorf', country: 'DE' },
  { date: '2023-04-28', title: 'Dame Dos Con Tres Vol. 2 — KD Domovina, Holešovice', place: 'Prague' },
  { date: '2023-01-28', title: 'Dame Dos Con Tres — Emauzy', place: 'Prague' },
  { date: '2022-09-26', title: 'Party with DJ Lole — River Rink Karlín', place: 'Prague' },
  { date: '2022-09-17', title: 'Private wedding', place: 'Praha-Květnice' },
  { date: '2022-09-10', title: 'Vivat Klánovice — KC Nová Beseda', place: 'Prague' },
  { date: '2022-08-26', title: 'EtnoFest — nám. Jiřího z Poděbrad', place: 'Prague' },
  { date: '2022-08-13', title: 'Caribbean Party by Salsa MaJa — nám. Dr. E. Beneše', place: 'Liberec' },
  { date: '2022-07-23', title: 'Fiesta De Las Familias', place: 'Frankenberg', country: 'DE' },
  { date: '2022-07-02', title: 'Salsa Party — Kemp Císařská louka', place: 'Prague' },
  { date: '2021-09-17', title: 'Salsa Party open-air — Kemp Císařská louka', place: 'Prague' },
  { date: '2021-09-03', title: 'Latino Mejdan MaJa', place: 'Liberec' },
  { date: '2020-08-29', title: 'Festival Barevná Devítka — open-air', place: 'Prague' },
  { date: 'Summer 2020', title: 'Online music workshop — Lavicosa Salsa Stiftung', place: 'online' },
  { date: '2019-12-14', title: 'Dance4Water Christmas party — Dancers Club', place: 'Prague' },
  { date: '2019-08-10', title: 'Penzion Na kraji lesa — open-air', place: 'Valašské Meziříčí' },
  { date: '2019-08-09', title: 'Music camp — open-air', place: 'Grünheide', country: 'DE' },
  { date: '2019-07-13', title: 'Tančírna Česká Lípa — open-air', place: 'Česká Lípa' },
  { date: '2019-06-16', title: 'Říční lázně Radotín — open-air', place: 'Prague' },
  { date: '2019-05-22', title: 'Food festival Zažij Mexiko', place: 'Praha-Smíchov' },
  { date: '2019-04-26', title: 'Dance4Water Spring Party — Prague Dance Center', place: 'Prague' },
  { date: '2018-12-14', title: 'Dance4Water Christmas party — Prague Dance Center', place: 'Prague' },
  { date: '2018-07-28', title: 'Tančírna Česká Lípa — open-air', place: 'Česká Lípa' },
  { date: '2018-06-13', title: 'Festival Zažij Mexiko — open-air', place: 'Praha-Anděl' },
  { date: '2018-05-24', title: 'Mexicali festival Mercado Fiesta de Mayo — open-air', place: 'Prague' },
  { date: '2018-05-11', title: 'Hotel NYX', place: 'Prague' },
  { date: '2018-02-18', title: 'Studio Paměť', place: 'Prague' },
  { date: '2017-12-16', title: 'Dance4Water Christmas party', place: 'Praha-Hybernská' },
  { date: '2017-09-23', title: 'Festival Mladá Smetanova Litomyšl', place: 'Litomyšl' },
  { date: '2017-09-22', title: 'Festival Mladá Smetanova Litomyšl', place: 'Litomyšl' },
  { date: '2017-06-04', title: 'Festival Duhová Bouře', place: 'Liberec' },
  { date: '2017-05-07', title: 'Studio Paměť', place: 'Prague' },
  { date: '2017-04-14', title: 'Rock Café Contest Majáles', place: 'Prague' },
  { date: '2017-02-19', title: 'Studio Paměť', place: 'Prague' },
  { date: '2016-12-12', title: 'Dance4Water Christmas party — K4', place: 'Praha-Celetná' },
  { date: '2016-12-11', title: 'Studio Paměť', place: 'Prague' },
  { date: '2016-06-24', title: 'Wedding — open-air', place: 'Praha-Trója' },
  { date: '2016-05-15', title: 'Studio Paměť', place: 'Prague' },
  { date: '2016-05-05', title: 'Křest kalendáře českých osobností — PM club', place: 'Prague' },
  { date: '2016-04-24', title: 'Studio Paměť', place: 'Prague' },
  { date: '2016-03-20', title: 'Studio Paměť', place: 'Prague' },
  { date: '2016-02-26', title: 'Dance4Water International congress', place: 'Praha-Opletalova' },
  { date: '2016-02-21', title: 'Studio Paměť', place: 'Prague' },
  { date: '2016-01-17', title: 'Studio Paměť', place: 'Prague' },
  { date: '2015-12-20', title: 'Studio Paměť', place: 'Prague' },
  { date: '2015-12-13', title: 'Dance4Water Christmas party', place: 'Praha-Celetná' },
];

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

export function yearOf(concert: Concert): string {
  return isoDate.test(concert.date) ? concert.date.slice(0, 4) : concert.date.slice(-4);
}

export function formatDate(concert: Concert): string {
  if (!isoDate.test(concert.date)) return concert.date;
  const [y, m, d] = concert.date.split('-');
  return `${Number(d)}. ${Number(m)}. ${y}`;
}

export function upcoming(today: Date): Concert[] {
  const cutoff = today.toISOString().slice(0, 10);
  return concerts
    .filter((c) => isoDate.test(c.date) && c.date >= cutoff)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function past(today: Date): Concert[] {
  const cutoff = today.toISOString().slice(0, 10);
  return concerts.filter((c) => !isoDate.test(c.date) || c.date < cutoff);
}
