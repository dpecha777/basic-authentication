import Service, { inject as service } from '@ember/service';



export default Service.extend({
    token: null,
    ajax: service(),
    authenticate(log, pass) {
        return this.get('ajax').post('/token', {data: { username: log, password: pass }})
        .then((info) => {
            this.set('token', info.access_token);
        });
    }
});