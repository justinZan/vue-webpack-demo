export enum Path {
    // 首页
    HOME = "/"
}

export enum RouterName {
    // 首页
    Home = "Home"
}

export const RouterPrefix = (routerName: string) => {
    return `Router.$(routerName)`
}
