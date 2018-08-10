import Service from '@ember/service';

export default Service.extend({
    token: null,
    authenticate(log, pass) {
        return Service.$.ajax({
            method: 'POST',
            url: '/token',
            data: { username: log, password: pass }
        }).then((info) => {
            this.set('token', info.access_token);
        });
    }
});
