export interface Versions {
    latest: string;
    versions: Array<string>;
}
export interface UpgradeOptions {
    name: string;
    from?: string;
    to: string;
    args?: Array<string>;
    main?: string;
    importMap?: string;
}
export declare abstract class Provider {
    abstract readonly name: string;
    protected readonly maxListSize: number;
    private maxCols;
    abstract getVersions(name: string): Promise<Versions>;
    abstract getRepositoryUrl(name: string): string;
    abstract getRegistryUrl(name: string, version: string): string;
    isOutdated(name: string, currentVersion: string, targetVersion: string): Promise<boolean>;
    upgrade({ name, from, to, importMap, main, args }: UpgradeOptions): Promise<void>;
    listVersions(name: string, currentVersion?: string): Promise<void>;
    protected printVersions(versions: Array<string>, currentVersion?: string, { maxCols, indent }?: {
        maxCols?: number;
        indent?: number;
    }): void;
}
