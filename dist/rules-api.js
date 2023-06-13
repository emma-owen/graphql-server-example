import { RESTDataSource } from '@apollo/datasource-rest';
class RulesAPI extends RESTDataSource {
    constructor() {
        super();
        // this.baseURL = "http://localhost:4000/graphql";
        this.baseURL = 'http://10.72.137.148:10186/soar';
    }
    async getRules(body) {
        return this.post('/', {
            body,
        });
    }
}
export default RulesAPI;
