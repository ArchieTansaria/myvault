import * as si from 'react-icons/si';
const keys = Object.keys(si);
console.log(keys.filter(k => k.toLowerCase().includes('aws') || k.toLowerCase().includes('amazon')));
