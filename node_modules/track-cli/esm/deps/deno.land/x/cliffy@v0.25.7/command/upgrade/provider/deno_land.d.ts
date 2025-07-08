import { Provider, Versions } from "../provider.js";
export interface DenoLandProviderOptions {
    name?: string;
}
export declare class DenoLandProvider extends Provider {
    name: string;
    private readonly repositoryUrl;
    private readonly registryUrl;
    private readonly moduleName?;
    constructor({ name }?: DenoLandProviderOptions);
    getVersions(name: string): Promise<Versions>;
    getRepositoryUrl(name: string): string;
    getRegistryUrl(name: string, version: string): string;
}
