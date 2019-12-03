import Axios from "axios"
import { Apptypes } from '@/store/types/app-types';
const configPath = 'config.json';

/**
 * 配置文件初始化
 */

const Config = async (store: any) => {
    const configs = await Axios.get(configPath);
    await store.dispatch(Apptypes.actions.SET_CONFIGS, configs.data);
}

export default Config;
