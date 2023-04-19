/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import iso6391 from 'iso-639-1';

export function getLanguageName(languageCode: string) {
  const languageName = iso6391.getName(languageCode);
  return languageName || 'Unknown Language';
}
//   console.log(getLanguageName('hi'));
