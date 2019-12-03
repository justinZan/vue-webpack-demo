import axios from 'axios';

/**
 * 配置服务读取配置文件
 */
const configJson = './config.json';

export default {

    /**
     * 存储环境配置
     */
    async getConfig() {
        return axios.get(configJson).then((config: any) => {
            return config.data;
        })
    }
}
