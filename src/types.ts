import type { Config } from "@pandacss/types";

export interface ModuleOptions extends Config {
  /**
   * The path of the Panda config file.
   * If the file does not exist, it will be created automatically.
   * @default '<buildDir>/panda.config.mjs'
   * @example 'panda.config.ts'
   */
  configPath?: string;
  /**
   * The path of the Panda CSS file.
   * If the file does not exist, it will be created automatically.
   * @default '<buildDir>/panda.css'
   * @example '@/assets/css/global.css'
   */
  cssPath?: string;
}
