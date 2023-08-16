const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 8090);

app.use((req, res, next) => {
  console.log(`${req.url} - ${req.method}`);
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('Get / 요청에서만 실행됩니다.');
    next();
  },
  (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
