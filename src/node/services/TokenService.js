import jwt from 'jsonwebtoken';
import { HttpError } from 'express-power-router';
import config from '../config';

const validateCredentials = (username, password) => {
    if(!(username && password)) 
        throw new Error('Usuário e senha são campos obigatórios');

    if(username !== config.get("DEFAULT_USER") || password !== config.get("DEFAULT_PASSWORD"))
        throw new Error("Usuário ou senha inválidos");
}

class TokenService {

  constructor(tokenSecret) {
    this.tokenSecret = tokenSecret;
  }

  async sign({ username, password }, expiresIn = '7d') {
    try {
        validateCredentials(username, password);
        return new Promise((resolve, reject) => {
            return jwt.sign({ username, password }, this.tokenSecret, expiresIn && { expiresIn }, (err, token) => {
                if (err) reject(new Error("Erro ao autenticar usuário"));
                else resolve({ accessToken: token });
            });
        });   
    } catch (err) {
        throw new HttpError(err.message, 401, null);
    }
  }

}

export default new TokenService(config.get('TOKEN_SECRET'));