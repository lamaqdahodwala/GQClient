export class GraphQLClient{
    constructor(url, headers=null){
        this.url = url
        this.headers = headers
    }

    async send(data, vars=null, operation_name=null){
        let resp = await fetch(this.url, {
            body: JSON.stringify({
                "query": data,
                "variables": vars,
                "operationName": operation_name
            })
        })
        let json = await resp.json()
        return json
    }
}