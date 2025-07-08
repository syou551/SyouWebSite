import { Command } from "../command.js";
import type { Provider, Versions } from "./provider.js";
export interface UpgradeCommandOptions<TProvider extends Provider = Provider, TProviders extends TProvider | Array<TProvider> = TProvider | Array<TProvider>> {
    provider: TProviders;
    main?: string;
    importMap?: string;
    args?: Array<string>;
}
export declare class UpgradeCommand extends Command {
    private readonly providers;
    constructor({ provider, main, args, importMap }: UpgradeCommandOptions);
    getAllVersions(): Promise<Array<string>>;
    getLatestVersion(): Promise<string>;
    getVersions(): Promise<Versions>;
    private getProvider;
    private getProviderNames;
}
