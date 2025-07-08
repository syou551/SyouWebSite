/// <reference types="node" />
export declare class SubdirectoryMoveError extends Error {
    constructor(src: string | URL, dest: string | URL);
}
interface MoveOptions {
    overwrite?: boolean;
}
/**
 * Moves a file or directory.
 *
 * @example
 * ```ts
 * import { move } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
 *
 * move("./foo", "./bar"); // returns a promise
 * ```
 */
export declare function move(src: string | URL, dest: string | URL, { overwrite }?: MoveOptions): Promise<undefined>;
/**
 * Moves a file or directory synchronously.
 * @example
 * ```ts
 * import { moveSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
 *
 * moveSync("./foo", "./bar"); // void
 * ```
 */
export declare function moveSync(src: string | URL, dest: string | URL, { overwrite }?: MoveOptions): void;
export {};
