// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.js";
import * as path from "../path/mod.js";
import { basename, normalize } from "../path/mod.js";
/**
 * Test whether `src` and `dest` resolve to the same location
 * @param src src file path
 * @param dest dest file path
 */
export function isSamePath(src, dest) {
    src = toPathString(src);
    dest = toPathString(dest);
    return path.resolve(src) === path.resolve(dest);
}
/**
 * Test whether or not `dest` is a sub-directory of `src`
 * @param src src file path
 * @param dest dest file path
 * @param sep path separator
 */
export function isSubdir(src, dest, sep = path.SEP) {
    if (src === dest) {
        return false;
    }
    src = toPathString(src);
    const srcArray = src.split(sep);
    dest = toPathString(dest);
    const destArray = dest.split(sep);
    return srcArray.every((current, i) => destArray[i] === current);
}
/**
 * Get a human readable file type string.
 *
 * @param fileInfo A FileInfo describes a file and is returned by `stat`,
 *                 `lstat`
 */
export function getFileInfoType(fileInfo) {
    return fileInfo.isFile
        ? "file"
        : fileInfo.isDirectory
            ? "dir"
            : fileInfo.isSymlink
                ? "symlink"
                : undefined;
}
/** Create WalkEntry for the `path` synchronously */
export function createWalkEntrySync(path) {
    path = toPathString(path);
    path = normalize(path);
    const name = basename(path);
    const info = dntShim.Deno.statSync(path);
    return {
        path,
        name,
        isFile: info.isFile,
        isDirectory: info.isDirectory,
        isSymlink: info.isSymlink,
    };
}
/** Create WalkEntry for the `path` asynchronously */
export async function createWalkEntry(path) {
    path = toPathString(path);
    path = normalize(path);
    const name = basename(path);
    const info = await dntShim.Deno.stat(path);
    return {
        path,
        name,
        isFile: info.isFile,
        isDirectory: info.isDirectory,
        isSymlink: info.isSymlink,
    };
}
/**
 * Convert a URL or string to a path
 * @param pathUrl A URL or string to be converted
 */
export function toPathString(pathUrl) {
    return pathUrl instanceof URL ? path.fromFileUrl(pathUrl) : pathUrl;
}
