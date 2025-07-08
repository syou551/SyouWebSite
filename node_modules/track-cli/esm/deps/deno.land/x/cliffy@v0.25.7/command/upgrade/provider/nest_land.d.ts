import { Provider, Versions } from "../provider.js";
export interface NestLandProviderOptions {
    name?: string;
}
export declare class NestLandProvider extends Provider {
    name: string;
    private readonly repositoryUrl;
    private readonly registryUrl;
    private readonly moduleName?;
    constructor({ name }?: NestLandProviderOptions);
    getVersions(name: string): Promise<Versions>;
    getRepositoryUrl(name: string): string;
    getRegistryUrl(name: string, version: string): string;
}
