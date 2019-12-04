import store from '@/store';
import Axios from 'axios';
import * as httpclient from 'justin-http/src/http-client/httpclient'

/**
 * 通讯录服务
 * @author Justin
 */

export default {

    async getAddressBook(): Promise<any> {
        const url = `${store.getters.configs.mockUrl}` + 'getUserInfo'
        // return await Axios.get(url)
        return await httpclient.getPromise(url);
    }
}