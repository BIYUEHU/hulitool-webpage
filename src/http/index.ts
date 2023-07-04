import axios from "axios";
import { obj } from '../function';

const API_IAL: string = 'https://imlolicon.tk/api/';
const API_HULIAPI: string = 'https://api.imlolicon.tk/api/';

export const getHitokoto = () => {
    return axios.get(`${API_IAL}hitokoto/v2/`);
}

export const getSeimg = () => {
    return axios.get(`${API_IAL}seimg/v2/`);
}

export const getNetease = (data: obj) => {
    return axios.get(`${API_HULIAPI}netease`, { params: data });
}

export const getMcmotd = (data: obj) => {
    return axios.get(`${API_HULIAPI}${ data.type === 'be' ? 'motdpe' : 'motd' }`, { params: data });
}

export const getBili = (data: obj) => {
    const res = axios.get(`${API_HULIAPI}biligetv`, { params: data }),
        res2 = axios.get(`${API_HULIAPI}bilidlv`, { params: data });
    return [res, res2];
}

export const getBilicomponent = (data: obj) => {
    return axios.get(`${API_HULIAPI}component`, { params: data });
}

export const getSed = (data: obj) => {
    const res = axios.get(`${API_HULIAPI}sed`, { params: data });
    return res;
}

export const getQq = (data: obj) => {
    return axios.get(`${API_HULIAPI}qqget`, { params: data });
}

export const getTranslate = (data: obj) => {
    return axios.get(`${API_HULIAPI}fanyi`, { params: data });
}

export const getChat = (data: obj) => {
    return axios.get(`${API_HULIAPI}chat`, { params: data });
}

export const getStat = (id: string, type?: number) => {
    const total: string = `${API_HULIAPI}stat?op=query&name=`,
        day: string = `${API_HULIAPI}stat?op=queryday&name=`;
    return axios.post(`${type ? day : total}${id}`);
}