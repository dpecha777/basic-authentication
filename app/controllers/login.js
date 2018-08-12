import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    loginName: null,
    password: null,
    session: service(),
    actions: {
        authenticate() {
            var ln = this.get('loginName');
            var pw = this.get('password');

            this.get('session').authenticate(ln, pw).then(() => {
                    alert('Logged in!');
                    this.transitionToRoute('students');
                }, (err) => {
                    alert('Error with login! ' + err.responseText);
                });
        }
    }
});
