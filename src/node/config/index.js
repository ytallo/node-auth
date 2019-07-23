import config from 'config';

const cfg = { ...config, ...process.env };

const get = name => cfg[name];
const has = name => cfg[name] !== undefined;
const getBoolean = name => cfg[name] === 'true' || cfg[name] === true;

export default { get, has, getBoolean };
