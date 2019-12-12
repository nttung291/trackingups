const routes = require('next-routes')();

//
// Because of awesome Next.js, You don't need to add routes for all pages.
// Every file on Pages folder basically has route as they named.
// (index.js => /, about.js => /about, ...etc.)
//
// If you want to change url (for SEO or put different path), please add your route below.
// for more info, please look at https://github.com/Sly777/ran/blob/master/docs/Routing.m`d
//
//
// Please add your route between of comments
//
// ------------ ROUTES ---------------
routes.add('index', '/');
routes.add('auth/login', '/login');
routes.add('auth/logout', '/logout');


routes.add('users/index', '/users').add('users/create', '/users/create').add('users/edit', '/users/edit/:id').add('users/restore', 'users/restore');
routes.add('articles/index', '/articles').add('articles/detail', '/articles/detail/:id');
routes.add('configs/index', '/configs');
routes.add('configs/language', '/language');
routes.add('sites/index', '/sites').add('sites/create', '/site/create').add('sites/edit', '/sites/edit/:id').add('sites/restore', 'sites/restore');
routes.add('campaign/detail', '/campaign/detail/:id').add('campaign/index', '/campaign').add('campaign/create', '/campaign/create').add('campaign/edit', '/campaign/edit/:id').add('campaign/restore', 'campaign/restore');
routes.add('domain/index', '/domain').add('domain/create', '/domain/create').add('domain/edit', '/domain/edit/:id').add('domain/restore', 'domain/restore');
routes.add('category/index', '/category').add('category/create', '/category/create').add('category/edit', '/category/edit/:id').add('category/restore', 'category/restore');
routes.add('group/create', '/group/create');
routes.add('error/index', '/error');


// ------------ ROUTES ---------------
//
//

module.exports = routes;
