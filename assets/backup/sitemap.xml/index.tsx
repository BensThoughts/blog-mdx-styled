import {GetServerSideProps} from 'next';
import fs from 'fs';
import path from 'path';

export default function SitemapXML() {
  return null;
};


const excludedRoutes: string[] = ['/playground'];

export const getServerSideProps: GetServerSideProps = async ({res}) => {
  const readManifestFile = (basePath: string) => {
    const routesManifestPath = path.join(basePath + '/.next/server/pages-manifest.json');

    if (fs.existsSync(routesManifestPath)) {
      const rawJson = fs.readFileSync(routesManifestPath);
      return JSON.parse(rawJson.toString());
    } else {
      return null;
    }
  };

  const isNextInternalUrl = (path: string): boolean => {
    return new RegExp(/[^\/]*^.[_]|(?:\[)/g).test(path);
  };

  const getPathsFromManifest = (manifest: any, basePath: string, host: string): Url[] => {
    let routes: string[] = [];

    for (const [route] of Object.entries(manifest)) {
      if (!isNextInternalUrl(route)) {
        routes = routes.concat(route);
      }
    }

    const sitemapUrls: Url[] = [];
    routes.forEach((route) => {
      sitemapUrls.push({host: host, route: route});
    });

    return sitemapUrls;
  };

  const getPathsFromBuildFolder = (dir: string, urlList: Url[], host: string, basePath: string): Url[] => {
    const files: string[] = fs.readdirSync(dir);
    urlList = urlList || [];

    files.forEach((file) => {
      if (fs.statSync(dir + file).isDirectory()) {
        urlList = getPathsFromBuildFolder(dir + file + '/', urlList, host, basePath);
      } else {
        if (path.extname(file) == '.json') {
          let route = path.join(dir + file.substring(0, file.length - 5));
          route = route.replace(basePath, '/');
          urlList.push({host: host, route: route});
        }
      };
    });

    return urlList;
  };

  const getUrlElement = ({host, route, date}: Url): string => {
    if (date) {
      return `<url><loc>${host}${route}</loc><lastmod>${date}</lastmod></url>`;
    } else return `<url><loc>${host}${route}</loc></url>`;
  };

  const getSitemapXML = (urls: Url[]): string => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => getUrlElement(url)).join('')}
    </urlset>`;

  type Url = {
    host: string;
    route: string;
    date?: Date;
  };

  const basePath: string = process.cwd();
  const routesManifest: object = readManifestFile(basePath);
  const host: string = 'https://bensthoughts.dev';

  let routes: Url[] = getPathsFromManifest(routesManifest, basePath, host);
  const pagePaths = path.join(basePath + '/.next/server/pages/');
  routes = routes.concat(getPathsFromBuildFolder(pagePaths, [], host, pagePaths));

  routes = routes.filter((el) => !excludedRoutes.includes(el.route));

  const sitemap: string = getSitemapXML(routes);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return {props: {}};
};


