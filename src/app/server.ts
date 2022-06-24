import bootstrap from './main';

const port = process.env.PORT || 3000;

bootstrap.app.listen(port, () => {
  console.log(`[server]: Server started at https://localhost:${port}`);
});
