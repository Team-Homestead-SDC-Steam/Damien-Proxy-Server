const dev = true;

const URLs = {
  gamereviews: 'http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3001',
  description: 'http://ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3005',
  reviews: 'http://44.233.13.178:3002',
  reviewcount: 'http://44.233.13.178:3002',
  tags: 'http://44.233.13.178:3006',
  dlc: 'localhost:3007',
  related: 'localhost:3007',
  media: 'http://ec2-18-188-192-44.us-east-2.compute.amazonaws.com:3004',
  system: 'http://localhost:3008'
};

if (dev) {
  URLs.reviews = 'localhost:3002';
  URLs.tags = 'localhost:3006';
}

module.exports = URLs;
