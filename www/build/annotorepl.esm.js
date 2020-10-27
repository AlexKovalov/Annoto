import { b as bootstrapLazy } from './index-dd5fd80b.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-651847df.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["nn-tooltip",[[1,"nn-tooltip",{"text":[1],"for":[1]}]]]], options);
});
