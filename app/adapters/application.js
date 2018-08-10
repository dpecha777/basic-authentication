import DS from 'ember-data';
import Service from '@ember/service';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    session: Service,
    headers: Service.computed('session.token', function() {
        return {
            'Authorization': `Bearer ${this.get('session.token')}`
        }
    })
});
