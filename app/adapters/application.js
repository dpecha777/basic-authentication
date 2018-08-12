import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    session: service(),
    headers: computed('session.token', function() {
        return {
            'Authorization': `Bearer ${this.get('session.token')}`
        }
    })
});
