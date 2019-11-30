export enum Path {
    // 首页
    HOME = "/",
    // 通讯录
    AddressBook = "address-book",
    // 常用联系人
    CommonLink = "common-link"
}

export enum RouterName {
    // 首页
    Home = "Home",
    // 通讯录
    AddressBook = "AddressBook",
    // 常用联系人
    CommonLink = "CommonLink"
}

export const RouterPrefix = (routerName: string) => {
    return `Router.$(routerName)`
}
