import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-j5jd.onrender.com'
})

//promises assíncronas para o cadastro de usuário
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

//promises assíncronas para o login de usuário
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}