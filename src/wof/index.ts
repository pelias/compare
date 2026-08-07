import XX_EXCEPTIONS from './xx-exceptions';
import XY_EXCEPTIONS from './xy-exceptions';

export default (gid: string, cc?: string): string | undefined => {
  const parts = gid.split(':');
  const id = parts[parts.length - 1];
  const placetype = parts[1];
  let countryCode = cc;
  if (placetype === 'continent'
    || placetype === 'empire'
    || placetype === 'ocean'
    || placetype === 'planet'
    || placetype === 'timezone'
    || XY_EXCEPTIONS.has(id)
  ) {
    countryCode = 'xy';
  } else if (placetype === 'disputed' || XX_EXCEPTIONS.has(id)) {
    countryCode = 'xx';
  }

  if (!countryCode) {
    return undefined;
  }

  const type = parts[1] === 'postalcode' && countryCode !== 'xx' && countryCode !== 'xy' ? 'postalcode' : 'admin';
  let url = `https://github.com/whosonfirst-data/whosonfirst-data-${type}-${countryCode}/tree/master/data`;
  for (let idx = 0; idx < id.length; idx += 3) {
    url += `/${id.substring(idx, idx + 3)}`;
  }
  return `${url}/${id}.geojson`;
};
