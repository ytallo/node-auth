import { RestController, POST } from '../config/router';
import tokenService from '../services/TokenService';

@RestController("/")
export default class TokenRouter {
    
    @POST("/token")
    token({ body }) {
        return tokenService.sign(body);
    }
}
