// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.js";
import * as path from "../path/mod.js";
import { ensureDir, ensureDirSync } from "./ensure_dir.js";
import { getFileInfoType, toPathString } from "./_util.js";
import { isWindows } from "../_util/os.js";
function resolveSymlinkTarget(target, linkName) {
    if (typeof target != "string")
        return target; // URL is always absolute path
    if (typeof linkName == "string") {
        return path.resolve(path.dirname(linkName), target);
    }
    else {
        return new URL(target, linkName);
    }
}
/**
 * Ensures that the link exists, and points to a valid file.
 * If the directory structure does not exist, it is created.
 *
 * @param target the source file path
 * @param linkName the destination link path
 */
export async function ensureSymlink(target, linkName) {
    const targetRealPath = resolveSymlinkTarget(target, linkName);
    const srcStatInfo = await dntShim.Deno.lstat(targetRealPath);
    const srcFilePathType = getFileInfoType(srcStatInfo);
    await ensureDir(path.dirname(toPathString(linkName)));
    const options = isWindows
        ? {
            type: srcFilePathType === "dir" ? "dir" : "file",
        }
        : undefined;
    try {
        await dntShim.Deno.symlink(target, linkName, options);
    }
    catch (error) {
        if (!(error instanceof dntShim.Deno.errors.AlreadyExists)) {
            throw error;
        }
    }
}
/**
 * Ensures that the link exists, and points to a valid file.
 * If the directory structure does not exist, it is created.
 *
 * @param target the source file path
 * @param linkName the destination link path
 */
export function ensureSymlinkSync(target, linkName) {
    const targetRealPath = resolveSymlinkTarget(target, linkName);
    const srcStatInfo = dntShim.Deno.lstatSync(targetRealPath);
    const srcFilePathType = getFileInfoType(srcStatInfo);
    ensureDirSync(path.dirname(toPathString(linkName)));
    const options = isWindows
        ? {
            type: srcFilePathType === "dir" ? "dir" : "file",
        }
        : undefined;
    try {
        dntShim.Deno.symlinkSync(target, linkName, options);
    }
    catch (error) {
        if (!(error instanceof dntShim.Deno.errors.AlreadyExists)) {
            throw error;
        }
    }
}
