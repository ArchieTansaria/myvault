import * as si from 'react-icons/si';
const keys = Object.keys(si);
const findKey = (str) => keys.find(k => k.toLowerCase().includes(str.toLowerCase()));

console.log("AWS:", findKey("amazon"), findKey("aws"));
console.log("GCP:", findKey("googlecloud"), findKey("gcp"));
console.log("Shell:", findKey("shell"), findKey("bash"), findKey("terminal"));
