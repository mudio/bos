/**
 * Main Process - 程序配置管理
 *
 * @file WindowManager.js
 * @author mudio(job.mudio@gmail.com)
 */

import path from 'path';
import ConfigStore from 'configstore';
import {REGION_BJ, REGION_GZ, REGION_SU, REGION_HK, REGION_HK02} from '../utils/region';

const bcedir = path.join('..', '.bce');
const config = new ConfigStore(bcedir, {}, {globalConfigPath: true});

const {server, credentials, endpoint} = config.all;

config.all = {
    credentials,
    endpoint: Object.assign(
        {
            [REGION_BJ]: 'https://bj.bcebos.com',
            [REGION_GZ]: 'https://gz.bcebos.com',
            [REGION_SU]: 'https://su.bcebos.com',
            [REGION_HK]: 'https://hk.bcebos.com',
            [REGION_HK02]: 'https://hk-2.bcebos.com/'
        },
        endpoint
    ),
    server: Object.assign(
        {feedURL: 'https://bce-bos-client.bj.bcebos.com/releases'},
        server
    )
};

export default config;
