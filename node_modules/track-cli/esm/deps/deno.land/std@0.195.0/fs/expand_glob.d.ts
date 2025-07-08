/// <reference types="node" />
import { GlobOptions } from "../path/mod.js";
import { WalkEntry } from "./_util.js";
export interface ExpandGlobOptions extends Omit<GlobOptions, "os"> {
    root?: string;
    exclude?: string[];
    includeDirs?: boolean;
    followSymlinks?: boolean;
}
/**
 * Expand the glob string from the specified `root` directory and yield each
 * result as a `WalkEntry` object.
 *
 * See [`globToRegExp()`](../path/glob.ts#globToRegExp) for details on supported
 * syntax.
 *
 * @example
 * ```ts
 * import { expandGlob } from "https://deno.land/std@$STD_VERSION/fs/expand_glob.ts";
 * for await (const file of expandGlob("**\/*.ts")) {
 *   console.log(file);
 * }
 * ```
 */
export declare function expandGlob(glob: string | URL, { root, exclude, includeDirs, extended, globstar, caseInsensitive, followSymlinks, }?: ExpandGlobOptions): AsyncIterableIterator<WalkEntry>;
/**
 * Synchronous version of `expandGlob()`.
 *
 * @example
 * ```ts
 * import { expandGlobSync } from "https://deno.land/std@$STD_VERSION/fs/expand_glob.ts";
 * for (const file of expandGlobSync("**\/*.ts")) {
 *   console.log(file);
 * }
 * ```
 */
export declare function expandGlobSync(glob: string | URL, { root, exclude, includeDirs, extended, globstar, caseInsensitive, followSymlinks, }?: ExpandGlobOptions): IterableIterator<WalkEntry>;
