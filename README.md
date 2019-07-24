# Node Auth

Documentação de utilização da api de autenticação node

## Autenticação

### Request
```
curl --request POST \
  --url http://localhost:8080/token \
  --header 'content-type: application/json' \
  --data '{
	"username": "Numenu",
	"password": "123123"
}'
```

### Response
```
{
  "message": "Usuário autenticado com sucesso!",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik51bWVudSIsInBhc3N3b3JkIjoiMTIzMTIzIiwiaWF0IjoxNTYzOTMxOTAxLCJleHAiOjE1NjQ1MzY3MDF9.Z5RX_ZDyrFJrTKlYkzdNYj8RksPdc9y6zqGZwgfDRVo"
  }
}
```