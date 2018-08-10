import Controller from '@ember/controller';
import Service from '@ember/service';

export default Controller.extend({
    loginName: null,
    password: null,
    session: Service,
    actions: {
        authenticate() {
            var session = this.get('session');
            var ln = this.get('loginName');
            var pw = this.get('password');

            session.authenticate( ln, pw).then(() => {
                    alert('Logged in!');
                    this.transitionToRoute('students');
                }, (err) => {
                    alert('Error with login! ' + err.responseText);
                });
        }
    }
});
