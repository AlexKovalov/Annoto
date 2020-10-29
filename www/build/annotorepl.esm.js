import { b as bootstrapLazy } from './index-5c2e9815.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-8e1ed2ae.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["nn-tooltip",[[1,"nn-tooltip",{"text":[1],"for":[1]}]]]], options);
});
