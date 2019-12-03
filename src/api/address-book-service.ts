import store from '@/store';
import Axios from 'axios';

/**
 * 通讯录服务
 * @author Justin
 */

export default {

    async getAddressBook(): Promise<any> {
        const url = `${store.getters.configs.mockUrl}`+'getUserInfo'
        return await Axios.get(url)
    }
}