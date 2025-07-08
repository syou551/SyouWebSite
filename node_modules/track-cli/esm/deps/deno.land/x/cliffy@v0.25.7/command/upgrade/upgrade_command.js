import * as dntShim from "../../../../../../_dnt.shims.js";
import { Command } from "../command.js";
import { ValidationError } from "../../flags/_errors.js";
import { EnumType } from "../types/enum.js";
export class UpgradeCommand extends Command {
    constructor({ provider, main, args, importMap }) {
        super();
        Object.defineProperty(this, "providers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.providers = Array.isArray(provider) ? provider : [provider];
        if (!this.providers.length) {
            throw new Error(`No upgrade provider defined!`);
        }
        this
            .description(() => `Upgrade ${this.getMainCommand().getName()} executable to latest or given version.`)
            .noGlobals()
            .type("provider", new EnumType(this.getProviderNames()))
            .option("-r, --registry <name:provider>", `The registry name from which to upgrade.`, {
            default: this.getProvider().name,
            hidden: this.providers.length < 2,
            value: (registry) => this.getProvider(registry),
        })
            .option("-l, --list-versions", "Show available versions.", {
            action: async ({ registry }) => {
                await registry.listVersions(this.getMainCommand().getName(), this.getVersion());
                dntShim.Deno.exit(0);
            },
        })
            .option("--version <version:string:version>", "The version to upgrade to.", { default: "latest" })
            .option("-f, --force", "Replace current installation even if not out-of-date.")
            .complete("version", () => this.getAllVersions())
            .action(async ({ registry, version: targetVersion, force }) => {
            const name = this.getMainCommand().getName();
            const currentVersion = this.getVersion();
            if (force || !currentVersion ||
                await registry.isOutdated(name, currentVersion, targetVersion)) {
                await registry.upgrade({
                    name,
                    main,
                    importMap,
                    from: currentVersion,
                    to: targetVersion,
                    args,
                });
            }
        });
    }
    async getAllVersions() {
        const { versions } = await this.getVersions();
        return versions;
    }
    async getLatestVersion() {
        const { latest } = await this.getVersions();
        return latest;
    }
    getVersions() {
        return this.getProvider().getVersions(this.getMainCommand().getName());
    }
    getProvider(name) {
        const provider = name
            ? this.providers.find((provider) => provider.name === name)
            : this.providers[0];
        if (!provider) {
            throw new ValidationError(`Unknown provider "${name}"`);
        }
        return provider;
    }
    getProviderNames() {
        return this.providers.map((provider) => provider.name);
    }
}
