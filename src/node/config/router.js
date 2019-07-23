import PowerRouter from 'express-power-router';

const powerRouter = PowerRouter();

export const RestController = path => clazz => {
  const config = clazz.prototype.httpConfig || [];

  clazz.route = powerRouter.createRouter(path);
  config.forEach(({ method, path, callback, options }) =>
    clazz.route.internalAdd(method, path, callback, options)
  );
};

function decorator(method, clazz, callback, path, options) {
  clazz.httpConfig = clazz.httpConfig || [];
  clazz.httpConfig.push({ method, path, callback, options });
}

export const GET = (path, options) => (clazz, _, method) => decorator('get', clazz, method.value, path, options);
export const POST = (path, options) => (clazz, _, method) => decorator('post', clazz, method.value, path, options);
export const PUT = (path, options) => (clazz, _, method) => decorator('put', clazz, method.value, path, options);
export const DELETE = (path, options) => (clazz, _, method) => decorator('delete', clazz, method.value, path, options);

export default powerRouter;
