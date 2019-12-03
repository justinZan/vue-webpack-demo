interface Configs {
    [key: string]: any;
}

/**
 * App状态
 */
export class AppState {
    /**
     * 配置项
     * @type {Configs}
     * @memberof AppState
     */
    configs: Configs = {};
}