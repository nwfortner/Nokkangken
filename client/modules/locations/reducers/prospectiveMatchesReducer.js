import {REQUEST_PROSPECTIVE_MATCHES_SENT} from '../locationsActions.js';
import {REQUEST_PROSPECTIVE_MATCHES_RECIEVED} from '../locationsActions.js';

const getProspectiveMatches = (state = null, action) => {
  switch (action.type) {
    case REQUEST_PROSPECTIVE_MATCHES_SENT:
      return {
        isFetching: action.isFetching
      };
    case REQUEST_PROSPECTIVE_MATCHES_RECIEVED:
      return {
        isFetching: action.isFetching,
        prospectiveMatches: action.prospectiveMatches
      };
    default: return state;
  }
};

export default getProspectiveMatches;
