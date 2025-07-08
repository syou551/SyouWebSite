// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.js";
import { join } from "../path/mod.js";
import { toPathString } from "./_util.js";
/**
 * Ensures that a directory is empty.
 * Deletes directory contents if the directory is not empty.
 * If the directory does not exist, it is created.
 * The directory itself is not deleted.
 * Requires the `--allow-read` and `--allow-write` flag.
 *
 * @example
 * ```ts
 * import { emptyDir } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
 *
 * emptyDir("./foo"); // returns a promise
 * ```
 */
export async function emptyDir(dir) {
    try {
        const items = [];
        for await (const dirEntry of dntShim.Deno.readDir(dir)) {
            items.push(dirEntry);
        }
        while (items.length) {
            const item = items.shift();
            if (item && item.name) {
                const filepath = join(toPathString(dir), item.name);
                await dntShim.Deno.remove(filepath, { recursive: true });
            }
        }
    }
    catch (err) {
        if (!(err instanceof dntShim.Deno.errors.NotFound)) {
            throw err;
        }
        // if not exist. then create it
        await dntShim.Deno.mkdir(dir, { recursive: true });
    }
}
/**
 * Ensures that a directory is empty.
 * Deletes directory contents if the directory is not empty.
 * If the directory does not exist, it is created.
 * The directory itself is not deleted.
 * Requires the `--allow-read` and `--allow-write` flag.
 *
 * @example
 * ```ts
 * import { emptyDirSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
 *
 * emptyDirSync("./foo"); // void
 * ```
 */
export function emptyDirSync(dir) {
    try {
        const items = [...dntShim.Deno.readDirSync(dir)];
        // If the directory exists, remove all entries inside it.
        while (items.length) {
            const item = items.shift();
            if (item && item.name) {
                const filepath = join(toPathString(dir), item.name);
                dntShim.Deno.removeSync(filepath, { recursive: true });
            }
        }
    }
    catch (err) {
        if (!(err instanceof dntShim.Deno.errors.NotFound)) {
            throw err;
        }
        // if not exist. then create it
        dntShim.Deno.mkdirSync(dir, { recursive: true });
    }
}
