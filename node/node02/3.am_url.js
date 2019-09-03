const url = require('url');
// let string='https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
// const myURL =url.parse(string);
// console.log(myURL)

let obj={
  protocol: 'https:',
  slashes: true,
  auth: 'user:pass',
  host: 'sub.example.com:8080',
  port: '8080',
  hostname: 'sub.example.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash' }
  console.log(url.format(obj))